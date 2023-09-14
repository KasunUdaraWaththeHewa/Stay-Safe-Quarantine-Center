const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PharmacySchema=new Schema({

    medicine_name:{
        type:String,
        required:true
    },
    medicine_id:{
        type:String,
        required:true,
        unique:true
    },
    med_date:{
        type:Date,
        required:true
    },
    quantity:{
        type:String,
        required:true   
    }

    
})
const Pharmacy=mongoose.model("Pharmacy",PharmacySchema);
module.exports=Pharmacy;