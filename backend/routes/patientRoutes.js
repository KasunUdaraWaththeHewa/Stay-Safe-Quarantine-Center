const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const patientController = require("../controllers/patientController");

router.use(requireAuth);

router.route("/add").post(patientController.addPatient);

router.route("/get/:nicNumber").get(patientController.getPatientByNICNumber);

router.route("/update/:nicNumber").put(patientController.updatePatientByNICNumber);

router.route("/delete/:nicNumber").delete(patientController.deletePatientByNICNumber);

router.route("/").get(patientController.getAllPatients);

module.exports = router;
