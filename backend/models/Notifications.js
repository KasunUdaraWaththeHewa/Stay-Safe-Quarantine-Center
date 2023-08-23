const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const NotificationSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    Notification:{
        type:String,
        required:true
    },
    Reciever:{
        type:String,
        required:true
    }
})
const Notification=mongoose.model("Notification",NotificationSchema);
module.exports=Notification;