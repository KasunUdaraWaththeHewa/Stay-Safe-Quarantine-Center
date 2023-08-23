const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const EquipmentsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    serialNumber:{
        type:String,
        required:true
    },
    purchaseDate:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    currentStatus:{
        type:String,
        required:true
    }
})
const Equipment=mongoose.model("Equipment",EquipmentsSchema);
module.exports=Equipment;