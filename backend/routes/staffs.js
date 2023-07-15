const router =require("express").Router();
let staff= require("../models/Staff");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.LastName;
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

    const newStaff= new Staff({
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

router.route("/").get((req, res) => {
    const staffID = req.params.staffID;
    
    Staff.findById(staffID)
      .then((staff) => {
        if (!staff) {
          return res.status(404).json({ error: "Staff not found" });
        }
        res.json(staff);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
});

router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
    const {firstName, lastName, employeeID, phoneNumber, email, jobRole, address, staffID, emergencyContactNumber, gender, relationship, skills}=req.body;
    const updateStaff={
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
    }
    const update=await Staff.findByIdAndUpdate(userID,updateStaff)
    .then(()=>{
        res.status(200).send({status:"Staff member Updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

module.exports=router;