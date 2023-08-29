const router =require("express").Router();
let doctor= require("../models/Doctor");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.route("/add").post((req,res)=>{

  if((req.user.role !== 'admin')|(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

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
        doctorID,
        phoneNumber,
        email,
        medicalLicenseNo,
        specialization,
        professionalExperience,
        address,
        avalibleDays,
        emergencyContactNumbers,
        gender,
        relationship,
        skillsAndTraining
    })

    newDoctor.save().then(()=>{
        res.json("Doctor Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:doctorID").get(async (req, res) => {
  
  if((req.user.role !== 'admin')|(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  let doctorID = req.params.doctorID;
  const user = await doctor.findOne({ doctorID })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Doctor not found" })
      }
      res.status(200).json({ status: "Doctor fetched", user })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching doctor", error: err.message });
    });
});



router.route("/update/:doctorID").put(async (req, res) => {
  
  if((req.user.role !== 'admin')|(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  let doctorID = req.params.doctorID;
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    medicalLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining
  } = req.body;

  const updateDoctor = {
    firstName,
    lastName,
    phoneNumber,
    email,
    medicalLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining
  };

  try {
    const updatedDoctor = await doctor.findOneAndUpdate(
      { doctorID: doctorID },
      updateDoctor,
      { new: true }
    );

    if (updatedDoctor) {
      res.status(200).send({ status: "Doctor updated", data: updatedDoctor });
    } else {
      res.status(404).send({ status: "Doctor not found"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});


router.route("/delete/:doctorID").delete(async (req, res) => {
  
  if((req.user.role !== 'admin')|(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  let doctorID = req.params.doctorID;

  try {
    const deletedDoctor = await doctor.findOneAndDelete({ doctorID });
    if (!deletedDoctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json({ status: "Doctor's data deleted", doctor: deletedDoctor });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting doctor", error: err.message });
  }
});

router.route("/").get((req, res) => {
  
  if((req.user.role !== 'admin')|(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  doctor.find()
    .then((doctor) => {
      res.json(doctor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});
module.exports=router;