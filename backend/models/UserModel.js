const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator =require('validator');

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});    

userSchema.statics.signup = async function(email, password){
    if(!email ||!password){
        throw Error("All fields must be filled.");
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not Strong Enough");
    }
    //const User = this;
    const exists=await this.findOne({email});
    if(exists){
        throw new Error("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password:hash});
    return user;
};


userSchema.statics.login = async function(email, password){
    if(!email ||!password){
        throw Error("All fields must be filled.");
    }
    const user=await this.findOne({email});
    if(!user){
        throw new Error("Incorrect Email");
    }
    const match=await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Incorrect Password");
    }
    return user;
};

module.exports = mongoose.model("User",userSchema);