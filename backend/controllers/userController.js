const User = require('../models/UserModel');

const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'});
}

const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signUp(email, password);
        res.status(200).json(email, user);
    }catch(err){
        res.status(400).json({mssg: err.message});
    }
}

module.exports = {signupUser, loginUser};