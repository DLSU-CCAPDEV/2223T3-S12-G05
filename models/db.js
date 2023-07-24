const mongoose = require('mongoose');
// import module `User` and `Post` from `/models`
const User = require('./UserModel.js');
const Post = require('./PostModel.js');

const url = 'mongodb://localhost:3000';

// additional connection options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

// defines an object which contains necessary database functions
const database = {
    /*
        connects to database
    */
    connect: async function () {
        await mongoose.connect(url, options, function(error) {
            if (error) throw error;
            console.log('Connected to: ' + url);
        })
    },
}

module.exports = database;