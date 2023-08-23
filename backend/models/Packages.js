const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PackageSchema=new Schema({
    PackageID:{
        type:String,
        required:true
    },
    PackageName:{
        type:String,
        required:true
    },
    Details:{
        type:String,
        required:true
    },
    DetailList:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }
})
const Package=mongoose.model("Package",PackageSchema);
module.exports=Package;