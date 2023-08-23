const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PaymentSchema=new Schema({
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    Amount:{
        type:String,
        required:true
    },
    ReceiptNumber:{
        type:String,
        required:true
    },
    PayerInName:{
        type:String,
        required:true
    },
    PayerNIC:{
        type:String,
        required:true
    },
    PatientNIC:{
        type:String,
        required:true
    }
})
const Package=mongoose.model("Payment",PaymentSchema);
module.exports=Package;