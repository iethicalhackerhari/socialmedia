const cookieTokenGenerator =async (user, res) => {
    const token = await user.generateJWT();
    const options = {
        exipresIn: new Date(Date.now() + 24 * 60 * 60 * 1000), 
        httpOnly: true
}
    user.password = undefined;
    console.log(user, token);
     res.status(200).cookie('token', token, options).json({
        success: true, 
        token,  
        user
    });

}
module.exports = cookieTokenGenerator; 