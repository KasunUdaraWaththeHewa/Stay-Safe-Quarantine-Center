const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const EquipmentsSchema=new Schema({
    name:{
        type:String,
        required:false
    },
    category:{
        type:String,
        required:false
    },
    serialNumber:{
        type:String,
        required:true,
        unique:true
    },
    purchaseDate:{
        type:String,
        required:false
    },
    manufacturer:{
        type:String,
        required:false
    },
    supplier:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    currentStatus:{
        type:String,
        required:false
    }
})
const Equipment=mongoose.model("Equipment",EquipmentsSchema);
module.exports=Equipment;