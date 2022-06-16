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
    
    await User.findByIdAndUpdate(payload.id,{ $set : {
        username,
        email
    }})
    const user = await User.findById(payload.id)
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


// follow a user
exports.userFollowOne = async (req, res) => {
    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})

    const payload = jwt.decode(token, {complete: true}).payload;

    if(req.params.id === payload.id) return res.status(403).json({success: false, error: "Cannot follow One's Self!"})

    const userToFollow = await User.findById(req.params.id);
    const followingUser = await User.findById(payload.id);

    if(userToFollow.followers.includes(followingUser._id)) return res.status(400).json({success: false, error: "You are already Following this user!"})

    await userToFollow.updateOne({$push:{ followers: followingUser._id}});
    await followingUser.updateOne({$push:{ followings: userToFollow._id}});

    res.status(201).json({success: true, message: "User followed!"})


}


// unfollow
exports.userUnfollowOne = async (req, res) => {
    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})

    const payload = jwt.decode(token, {complete: true}).payload;

    if(req.params.id === payload.id) return res.status(403).json({success: false, error: "Cannot unfollow One's Self!"})

    const userToFollow = await User.findById(req.params.id);
    const followingUser = await User.findById(payload.id);

    if(!(userToFollow.followers.includes(followingUser._id))) return res.status(400).json({success: false, error: "You are not Following this user!"})

    await userToFollow.updateOne({$pull:{ followers: followingUser._id}});
    await followingUser.updateOne({$pull:{ followings: userToFollow._id}});

    res.status(201).json({success: true, message: "User unfollowed!"})


}