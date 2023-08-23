const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const ServicesSchema=new Schema({
    ServiceName:{
        type:String,
        required:true
    },
    Details:{
        type:String,
        required:true
    }
})
const Service=mongoose.model("Service",ServicesSchema);
module.exports=Service;