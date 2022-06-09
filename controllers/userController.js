const jwt = require('jsonwebtoken');
const User = require('../models/userModel');





exports.userHome = (req, res) => {
    res.status(200).json({
        success:true,
        message:"This is user homepage"
    })
}

// update user
exports.userUpdate = async (req, res) => {
    const {username, email} = req.body;
    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})
    
    const payload = jwt.decode(token, {complete: true}).payload;
    
    const user = await User.findById(payload.id);
    await User.updateOne({_id: payload.id},{
        username: username ,
        email: email
    })
    res.json(user);

}


// delete user
exports.userDelete = async (req, res) => {
    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})

    const payload = jwt.decode(token, {complete: true}).payload;

    await User.deleteOne({_id: payload.id});

    res.clearCookie('token').json({success: true, message: "Account Deleted!"});

}
// followers list
// followings list 