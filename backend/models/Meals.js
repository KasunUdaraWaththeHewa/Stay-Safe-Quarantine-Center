const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const MealSchema=new Schema({
    MealName:{
        type:String,
        required:true
    },
    MealDescription:{
        type:String,
        required:true
    },
    NutritionalInformation:{
        type:String,
        required:true
    },
    DietaryRestrictions:{
        type:String,
        required:true
    },
    MealType:{
        type:String,
        required:true
    },
    PortionSize:{
        type:String,
        required:true
    }
})
const Meal=mongoose.model("Meal",MealSchema);
module.exports=Meal;