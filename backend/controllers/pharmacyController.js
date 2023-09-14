const medicine = require("../models/Pharmacy");

const addMedicine = async (req, res) => {
  if (req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");

  const {
    medicine_name,
    medicine_id,
    med_date,
    quantity,
  } = req.body;

  const newMedicine = new medicine({  
    medicine_name,
    medicine_id,
    med_date,
    quantity,
  });

  newMedicine.save().then(() => {
    res.json("Medicine Added");
  }).catch((err) => {
    console.log(err);
  });
};

const getMedicineByMedicineId = async (req, res) => {
  if (req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");

  let medicine_id = req.params.medicine_id;
  const medicineObj = await medicine.findOne({ medicine_id })
    .then((medicineObj) => {
      if (!medicineObj) {
        return res.status(404).json({ error: "Medicine not found" });
      }  
      res.status(200).json({ status: "Medicine fetched", medicineObj });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching medicine", error: err.message });
    });
};

const updateMedicineByMedicineId = async (req, res) => {
  if (req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");

  let medicine_id = req.params.medicine_id;
  const {
    medicine_name,
    med_date,
    quantity,
  } = req.body;

  const updateMedicine = {
    medicine_name,
    med_date,
    quantity,
  };

  try {
    const updatedMedicine = await medicine.findOneAndUpdate(
      { medicine_id: medicine_id },
      updateMedicine,
      { new: true }
    );

    if (updatedMedicine) {
      res.status(200).send({ status: "Medicine updated", data: updateMedicine });
    } else {
      res.status(404).send({ status: "Medicine not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
};

const deleteMedicineByMedicineId = async (req, res) => {
  if (req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");

  let medicine_id = req.params.medicine_id;

  try {
    const deletedMedicine = await medicine.findOneAndDelete({ medicine_id });
    if (!deletedMedicine) {
      return res.status(404).json({ error: "Medicine not found" });
    }
    res.status(200).json({ status: "Medicine data deleted", staff: deletedMedicine });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting Medicine", error: err.message });
  }
};

const getAllMedicine = async (req, res) => {
  if (req.user.role !== 'pharmacy') return res.status(403).send("You are not allowed to make these changes");

  medicine.find()
    .then((medicine) => {
      res.json(medicine);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addMedicine,
  getMedicineByMedicineId,
  updateMedicineByMedicineId,
  deleteMedicineByMedicineId,
  getAllMedicine,
};
