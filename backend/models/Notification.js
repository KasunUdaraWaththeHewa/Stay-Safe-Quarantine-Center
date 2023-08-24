const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const NotificationSchema=new Schema({
    notificationID:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    notificationBody:{
        type:String,
        required:true
    },
    reciever:{
        type:String,
        required:true
    }
})
const Notification=mongoose.model("Notification",NotificationSchema);
module.exports=Notification;