const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PackageSchema=new Schema({
    packageID:{
        type:String,
        required:true
    },
    packageName:{
        type:String,
        required:true
    },
    packageImage:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    detailList:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:true
    }
})
const Package=mongoose.model("Package",PackageSchema);
module.exports=Package;