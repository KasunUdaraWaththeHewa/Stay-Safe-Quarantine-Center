const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const staffController = require("../controllers/staffController");

router.use(requireAuth);

router.route("/add").post(staffController.addStaff);

router.route("/get/:staffID").get(staffController.getStaffByStaffID);

router.route("/update/:staffID").put(staffController.updateStaffByStaffID);

router.route("/delete/:staffID").delete(staffController.deleteStaffByStaffID);

router.route("/").get(staffController.getAllStaff);

module.exports = router;
