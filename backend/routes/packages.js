const router =require("express").Router();
let package= require("../models/package");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.route("/add").post((req,res)=>{
  if(req.user.role !== 'kitchen') return res.status(403).send("You are not allowed to make these changes");
    const packageName=req.body.packageName;
    const details=req.body.details;
    const detailList=req.body.detailList;
    const price=req.body.price;
    const pacakageID=req.body.pacakageID;

    const newPackage= new package({
        pacakageID,
        packageName,
        details,
        detailList,
        price
    })

    newPackage.save().then(()=>{
        res.json("Package Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:pacakageID").get(async (req, res) => {
  if(req.user.role !== 'kitchen') return res.status(403).send("You are not allowed to make these changes");
  let pacakageID = req.params.pacakageID;
  const package = await package.findOne({ pacakageID })
    .then((package) => {
      if (!package) {
        return res.status(404).json({ error: "Package not found" });
      }
      res.status(200).json({ status: "Package fetched", package })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching package", error: err.message });
    });
});

  
router.route("/update/:pacakageID").put(async (req, res) => {
  if(req.user.role !== 'kitchen') return res.status(403).send("You are not allowed to make these changes");
  let pacakageID = req.params.pacakageID;
  const {
        packageName,
        details,
        detailList,
        price
  } = req.body;

  const updatePackage = {
        packageName,
        details,
        detailList,
        price
  };

  try {
    const updatedPackage = await package.findOneAndUpdate(
      { pacakageID: pacakageID },
      updatePackage,
      { new: true }
    );

    if (updatedPackage) {
      res.status(200).send({ status: "Package updated", data: updatedPackage });
    } else {
      res.status(404).send({ status: "Package not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});




router.route("/delete/:pacakageID").delete(async (req, res) => {
  if(req.user.role !== 'kitchen') return res.status(403).send("You are not allowed to make these changes");
  let pacakageID = req.params.pacakageID;

  try {
    const deletedPackage = await staff.findOneAndDelete({ pacakageID });
    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json({ status: "Package's data deleted", staff: deletedPackage });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting staff member", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    if(req.user.role !== 'kitchen') return res.status(403).send("You are not allowed to make these changes");
    package.find()
      .then((package) => {
        res.json(package);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;