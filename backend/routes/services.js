const router =require("express").Router();
let service= require("../models/Service");
//const requireAuth = require("../middleware/requireAuth");

//router.use(requireAuth);
router.route("/add").post((req,res)=>{
  //if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
    const serviceID=req.body.serviceID;
    const serviceName=req.body.serviceName;
    const serviceImage = req.body.serviceImage;
    const serviceDetails=req.body.serviceDetails;
    
    const newService= new service({
        serviceID,
        serviceName,
        serviceImage,
        serviceDetails
    })

    newService.save().then(()=>{
        res.json("Service Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:serviceID").get(async (req, res) => {
  //if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  let serviceID = req.params.serviceID;
  const ser = await service.findOne({ serviceID })
    .then((ser) => {
      if (!ser) {
        return res.status(404).json({ error: "service not found" });
      }
      res.status(200).json({ status: "service fetched", ser })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching service", error: err.message });
    });
});

  
router.route("/update/:serviceID").put(async (req, res) => {
  //if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  let serviceID = req.params.serviceID;
  const {
    serviceName,
    serviceImage,
    serviceDetails
  } = req.body;

  const updateService = {
    serviceName,
    serviceImage,
    serviceDetails
  };

  try {
    const updatedService = await service.findOneAndUpdate(
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
  //if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
  let serviceID = req.params.serviceID;

  try {
    const deletedService = await service.findOneAndDelete({ serviceID });
    if (!deletedService) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({ status: "Service's data deleted", service: deletedService });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting service ", error: err.message });
  }
});


  router.route("/").get((req, res) => {
    //if(req.user.role !== 'staff') return res.status(403).send("You are not allowed to make these changes");
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