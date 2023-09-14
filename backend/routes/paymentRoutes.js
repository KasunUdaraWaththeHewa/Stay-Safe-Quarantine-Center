const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const paymentController = require("../controllers/paymentController");

router.use(requireAuth);

router.route("/add").post(paymentController.addPayment);

router.route("/get/:receiptNumber").get(paymentController.getPaymentByReceiptNumber);

router.route("/update/:receiptNumber").put(paymentController.updatePaymentByReceiptNumber);

router.route("/delete/:receiptNumber").delete(paymentController.deletePaymentByReceiptNumber);

router.route("/").get(paymentController.getAllPayments);

module.exports = router;
