const User = require('../models/userModel');
const cookieTokenGenerator = require('../utils/cookieTokenGenerator');

exports.register = async (req, res) => {

    const {username, email, password} = req.body;

    const user = await new User({
        username,
        email,
        password
    });
    
    await user.save();
    user.password = undefined;
    res.status(201).json({
        success:true,
        message:"This is user register page",
        user
    });
}

exports.login = async (req, res) => {
    try{
    const {username, password} = req.body;

    !username && res.status(400).json({success: false, error: "Username or Password is Empty!"});
    !password && res.status(400).json({success: false, error: "Username or Password is Empty!"});
    
    const user = await User.findOne({username});
    
    if(!user) return res.status(404).json({success: false, error: "User not Found!"})

    const isPasswordValidated = await user.validatePassword(password);

    if(!isPasswordValidated) return res.status(400).json({success: false, error: "Password is incorrect!"})

    await cookieTokenGenerator(user, res);
    res.status(200).json({success: true, user});
    }catch(error){

            res.status(500);
    }
    
}

exports.logout = async (req, res) => {
    res.status(200).clearCookie('token').json({success: true, message: "Logout Successful!"})
}