const mongoose = require('mongoose');
// import module `User` and `Post` from `/models`
const User = require('./UserModel.js');
const Post = require('./PostModel.js');

const url = "mongodb+srv://yonde_admin:yondeSP0RT5@yondedb.oyehcxx.mongodb.net/?retryWrites=true&w=majority";

// additional connection options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

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


    insertOne: async function(model, doc) {
        return await model.create(doc);
    },


    insertMany: async function(model, docs) {
        return await model.insertMany(docs);
    },


    findOne: async function(model, query, projection) {
        return await model.findOne(query, projection);
    },


    findMany: async function(model, query, projection) {
        return await model.find(query, projection);
    },


    updateOne: async function(model, filter, update) {
        return await model.updateOne(filter, update);
    },


    updateMany: async function(model, filter, update) {
        return await model.updateMany(filter, update);
    },


    deleteOne: async function(model, conditions) {
        return await model.deleteOne(conditions);
    },


    deleteMany: async function(model, conditions) {
        return await model.deleteMany(conditions);
    }

}

module.exports = database;
