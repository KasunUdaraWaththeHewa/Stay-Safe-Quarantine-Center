const package = require("../models/package");

const addPackage = async (req, res) => {
  const {
    packageID,
    packageName,
    packageImage,
    details,
    detailList,
    price
  } = req.body;

  const newPackage = new package({
    packageID,
    packageName,
    packageImage,
    details,
    detailList,
    price
  });

  newPackage.save().then(() => {
    res.json("Package Added");
  }).catch((err) => {
    console.log(err);
  });
};

const getPackageByPackageID = async (req, res) => {
  let packageID = req.params.packageID;
  const pkg = await package.findOne({ packageID })
    .then((pkg) => {
      if (!pkg) {
        return res.status(404).json({ error: "Package not found" });
      }
      res.status(200).json({ status: "Package fetched", pkg });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching package", error: err.message });
    });
};

const updatePackageByPackageID = async (req, res) => {
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
};

const deletePackageByPackageID = async (req, res) => {
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
};

const getAllPackages = async (req, res) => {
  package.find()
    .then((packages) => {
      res.json(packages);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addPackage,
  getPackageByPackageID,
  updatePackageByPackageID,
  deletePackageByPackageID,
  getAllPackages,
};
