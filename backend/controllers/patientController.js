const patient = require("../models/Patient");

const addPatient = async (req, res) => {
  if (!((req.user.role === 'admin') || (req.user.role === 'staff'))) return res.status(403).send("You are not allowed to make these changes");

  const {
    fullName,
    gender,
    dateOfBirth,
    nationality,
    nicNumber,
    email,
    results,
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
    anySpecificRequirements,
  } = req.body;

  const newPatient = new patient({
    fullName,
    gender,
    dateOfBirth,
    nationality,
    nicNumber,
    email,
    results,
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
    anySpecificRequirements,
  });

  newPatient.save().then(() => {
    res.json("Patient Added");
  }).catch((err) => {
    console.log(err);
  });
};

const getPatientByNICNumber = async (req, res) => {
  if (!((req.user.role === 'admin') || (req.user.role === 'staff'))) return res.status(403).send("You are not allowed to make these changes");

  const nicNumber = req.params.nicNumber;
  const user = await patient.findOne({ nicNumber })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.status(200).json({ status: "Patient fetched", user });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching patient", error: err.message });
    });
};

const updatePatientByNICNumber = async (req, res) => {
  if (!((req.user.role === 'admin') || (req.user.role === 'staff'))) return res.status(403).send("You are not allowed to make these changes");

  const nicNumber = req.params.nicNumber;
  const {
    fullName,
    gender,
    dateOfBirth,
    nationality,
    email,
    results,
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
    anySpecificRequirements,
  } = req.body;

  const updatePatient = {
    fullName,
    gender,
    dateOfBirth,
    nationality,
    email,
    results,
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
    anySpecificRequirements,
  };

  try {
    const updatedPatient = await patient.findOneAndUpdate(
      { nicNumber: nicNumber },
      updatePatient,
      { new: true }
    );

    if (updatedPatient) {
      res.status(200).send({ status: "Patient updated", data: updatedPatient });
    } else {
      res.status(404).send({ status: "Patient not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
};

const deletePatientByNICNumber = async (req, res) => {
  if (!((req.user.role === 'admin') || (req.user.role === 'staff'))) return res.status(403).send("You are not allowed to make these changes");

  const nicNumber = req.params.nicNumber;
  try {
    const patient = await patient.findOneAndDelete({ nicNumber });
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).send({ status: "Patient's data deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with deleting patient", error: err.message });
  }
};

const getAllPatients = async (req, res) => {
  if (!((req.user.role === 'admin') || (req.user.role === 'staff'))) {
    console.log(3);
    return res.status(403).send("You are not allowed to make these changes");
  }
  patient.find()
    .then((patients) => {
      res.json(patients);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addPatient,
  getPatientByNICNumber,
  updatePatientByNICNumber,
  deletePatientByNICNumber,
  getAllPatients,
};
