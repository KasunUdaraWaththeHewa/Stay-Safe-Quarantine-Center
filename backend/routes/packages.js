const router =require("express").Router();
let package= require("../models/package");
// const requireAuth = require("../middleware/requireAuth");
// router.use(requireAuth);
router.route("/add").post((req,res)=>{
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
    const packageID=req.body.packageID;
    const packageName=req.body.packageName;
    const packageImage = req.body.packageImage;
    const details=req.body.details;
    const detailList=req.body.detailList;
    const price=req.body.price;
    
    const newPackage= new package({
        packageID,
        packageName,
        packageImage,
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

router.route("/get/:packageID").get(async (req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  let packageID = req.params.packageID;
  const pkg = await package.findOne({ packageID })
    .then((pkg) => {
      if (!pkg) {
        return res.status(404).json({ error: "Package not found" });
      }
      res.status(200).json({ status: "Package fetched", pkg })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching package", error: err.message });
    });
});

  
router.route("/update/:packageID").put(async (req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  let packageID = req.params.packageID;
  const {
        packageName,
        packageImage,
        details,
        detailList,
        price
  } = req.body;

  const updatePackage = {
        packageName,
        packageImage,
        details,
        detailList,
        price
  };

  try {
    const updatedPackage = await package.findOneAndUpdate(
      { packageID: packageID },
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




router.route("/delete/:packageID").delete(async (req, res) => {
  if(req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");
  let packageID = req.params.packageID;

  try {
    const deletedPackage = await package.findOneAndDelete({ packageID });
    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json({ status: "Package's data deleted", staff: deletedPackage });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting Package", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    package.find()
      .then((package) => {
        console.log("Came Inside to package route")
        res.json(package);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;