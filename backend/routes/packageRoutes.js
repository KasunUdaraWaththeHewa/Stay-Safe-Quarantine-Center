const express = require("express");
const router = express.Router();
const packageController = require("../controllers/packageController");

router.route("/add").post(packageController.addPackage);

router.route("/get/:packageID").get(packageController.getPackageByPackageID);

router.route("/update/:packageID").put(packageController.updatePackageByPackageID);

router.route("/delete/:packageID").delete(packageController.deletePackageByPackageID);

router.route("/").get(packageController.getAllPackages);

module.exports = router;
