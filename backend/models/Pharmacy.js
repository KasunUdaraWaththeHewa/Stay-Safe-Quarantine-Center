const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PharmacySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    date:{
        type:date,
        required:true
    },
    quntity:{
        type:number   
    }

    
})
const Pharmacy=mongoose.model("Phyamacy",PharmacySchema);
module.exports=Pharmacy;