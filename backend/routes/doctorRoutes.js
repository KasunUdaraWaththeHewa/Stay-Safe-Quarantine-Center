const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const doctorController = require("../controllers/doctorController");

router.use(requireAuth);

router.route("/add").post(doctorController.addDoctor);

router.route("/get/:doctorID").get(doctorController.getDoctorByID);

router.route("/update/:doctorID").put(doctorController.updateDoctorByID);

router.route("/delete/:doctorID").delete(doctorController.deleteDoctorByID);

router.route("/").get(doctorController.getAllDoctors);

module.exports = router;
