const router =require("express").Router();
let service= require("../models/service");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.route("/add").post((req,res)=>{
  if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
    const serviceID=req.body.serviceID;
    const serviceName=req.body.serviceName;
    const details=req.body.details;
    
    const newService= new service({
        serviceID,
        serviceName,
        details
    })

    newService.save().then(()=>{
        res.json("Service Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:serviceID").get(async (req, res) => {
  if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  let serviceID = req.params.serviceID;
  const service = await service.findOne({ serviceID })
    .then((service) => {
      if (!service) {
        return res.status(404).json({ error: "service not found" });
      }
      res.status(200).json({ status: "service fetched", service })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching service", error: err.message });
    });
});

  
router.route("/update/:serviceID").put(async (req, res) => {
  if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  let serviceID = req.params.serviceID;
  const {
    serviceName,
    details
  } = req.body;

  const updateService = {
    serviceName,
    details
  };

  try {
    const updatedService = await package.findOneAndUpdate(
      { serviceID: serviceID },
      updateService,
      { new: true }
    );

    if (updatedService) {
      res.status(200).send({ status: "Service updated", data: updatedService });
    } else {
      res.status(404).send({ status: "Service not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});




router.route("/delete/:serviceID").delete(async (req, res) => {
  if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  let serviceID = req.params.serviceID;

  try {
    const deletedService = await staff.findOneAndDelete({ serviceID });
    if (!deletedService) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({ status: "Service's data deleted", staff: deletedService });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting service ", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
    service.find()
      .then((service) => {
        res.json(service);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;