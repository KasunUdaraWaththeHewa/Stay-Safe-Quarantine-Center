const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const ServicesSchema=new Schema({
    serviceName:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})
const Service=mongoose.model("Service",ServicesSchema);
module.exports=Service;