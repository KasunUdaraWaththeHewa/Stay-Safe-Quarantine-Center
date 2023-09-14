const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const pharmacyController = require("../controllers/pharmacyController");

router.use(requireAuth);

router.route("/add").post(pharmacyController.addMedicine);

router.route("/get/:medicine_id").get(pharmacyController.getMedicineByMedicineId);

router.route("/update/:medicine_id").put(pharmacyController.updateMedicineByMedicineId);

router.route("/delete/:medicine_id").delete(pharmacyController.deleteMedicineByMedicineId);

router.route("/").get(pharmacyController.getAllMedicine);

module.exports = router;
