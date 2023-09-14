const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.route("/add").post(serviceController.addService);

router.route("/get/:serviceID").get(serviceController.getServiceByServiceID);

router.route("/update/:serviceID").put(serviceController.updateServiceByServiceID);

router.route("/delete/:serviceID").delete(serviceController.deleteServiceByServiceID);

router.route("/").get(serviceController.getAllServices);

module.exports = router;
