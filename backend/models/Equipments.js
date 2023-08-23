const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const EquipmentsSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    SerialNumber:{
        type:String,
        required:true
    },
    PurchaseDate:{
        type:String,
        required:true
    },
    Manufacturer:{
        type:String,
        required:true
    },
    Supplier:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    CurrentStatus:{
        type:String,
        required:true
    }
})
const Equipment=mongoose.model("Equipment",EquipmentsSchema);
module.exports=Equipment;