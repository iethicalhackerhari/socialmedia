const mongoose =require('mongoose');

const postSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        max:200
    },
    image: {
        type: String
    },
    likes: {
        type:Array,
        default:[]

    }
},{timestamps: true})





module.exports = mongoose.model("Post", postSchema);