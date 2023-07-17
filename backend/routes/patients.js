const router =require("express").Router();
let patient= require("../models/Patient");

router.route("/add").post((req,res)=>{
    const fullName=req.body.fullName;
    const gender=req.body.gender;
    const dateOfBirth=Date(req.body.dateOfBirth);
    const nationality=req.body.nationality;
    const nicNumber=req.body.nicNumber;
    const email=req.body.email;
    const healthInfo=req.body.healthInfo;
    const allergies=req.body.allergies;
    const medicalsBeingTaken=req.body.medicalsBeingTaken;
    const emergencyContactNumber=req.body.emergencyContactNumber;
    const existingMedicalCondition=req.body.existingMedicalCondition;
    const symptoms=req.body.symptoms;
    const dateOfArrival=Date(req.body.dateOfArrival);
    const contryOfDeparture=req.body.contryOfDeparture;
    const anyTransitPoint=req.body.anyTransitPoint;
    const flightOrTransportDetails=req.body.flightOrTransportDetails;
    const dateOfCheckIn=req.body.dateOfCheckIn;
    const assignedRoomNo=req.body.assignedRoomNo;
    const durationOfStay=req.body.durationOfStay;
    const anySpecificRequirements=req.body.anySpecificRequirements;

    const newPatient = new patient({
        fullName,
        gender,
        dateOfBirth,
        nationality,
        nicNumber,
        email,
        healthInfo,
        allergies,
        medicalsBeingTaken,
        emergencyContactNumber,
        existingMedicalCondition,
        symptoms,
        dateOfArrival,
        contryOfDeparture,
        anyTransitPoint,
        flightOrTransportDetails,
        dateOfCheckIn,
        assignedRoomNo,
        durationOfStay,
        anySpecificRequirements
    })
    newPatient.save().then(()=>{
        res.json("Patient Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:id").get(async (req, res) => {
    try {
      const patientID = req.params.id;
  
      const patient = await Patient.findById(patientID);
  
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
  
      res.json(patient);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
    const {fullName,
        gender,
        dateOfBirth,
        nationality,
        nicNumber,
        email,
        healthInfo,
        allergies,
        medicalsBeingTaken,
        emergencyContactNumber,
        existingMedicalCondition,
        symptoms,
        dateOfArrival,
        contryOfDeparture,
        anyTransitPoint,
        flightOrTransportDetails,
        dateOfCheckIn,
        assignedRoomNo,
        durationOfStay,
        anySpecificRequirements}=req.body;

    const updatePatient={
        fullName,
        gender,
        dateOfBirth,
        nationality,
        nicNumber,
        email,
        healthInfo,
        allergies,
        medicalsBeingTaken,
        emergencyContactNumber,
        existingMedicalCondition,
        symptoms,
        dateOfArrival,
        contryOfDeparture,
        anyTransitPoint,
        flightOrTransportDetails,
        dateOfCheckIn,
        assignedRoomNo,
        durationOfStay,
        anySpecificRequirements
    }
    const update=await patient.findByIdAndUpdate(userID,updatePatient)
    .then(()=>{
        res.status(200).send({status:"Patient's data Updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let patientID = req.params.id;
  
    try {
      await patient.findByIdAndDelete(patientID);
      res.status(200).send({ status: "Patient's data deleted" });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with deleting patient", error: err.message });
    }
  });
  router.route("/").get((req, res) => {
    patient.find()
      .then((patient) => {
        res.json(patient);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;