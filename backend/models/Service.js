const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const ServicesSchema=new Schema({
    serviceID:{
        type:String,
        required:true
    },
    serviceName:{
        type:String,
        required:true
    },
    serviceImage:{
        type:String,
        required:true
    },
    serviceDetails:{
        type:String,
        required:false
    }
})
const Service=mongoose.model("Service",ServicesSchema);
module.exports=Service;