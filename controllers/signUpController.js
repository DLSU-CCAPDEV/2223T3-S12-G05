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
        // checks if there are validation errors
        var errors = validationResult(req);

        // if there are validation errors
        if (!errors.isEmpty()) {

            // get the array of errors
            errors = errors.errors;

            var details = {};

            // checks if a user is logged-in by checking the session data
            if(req.session.username) {

                /*
                    sets `details.flag` to true
                    to display the profile and logout tabs in the nav bar

                    sets the value of `details.name` to `req.session.name`
                    to display the name of the logged-in user
                    in the profile tab of the nav bar

                    sets the value of `details.uidNum` to `req.session.idNum`
                    to provide the link the profile of the logged-in user
                    in the profile tab of the nav bar

                    these values are rendered in `../views/partials/header.hbs`
                */
                details.flag = true;
                details.username = req.session.username;
            }

            // else if a user is not yet logged-in
            else
                /*
                    sets `details.flag` to false
                    to hide the profile and logout tabs in the nav bar
                */
                details.flag = false;

            /*
                for each error, store the error inside the object `details`
                the field is equal to the parameter + `Error`
                the value is equal to `msg`
                as defined in the validation middlewares

                for example, if there is an error for parameter `fName`:
                store the value to the field `fNameError`
            */
            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            /*
                render `../views/signup.hbs`
                display the errors defined in the object `details`
            */
            alert("Error signing up. Please try again.");
        }

        else {

        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            var user = {
                username: username,
                email: email,
                password: hash,
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
        });
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