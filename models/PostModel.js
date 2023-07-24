// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `posts`
var PostSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true
    },
    author: {
        username: {
            type: String,
            required: true
        },
        profilepic: {
            type: String
        }
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likeNum: {
        type: Number,
        required: true
    },
    comments: [
		{
			commentId: {
				type: Number,
				required: false
			},

			author: {
				type: String,
				required: false
			},
			
			datePosted: {
				type: Date,
				default: Date.now
			},
			
			body: {
				type: String,
				required: false
			},

            likeNum: {
                type: Number,
                required: true
            }
		}
	],
});

/*
    exports a mongoose.model object based on `PostSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `posts` -> plural of the argument `Post`
*/
module.exports = mongoose.model('Post', PostSchema);