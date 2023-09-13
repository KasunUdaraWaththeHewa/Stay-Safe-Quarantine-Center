const router =require("express").Router();
let pharmacy= require("../models/Pharmacy");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.route("/add").post((req,res)=>{
  if(req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");
    const medicine_name=req.body.medicine_name;
    const medicine_id=req.body.medicine_id;
    const med_date=Date(req.body.med_date);
    const quantity=req.body.quantity;
  
    const newPharmacy= new pharmacy({  
      medicine_name,
      medicine_id,
      med_date,
      quantity
    })

    newPharmacy.save().then(()=>{
        res.json("Medicine Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:medicine_id").get(async (req, res) => {
  if(req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");
  let medicine_id = req.params.medicine_id;
  const medicineObj = await pharmacy.findOne({ medicine_id })
    .then((medicineObj) => {
      if (!medicineObj) {
        return res.status(404).json({ error: "Medicine not found" });
      }  
      res.status(200).json({ status: "medicine fetched", medicineObj })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching medicine", error: err.message });
    });
});

  
router.route("/update/:medicine_id").put(async (req, res) => {
  if(req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");
  let medicine_id = req.params.medicine_id;
  const {
    medicine_name,
    med_date,
    quantity,
  } = req.body;

  const updatePharmacy = {
    medicine_name,
    med_date,
    quantity,

  };

  try {
    const updatedPharmacy = await pharmacy.findOneAndUpdate(
      { medicine_id: medicine_id },
      updatePharmacy,
      { new: true }
    );

    if (updatedPharmacy) {
      res.status(200).send({ status: "Medicine updated", data: updatePharmacy});
    } else {
      res.status(404).send({ status: "Medicine not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});



router.route("/delete/:medicine_id").delete(async (req, res) => {
  if(req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");
  let medicine_id = req.params.medicine_id;

  try {
    const deletedPharmacy = await pharmacy.findOneAndDelete({ medicine_id });
    if (!deletedPharmacy) {
      return res.status(404).json({ error: "medicine not found" });
    }
    res.status(200).json({ status: "Medicine data deleted", staff: deletedPharmacy});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting Medicine", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    if(req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");
    pharmacy.find()
      .then((pharmacy) => {
        res.json(pharmacy);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;