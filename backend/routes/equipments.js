const router =require("express").Router();
let equipment= require("../models/Equipment");
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.route("/add").post((req,res)=>{
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
    const name=req.body.name;
    const category=req.body.category;
    const serialNumber=req.body.serialNumber;
    const purchaseDate= Date(req.body.purchaseDate);
    const manufacturer=req.body.manufacturer;
    const supplier=req.body.supplier;
    const location=req.body.location;
    const price=req.body.price;
    const currentStatus=req.body.currentStatus;

    const newEquipment= new equipment({
        name,
        category,
        serialNumber,
        purchaseDate,
        manufacturer,
        supplier,
        location,
        price,
        currentStatus
    })

    newEquipment.save().then(()=>{
        res.json("Equipment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:serialNumber").get(async (req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  let serialNumber = req.params.serialNumber;
  const equip = await equipment.findOne({ serialNumber })
    .then((equip) => {
      if (!equip) {
        return res.status(404).json({ error: "Equipment not found" })
      }
      res.status(200).json({ status: "Equipment fetched", equip })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching equipment", error: err.message });
    });
});

router.route("/update/:serialNumber").put(async (req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  let serialNumber = req.params.serialNumber;
  const {
      name,
      category,
      purchaseDate,
      manufacturer,
      supplier,
      location,
      price,
      currentStatus
  } = req.body;

  const updateEquipment = {
      name,
      category,
      purchaseDate,
      manufacturer,
      supplier,
      location,
      price,
      currentStatus
  };

  try {
    const updatedEquipment = await equipment.findOneAndUpdate(
      { serialNumber: serialNumber },
      updateEquipment,
      { new: true }
    );

    if (updatedEquipment) {
      res.status(200).send({ status: "Equipment updated", data: updatedEquipment });
    } else {
      res.status(404).send({ status: "Equipment not found"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});


router.route("/delete/:serialNumber").delete(async (req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  let serialNumber = req.params.serialNumber;
  try {
    const deletedEquipment = await equipment.findOneAndDelete({ serialNumber });
    if (!deletedEquipment) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    res.status(200).json({ status: "Equipment's data deleted", doctor: deletedEquipment });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting equipment", error: err.message });
  }
});

router.route("/").get((req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  equipment.find()
    .then((equipment) => {
      res.json(equipment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});
module.exports=router;