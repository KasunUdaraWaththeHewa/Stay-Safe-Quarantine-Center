const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PharmacySchema=new Schema({

    medicine_name:{
        type:String,
        required:true
    },
    medicine_id:{
        type:String,
        required:true
    },
    med_date:{
        type:date,
        required:true
    },
    quntity:{
        type:number   
    }

    
})
const Pharmacy=mongoose.model("Phyamacy",PharmacySchema);
module.exports=Pharmacy;