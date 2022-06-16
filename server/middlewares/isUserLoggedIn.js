const jwt = require('jsonwebtoken');

const isUserLoggedIn = (req, res, next) => {
    const token = req.cookies.token ||
    req.body.token ||
    req.header('Authorization')?.replace('Bearer ','');

    if(!token) return res.status(400).json({success: false, error: "Token missing!"})

    if(!(jwt.verify(token, process.env.JWT_SECRET))) return res.staus(400).json({success: false, error: "Invalid Token!"})
    return next();
}

module.exports = isUserLoggedIn;