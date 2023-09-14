const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const nurseController = require("../controllers/nurseController");

router.use(requireAuth);

router.route("/add").post(nurseController.addNurse);

router.route("/get/:nurseID").get(nurseController.getNurseByNurseID);

router.route("/update/:nurseID").put(nurseController.updateNurseByNurseID);

router.route("/delete/:nurseID").delete(nurseController.deleteNurseByNurseID);

router.route("/").get(nurseController.getAllNurses);

module.exports = router;
