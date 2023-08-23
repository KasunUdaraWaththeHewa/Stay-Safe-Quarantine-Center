const router =require("express").Router();
let notification= require("../models/notification");

router.route("/add").post((req,res)=>{
    const notificationID=req.body.notificationID;
    const title=req.body.title;
    const notification=req.body.notification;
    const reciever=req.body.reciever;

    const newNotification= new notification({
        notificationID,
        title,
        notification,
        reciever
    })

    newNotification.save().then(()=>{
        res.json("Notification Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:notificationID").get(async (req, res) => {
  let notificationID = req.params.notificationID;
  const notification = await notification.findOne({ notificationID })
    .then((notification) => {
      if (!notification) {
        return res.status(404).json({ error: "Notification not found" });
      }
      res.status(200).json({ status: "Notification fetched", notification })
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ status: "Error with fetching Notification", error: err.message });
    });
});

  
router.route("/update/:notificationID").put(async (req, res) => {
  let notificationID = req.params.notificationID;
  const {
    title,
    notification,
    reciever
  } = req.body;

  const updateNotification = {
    title,
    notification,
    reciever
  };

  try {
    const updatedNotification = await meal.findOneAndUpdate(
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
});




router.route("/delete/:notificationID").delete(async (req, res) => {
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
});


  router.route("/").get((req, res) => {
    package.find()
      .then((notification) => {
        res.json(notification);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;