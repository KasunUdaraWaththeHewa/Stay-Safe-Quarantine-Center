const router =require("express").Router();
let doctor= require("../models/Doctor");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const doctorID=req.body.doctorID;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const medicalLicenseNo=req.body.medicalLicenseNo;
    const specialization=req.body.specialization;
    const professionalExperience=req.body.professionalExperience;
    const address=req.body.address;
    const avalibleDays=req.body.avalibleDays;
    const emergencyContactNumbers=req.body.emergencyContactNumbers;
    const gender=req.body.gender;
    const relationship=req.body.relationship;
    const skillsAndTraining=req.body.skillsAndTraining;

    const newDoctor= new doctor({
        firstName,
        lastName,
        nurseID,
        phoneNumber,
        email,
        nursingLicenseNo,
        specialization,
        professionalExperience,
        address,
        avalibleDays,
        emergencyContactNumbers,
        gender,
        relationship,
        skillsAndTraining
    })

    newNurse.save().then(()=>{
        res.json("Nurse Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:id").get(async (req, res) => {
  try {
    const doctorID = req.params.id;

    const doctor = await Doctor.findById(doctorID);

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.json(doctor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.route("/update/:id").put(async(req,res)=>{
  let userID=req.params.id;
  const {firstName,
    lastName,
    nurseID,
    phoneNumber,
    email,
    nursingLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining}=req.body;

  const updateDoctor={
    firstName,
    lastName,
    nurseID,
    phoneNumber,
    email,
    nursingLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining
  }
  const update=await Doctor.findByIdAndUpdate(userID,updateDoctor)
  .then(()=>{
      res.status(200).send({status:"Doctor's data Updated",user:update})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error with updating data",error:err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let doctorID = req.params.id;

  try {
    await Doctor.findByIdAndDelete(doctorID);
    res.status(200).send({ status: "Doctor's data deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with deleting doctor", error: err.message });
  }
});
router.route("/").get((req, res) => {
  Doctor.find()
    .then((doctor) => {
      res.json(doctor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});
module.exports=router;