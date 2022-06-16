const Post = require('../models/postModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


exports.postsHome = async (req, res) => {
    res.status(200).json({success: true, message: "This is post homepage!"})
}

// create new post
exports.postCreate = async (req,res) => {

    const {title} = req.body;

    if(!title) return res.status(400).json({success: false, error: "Please provide a title!"})

    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})
    
    const payload = jwt.decode(token, {complete: true}).payload;

    const post = await new Post({
        owner: payload.id,
        title
    })

    await post.save();

    res.status(201).json({success: true, message: "Post Created!"})
}

// update existing post
exports.postUpdate = async (req, res) => {
    const {title} = req.body;
    const postToUpdate = await Post.findById(req.params.id);

    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})
    
    const payload = jwt.decode(token, {complete: true}).payload;

    if(!postToUpdate) return res.status(404).json({success: false, error: "Post not found!"})

    if(postToUpdate.owner !==payload.id) return res.status(403).json({success: false, error: "Cannot update this post!"})

    await postToUpdate.updateOne({$set: {title}});
    res.status(201).json({success: true, message: "Post updated!"})
}   

// like / unlike a post
exports.postLike = async (req, res) => {
    const postToLike = await Post.findById(req.params.id);

    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})
    
    const payload = jwt.decode(token, {complete: true}).payload;

    if(!postToLike) return res.status(404).json({success: false, error: "Post not found!"})

    // unlike if already liked
    if(postToLike.likes.includes(payload.id)){
        await postToLike.updateOne({$pull: {likes: payload.id}})
        return res.status(200).json({success: true, message: "unliked!"})
    }

    await postToLike.updateOne({$push: {likes: payload.id}})
    res.status(200).json({success: true, message: "liked!"})
}

// delete a post
exports.postDelete = async (req, res) => {
    const postToDelete = await Post.findById(req.params.id);
    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})

    const payload = jwt.decode(token, {complete: true}).payload;
   
    if (postToDelete.owner !== payload.id) return res.status(403).json({success: false, error: "Cannot delete this post"})

    await Post.deleteOne({_id: payload.id});

    res.status(200).json({success: true, message: "Post Deleted!"});

}

// get a post
exports.postGetOne = async (req, res) => {
    const postToGet = await Post.findById(req.params.id);

    if(!postToGet)  return res.status(404).json({success: false, error: "Post not found!"})

    res.status(200).json({success: true, postToGet}); 
}

// get all posts
exports.postsGetAll = async (req, res) => {
    const postsToGet = await Post.find({});

    res.status(200).json(postsToGet);
}

// get timeline posts
exports.postsGetTimeline = async (req, res) => {

    const postsToGet = await Post.find({owner: req.params.id});
    res.status(200).json(postsToGet);
}

// get my-timeline posts
exports.postsGetMyTimeline = async (req, res) => {

    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})

    const payload = jwt.decode(token, {complete: true}).payload;

    const postsToGet = await Post.find({owner: payload.id});
    res.status(200).json(postsToGet);
}

// my feed - posts of the users that a user follow
exports.postsFeed = async (req, res) => {
    const eachPost =[];
    const token = req.cookies.token;
    if (!(jwt.verify(token, process.env.JWT_SECRET))) return res.status(400).json({success: false, error: "Invalid Token!"})

    const payload = jwt.decode(token, {complete: true}).payload;

    const currentUser = await User.findById(payload.id);
    const currentUserPosts = await Post.find({owner: payload.id});

    await Promise.all( currentUser.followings.map(async (item) => {
        
      eachPost.push( await Post.find({owner: item}))
    }
    ))
    
    res.status(200).json({friendsPosts: eachPost, myPosts: currentUserPosts});
}
