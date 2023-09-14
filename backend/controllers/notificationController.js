const notification = require("../models/Notification");

const addNotification = async (req, res) => {
  if (!(req.user.role === 'admin')) return res.status(403).send("You are not allowed to make these changes");
  const {
    notificationID,
    title,
    notificationBody,
    reciever
  } = req.body;

  const newNotification = new notification({
    notificationID,
    title,
    notificationBody,
    reciever
  });

  newNotification.save()
    .then(() => {
      res.json("Notification Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getNotificationByNotificationID = async (req, res) => {
  if (!(req.user.role === 'admin')) return res.status(403).send("You are not allowed to make these changes");
  let notificationID = req.params.notificationID;
  const notificationObject = await notification.findOne({ notificationID })
    .then((notificationObject) => {
      if (!notificationObject) {
        return res.status(404).json({ error: "Notification not found" });
      }
      res.status(200).json({ status: "Notification fetched", notificationObject });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching Notification", error: err.message });
    });
};

const updateNotificationByNotificationID = async (req, res) => {
  if (!(req.user.role === 'admin')) return res.status(403).send("You are not allowed to make these changes");
  let notificationID = req.params.notificationID;
  const {
    title,
    notificationBody,
    reciever
  } = req.body;

  const updateNotification = {
    title,
    notificationBody,
    reciever
  };

  try {
    const updatedNotification = await notification.findOneAndUpdate(
      { notificationID: notificationID },
      updateNotification,
      { new: true }
    );

    if (updatedNotification) {
      res.status(200).send({ status: "Notification updated", data: updatedNotification });
    } else {
      res.status(404).send({ status: "Notification not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
};

const deleteNotificationByNotificationID = async (req, res) => {
  if (!(req.user.role === 'admin')) return res.status(403).send("You are not allowed to make these changes");
  let notificationID = req.params.notificationID;

  try {
    const deletedNotification = await notification.findOneAndDelete({ notificationID });
    if (!deletedNotification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    res.status(200).json({ status: "Notification's data deleted", staff: deletedNotification });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "Error with deleting notification", error: err.message });
  }
};

const getAllNotifications = async (req, res) => {
  if (!(req.user.role === 'admin' || req.user.role === 'staff')) return res.status(403).send("You are not allowed to make these changes");
  notification.find()
    .then((notifications) => {
      res.json(notifications);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addNotification,
  getNotificationByNotificationID,
  updateNotificationByNotificationID,
  deleteNotificationByNotificationID,
  getAllNotifications,
};
