const service = require("../models/Service");

const addService = async (req, res) => {
  const {
    serviceID,
    serviceName,
    serviceImage,
    serviceDetails
  } = req.body;

  const newService = new service({
    serviceID,
    serviceName,
    serviceImage,
    serviceDetails
  });

  newService.save().then(() => {
    res.json("Service Added");
  }).catch((err) => {
    console.log(err);
  });
};

const getServiceByServiceID = async (req, res) => {
  let serviceID = req.params.serviceID;
  const ser = await service.findOne({ serviceID })
    .then((ser) => {
      if (!ser) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.status(200).json({ status: "Service fetched", ser });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching service", error: err.message });
    });
};

const updateServiceByServiceID = async (req, res) => {
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
};

const deleteServiceByServiceID = async (req, res) => {
  let serviceID = req.params.serviceID;

  try {
    const deletedService = await service.findOneAndDelete({ serviceID });
    if (!deletedService) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({ status: "Service's data deleted", service: deletedService });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting service", error: err.message });
  }
};

const getAllServices = async (req, res) => {
  service.find()
    .then((services) => {
      res.json(services);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addService,
  getServiceByServiceID,
  updateServiceByServiceID,
  deleteServiceByServiceID,
  getAllServices,
};
