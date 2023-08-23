const router =require("express").Router();
let equipment= require("../models/Equipment");

router.route("/add").post((req,res)=>{
    const Name=req.body.Name;
    const Category=req.body.Category;
    const SerialNumber=req.body.SerialNumber;
    const PurchaseDate=req.body.PurchaseDate;
    const Manufacturer=req.body.Manufacturer;
    const Supplier=req.body.Supplier;
    const Location=req.body.Location;
    const Price=req.body.Price;
    const CurrentStatus=req.body.CurrentStatus;

    const newEquipment= new equipment({
        Name,
        Category,
        SerialNumber,
        PurchaseDate,
        Manufacturer,
        Supplier,
        Location,
        Price,
        CurrentStatus
    })

    newEquipment.save().then(()=>{
        res.json("Equipment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:SerialNumber").get(async (req, res) => {
  let SNum = req.params.SerialNumber;
  const equip = await equipment.findOne({ SNum })
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

router.route("/update/:doctorID").put(async (req, res) => {
  let SNum = req.params.SerialNumber;
  const {
        Name,
        Category,
        SerialNumber,
        PurchaseDate,
        Manufacturer,
        Supplier,
        Location,
        Price,
        CurrentStatus
  } = req.body;

  const updateEquipment = {
        Name,
        Category,
        SerialNumber,
        PurchaseDate,
        Manufacturer,
        Supplier,
        Location,
        Price,
        CurrentStatus
  };

  try {
    const updatedEquipment = await equip.findOneAndUpdate(
      { SerialNumber: SNum },
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


router.route("/delete/:SerialNumber").delete(async (req, res) => {
  let SNum = req.params.SerialNumber;

  try {
    const deletedEquipment = await equip.findOneAndDelete({ SNum });
    if (!deletedEquipment) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    res.status(200).json({ status: "Equipment's data deleted", doctor: deletedEquipment });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting doctor", error: err.message });
  }
});

router.route("/").get((req, res) => {
  equip.find()
    .then((equip) => {
      res.json(equip);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});
module.exports=router;