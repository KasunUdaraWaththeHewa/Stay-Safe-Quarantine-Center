const router =require("express").Router();
let payment= require("../models/Payment");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.route("/add").post((req,res)=>{
    const payerInName=req.body.payerInName;
    const payerNIC=req.body.payerNIC;
    const patientNIC=req.body.patientNIC;
    const amount=req.body.amount;
    const receiptNumber=req.body.receiptNumber;
    const dateofpayment=Date(req.body.date);
    const time=req.body.time;
    

    const newPayment= new payment({
      dateofpayment,
      time,
      amount,
      receiptNumber,
      payerInName,
      payerNIC,
      patientNIC,
    })

    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:receiptNumber").get(async (req, res) => {
  let receiptNumber = req.params.receiptNumber;
  const paymentObj = await payment.findOne({ receiptNumber })
    .then((paymentObj) => {
      if (!paymentObj) {
        return res.status(404).json({ error: "Payment not found" });
      }  
      res.status(200).json({ status: "Payment fetched", paymentObj })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching payment", error: err.message });
    });
});

  
router.route("/update/:receiptNumber").put(async (req, res) => {
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
});



router.route("/delete/:receiptNumber").delete(async (req, res) => {
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
});


  router.route("/").get((req, res) => {
    payment.find()
      .then((payment) => {
        res.json(payment);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;