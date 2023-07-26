const router =require("express").Router();
let staff= require("../models/staff");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const employeeID=req.body.employeeID;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const jobRole=req.body.jobRole;
    const address=req.body.address;
    const staffID=req.body.staffID;
    const emergencyContactNumber=req.body.emergencyContactNumber;
    const gender=req.body.gender;
    const relationship=req.body.relationship;
    const skills=req.body.skills;

    const newStaff= new staff({
        firstName,
        lastName,
        employeeID,
        phoneNumber,
        email,
        jobRole,
        address,
        staffID,
        emergencyContactNumber,
        gender,
        relationship,
        skills
    })

    newStaff.save().then(()=>{
        res.json("Staff Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:staffID").get(async (req, res) => {
  let staffID = req.params.staffID;
  const staffMember = await staff.findOne({ staffID })
    .then((staff) => {
      if (!staff) {
        return res.status(404).json({ error: "Staff member not found" });
      }
      res.status(200).json({ status: "Staff member fetched", staff });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching staff member", error: err.message });
    });
});

  
router.route("/update/:staffID").put(async (req, res) => {
  let staffID = req.params.staffID;
  const {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  } = req.body;
  
  const updateStaff = {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  };

  const filter = { staffID: staffID };

  try {
    const updatedStaff = await staff.findOneAndUpdate(filter, updateStaff, {
      new: true,
    });
    
    if (updatedStaff) {
      res.status(200).send({ status: "Staff member updated", data: updatedStaff });
    } else {
      res.status(404).send({ status: "Staff member not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});



router.route("/delete/:staffID").delete(async (req, res) => {
  let staffID = req.params.staffID;

  try {
    const deletedStaff = await staff.findOneAndDelete({ staffID });
    if (!deletedStaff) {
      return res.status(404).json({ error: "Staff member not found" });
    }
    res.status(200).json({ status: "Staff member's data deleted", staff: deletedStaff });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting staff member", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    staff.find()
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;