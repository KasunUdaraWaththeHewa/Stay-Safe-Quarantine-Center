const router = require("express").Router();
let nurse= require("../models/Nurse");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.route("/add").post((req,res)=>{
  
  if((req.user.role !== 'admin')||(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const nurseID=req.body.nurseID;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const nursingLicenseNo=req.body.nursingLicenseNo;
    const specialization=req.body.specialization;
    const professionalExperience=req.body.professionalExperience;
    const address=req.body.address;
    const avalibleDays=req.body.avalibleDays;
    const emergencyContactNumbers=req.body.emergencyContactNumbers;
    const gender=req.body.gender;
    const relationship=req.body.relationship;
    const skillsAndTraining=req.body.skillsAndTraining;

    const newNurse= new nurse({
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

router.route("/get/:nurseID").get(async (req, res) => {
  
  if((req.user.role !== 'admin')||(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  let nurseID = req.params.nurseID;
  const user = await nurse.findOne({ nurseID })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Nurse not found" });
      }
      res.status(200).json({ status: "Nurse fetched", user });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching nurse", error: err.message });
    });
});


router.route("/update/:nurseID").put(async (req, res) => {
  
  if((req.user.role !== 'admin')||(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  let nurseID = req.params.nurseID;
  const {
    firstName,
    lastName,
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
  } = req.body;

  const updateNurse = {
    firstName,
    lastName,
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
  };

  try {
    const updatedNurse = await nurse.findOneAndUpdate(
      { nurseID: nurseID },
      updateNurse,
      { new: true }
    );

    if (updatedNurse) {
      res.status(200).send({ status: "Nurse updated", data: updatedNurse });
    } else {
      res.status(404).send({ status: "Nurse not found"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});

router.route("/delete/:nurseID").delete(async (req, res) => {
  
  if((req.user.role !== 'admin')||(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  let nurseID = req.params.nurseID;

  try {
    const deletedNurse = await nurse.findOneAndDelete({ nurseID });
    if (!deletedNurse) {
      return res.status(404).json({ error: "Nurse not found" });
    }
    res.status(200).json({ status: "Nurse's data deleted", nurse: deletedNurse });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting nurse", error: err.message });
  }
});

router.route("/").get((req, res) => {
  
  if((req.user.role !== 'admin')||(req.user.role !== 'staff')) return res.status(403).send("You are not allowed to make these changes");

  nurse.find()
    .then((nurse) => {
      res.json(nurse);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});


module.exports=router;