const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const notificationController = require("../controllers/notificationController");

router.use(requireAuth);

router.route("/add").post(notificationController.addNotification);

router.route("/get/:notificationID").get(notificationController.getNotificationByNotificationID);

router.route("/update/:notificationID").put(notificationController.updateNotificationByNotificationID);

router.route("/delete/:notificationID").delete(notificationController.deleteNotificationByNotificationID);

router.route("/").get(notificationController.getAllNotifications);

module.exports = router;
