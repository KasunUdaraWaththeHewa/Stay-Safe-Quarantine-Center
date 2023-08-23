const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const MealSchema=new Schema({
    mealName:{
        type:String,
        required:true
    },
    mealDescription:{
        type:String,
        required:true
    },
    nutritionalInformation:{
        type:String,
        required:true
    },
    dietaryRestrictions:{
        type:String,
        required:true
    },
    mealType:{
        type:String,
        required:true
    },
    portionSize:{
        type:String,
        required:true
    }
})
const Meal=mongoose.model("Meal",MealSchema);
module.exports=Meal;