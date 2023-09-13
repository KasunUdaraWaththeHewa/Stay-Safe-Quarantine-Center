const router = require("express").Router();
let medicine= require("../models/Pharmacy");

router.route("/add").post((req,res)=>{
  console.log("Add route calling in backend")
    const medicine_name=req.body.medicine_name;
    const medicine_id=req.body.medicine_id;
    const med_date=req.body.med_date;
    const quntity=req.body.quntity;

     
    const newMedicine = new medicine({
        medicine_name,
        medicine_id,
        med_date,
        quntity
    })

    newMedicine.save().then(()=>{
        res.json("Medicine Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:medicine_id").get(async (req, res) => {
  let medicine_id = req.params.medicine_id;
  const user = await medicine.findOne({ medicine_id  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Medicine not found" });
      }
      res.status(200).json({ status: "Medicine fetched", user });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching Medicine", error: err.message });
    });
});


router.route("/update/:medicine_id").put(async (req, res) => {
  let medicine_id = req.params.medicine_id;
  
  const {
    medicine_name,
    med_date,
    quntity
  } = req.body;
     

  const updateMedicine = {
    medicine_name,
    med_date,
    quntity
  };

  try {
    const updatedMedicine = await medicine.findOneAndUpdate(
      { medicine_id: medicine_id },
      updateMedicine,
      { new: true }
    );

    if (updatedMedicine) {
      res.status(200).send({ status: "Medicine updated", data: updatedMedicine });
    } else {
      res.status(404).send({ status: "Medicine not found"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});

router.route("/delete/:medicine_id").delete(async (req, res) => {
  let medicine_id = req.params.medicine_id;

  try {
    const deletedMedicine = await medicine.findOneAndDelete({ medicine_id });
    if (!deletedMedicine) {
      return res.status(404).json({ error: "Medicine not found" });
    }
    res.status(200).json({ status: "Medicine data deleted", medicine: deletedMedicine });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting medicine", error: err.message });
  }
});

router.route("/").get((req, res) => {
  medicine.find()
    .then((medicine) => {
      res.json(medicine);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});


module.exports=router;