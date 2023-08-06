const mongoose = require("mongoose");
const Post = require("../models/PostModel");

const postController = {
    createPost: function (req,res) {
        try{
            const{ title, content } = req.body;
    
            if(!(title&&content)){
                throw new Error("Enter all input");
            }
    
            const post = Post.create({
                title,
                content,
                poster: userId,
            });
    
            res.json(post);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
} 

module.exports = postController;