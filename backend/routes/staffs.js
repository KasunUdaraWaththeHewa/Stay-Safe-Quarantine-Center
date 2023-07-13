const router =require("express").Router();
let staff= require("../models/Staff");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const LastName=req.body.LastName;
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
})