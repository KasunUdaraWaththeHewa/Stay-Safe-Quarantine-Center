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
    },
    role:{
        type:String,
        required:true,
        enum: ['admin', 'staff', 'kitchen', 'pharmacy'],
    }
});    

userSchema.statics.signup = async function({email, password,role}){
    if(!email ||!password||!role){      
        throw Error("All fields must be filled.");     
    }
    
    if(!validator.isEmail(email)){    
        throw Error("Email is not valid");
    }
    // if(!validator.isStrongPassword(password)){
    //     throw Error("Password is not Strong Enough");
    // }
    //const User = this;
    
    const exists=await this.findOne({email});
    if(exists){
        throw new Error("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password:hash,role});
    return user;
};


userSchema.statics.login = async function({email, password,role}){
    console.log(email, password, role)
    console.log("Calling loginSchema")
    if(!email ||!password||!role){
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
    console.log(user)
    return user;
};

module.exports = mongoose.model("User",userSchema);