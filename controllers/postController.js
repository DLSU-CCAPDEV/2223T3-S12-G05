const mongoose = require("mongoose");
const Post = require("../models/PostModel");

const createPost = async (req,res) => {
    try{
        const{ title, content } = req.body;

        if(!(title&&content)){
            throw new Error("Enter all input");
        }

        const post = await Post.create({
            title,
            content,
            poster: userId,
        });

        res.json(post);
    }catch(err){
        return res.status(400).json({error: err.message});
    }
};

module.exports = createPost;