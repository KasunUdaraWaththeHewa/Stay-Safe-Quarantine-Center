const staff = require("../models/staff");

const addStaff = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");

  const {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    staffID,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  } = req.body;

  const newStaff = new staff({
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    staffID,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  });

  newStaff.save().then(() => {
    res.json("Staff Added");
  }).catch((err) => {
    console.log(err);
  });
};

const getStaffByStaffID = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");

  let staffID = req.params.staffID;
  const user = await staff.findOne({ staffID })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Staff member not found" });
      }
      res.status(200).json({ status: "Staff member fetched", user });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching staff member", error: err.message });
    });
};

const updateStaffByStaffID = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");

  const staffID = req.params.staffID;
  const {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  } = req.body;

  const updateStaff = {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  };

  try {
    const updatedStaff = await staff.findOneAndUpdate(
      { staffID: staffID },
      updateStaff,
      { new: true }
    );

    if (updatedStaff) {
      res.status(200).send({ status: "Staff member updated", data: updatedStaff });
    } else {
      res.status(404).send({ status: "Staff member not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
};

const deleteStaffByStaffID = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");

  let staffID = req.params.staffID;

  try {
    const deletedStaff = await staff.findOneAndDelete({ staffID });
    if (!deletedStaff) {
      return res.status(404).json({ error: "Staff member not found" });
    }
    res.status(200).json({ status: "Staff member's data deleted", staff: deletedStaff });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting staff member", error: err.message });
  }
};

const getAllStaff = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("You are not allowed to make these changes");

  staff.find()
    .then((staff) => {
      res.json(staff);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addStaff,
  getStaffByStaffID,
  updateStaffByStaffID,
  deleteStaffByStaffID,
  getAllStaff,
};
