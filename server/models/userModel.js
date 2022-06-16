const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true,
        
    },
    lastname: {
        type: String,
        required:true,
    },
    username: {
        type: String,
        required:true,
        unique:true,
        min: 4
    },
    email: {
        type: String,
        required:true,
        unique:true,
        min: 4
    },
    password: {
        type: String,
        required:true,
        min: 6,
        max:1024,
        // select: false
    },
    country: {
        type: String,
        required:true,
       
    },
    city: {
        type: String,
        required:true,
    
    },
    livesin: {
        type: String,
        required:true,
     
    },
    gender: {
        type: String,
        required:true,
        
    },
    dob: {
        type: Date,
        required:true,
        
    },
   
    profilePhoto: {
        default: ''
    },
    coverPhoto: {
        default: ''
    },
    followers: {
        type: Array,
        default:[]
    },
    followings: {
        type: Array,
        default:[]
    },
    token: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiry: {
        type: String
    }
   
},{timestamps: true})

// Encrypting the password before saving
userSchema.pre('save', async function (next){
    try {
    
        if(!(this.isModified('password'))) return next();
        this.password = await bcrypt.hash(this.password, 10);
       
        } catch (error) {
            console.log(error)
            return next
        }
        
        
    })

// Validating the paswords
userSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// Generating jsonwebtoken
userSchema.methods.generateJWT = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY});
}

// Generate forgot password token
userSchema.methods.generateForgotPasswordToken = function(){
    // generating a random long sting
    const forgotPasswordToken = crypto.randomBytes(20).toString('hex');
    // hashing the generated string in the backend
    this.forgotPasswordToken = crypto.createHash('sha226').update(forgotPasswordToken).digest('hex');

    // expiry time of the generated token
    this.forgotPasswordExpiry = Date.now() + 20*60*1000;

    // token sent to the user
    return forgotPasswordToken;
}




module.exports = mongoose.model('user', userSchema);