const payment = require("../models/Payment");

const addPayment = async (req, res) => {
  if (req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");

  const {
    payerInName,
    payerNIC,
    patientNIC,
    amount,
    receiptNumber,
    dateofpayment,
    time,
  } = req.body;

  const newPayment = new payment({
    dateofpayment,
    time,
    amount,
    receiptNumber,
    payerInName,
    payerNIC,
    patientNIC,
  });

  newPayment.save().then(() => {
    res.json("Payment Added");
  }).catch((err) => {
    console.log(err);
  });
};

const getPaymentByReceiptNumber = async (req, res) => {
  if (req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");

  let receiptNumber = req.params.receiptNumber;
  const paymentObj = await payment.findOne({ receiptNumber })
    .then((paymentObj) => {
      if (!paymentObj) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.status(200).json({ status: "Payment fetched", paymentObj });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching payment", error: err.message });
    });
};

const updatePaymentByReceiptNumber = async (req, res) => {
  if (req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");

  let receiptNumber = req.params.receiptNumber;
  const {
    dateofpayment,
    time,
    amount,
    payerInName,
    payerNIC,
    patientNIC,
  } = req.body;

  const updatePayment = {
    dateofpayment,
    time,
    amount,
    payerInName,
    payerNIC,
    patientNIC,
  };

  try {
    const updatedPayment = await payment.findOneAndUpdate(
      { receiptNumber: receiptNumber },
      updatePayment,
      { new: true }
    );

    if (updatedPayment) {
      res.status(200).send({ status: "Payment updated", data: updatedPayment });
    } else {
      res.status(404).send({ status: "Payment not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
};

const deletePaymentByReceiptNumber = async (req, res) => {
  if (req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");

  let receiptNumber = req.params.receiptNumber;

  try {
    const deletedPayment = await payment.findOneAndDelete({ receiptNumber });
    if (!deletedPayment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    res.status(200).json({ status: "Payment's data deleted", staff: deletedPayment });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting Payment", error: err.message });
  }
};

const getAllPayments = async (req, res) => {
  if (req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  payment.find()
    .then((payments) => {
      res.json(payments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addPayment,
  getPaymentByReceiptNumber,
  updatePaymentByReceiptNumber,
  deletePaymentByReceiptNumber,
  getAllPayments,
};
