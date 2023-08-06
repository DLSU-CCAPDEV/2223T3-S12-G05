const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');


const signupController = {

    
    getSignUp: function (req, res) {
        res.render('Yonde', {signUp: true});
    },
    
    postSignUp: async function (req, res) {
        
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        var user = {
            username: username,
            email: email,
            password: password,
            profilepic: null,
            coverpic: null,
            followerNo: 0,
            followingNo: 0
        }

        var response = await db.insertOne(User, user);

        if(response != null){
            res.redirect('/success?username=' + username);
        }
        else {
            res.render('error');
        }
    },

    /*
        executed when the client sends an HTTP GET request `/getCheckUsername`
        as defined in `../routes/routes.js`
    */
    getCheckUsername: async function (req, res) {
        var username = req.query.username;

        var result = await db.findOne(User, {username: username}, 'username');
        res.send(result);
    }
}

module.exports = signupController;