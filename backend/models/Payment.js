const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PaymentSchema=new Schema({
    dateofpayment:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    receiptNumber:{
        type:String,
        required:true
    },
    payerInName:{
        type:String,
        required:true
    },
    payerNIC:{
        type:String,
        required:true
    },
    patientNIC:{
        type:String,
        required:true
    }
})
const Payment=mongoose.model("Payment",PaymentSchema);
module.exports=Payment;