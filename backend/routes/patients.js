const router =require("express").Router();
let patient= require("../models/Patient");

router.route("/add").post((req,res)=>{
    const fullName=req.body.fullName;
    const gender=req.body.gender;
    const dateOfBirth=req.body.dateOfBirth;
    const nationality=req.body.nationality;
    const email=req.body.email;
    const nicNumber=req.body.nicNumber;
    const healthInfo=req.body.healthInfo;
    const allergies=req.body.allergies;
    const medicalsBeingTaken=req.body.medicalsBeingTaken;
    const emergencyContactNumber=req.body.emergencyContactNumber;
    const existingMedicalCondition=req.body.existingMedicalCondition;
    const symptoms=req.body.symptoms;
    const dateOfArrival=req.body.dateOfArrival;
    const contryOfDeparture=req.body.contryOfDeparture;
    const anyTransitPoint=req.body.anyTransitPoint;
    const flightOrTransportDetails=req.body.flightOrTransportDetails;
    const dateOfCheckIn=req.body.dateOfCheckIn;
    const assignedRoomNo=req.body.assignedRoomNo;
    const durationOfStay=req.body.durationOfStay;
    const anySpecificRequirements=req.body.anySpecificRequirements;
})