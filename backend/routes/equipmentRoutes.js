const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const equipmentController = require("../controllers/equipmentController");

router.use(requireAuth);

router.route("/add").post(equipmentController.addEquipment);

router.route("/get/:serialNumber").get(equipmentController.getEquipmentBySerialNumber);

router.route("/update/:serialNumber").put(equipmentController.updateEquipmentBySerialNumber);

router.route("/delete/:serialNumber").delete(equipmentController.deleteEquipmentBySerialNumber);

router.route("/").get(equipmentController.getAllEquipment);

module.exports = router;
