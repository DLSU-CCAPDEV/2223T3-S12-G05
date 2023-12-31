// import module `check` from `express-validator`
const { check } = require('express-validator');

// import database from `../models/db.js`
const db = require("../models/db.js");
// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions
    which returns array of validation middlewares
*/
const validation = {

    /*
        function which returns an array of validation middlewares
        called when the client sends an HTTP POST request for `/signup`
    */
    signupValidation: function () {

        /*
            object `validation` is an array of validation middlewares.
            the first parameter in method check() is the field to check
            the second parameter in method check() is the error message
            to be displayed when the value to the parameter fails
            the validation
        */
        var validation = [

            // checks if `username` is not empty
            check('username', 'Should not be empty').trim().notEmpty(),
			
            // checks if lName is not empty
            check('email', 'Should not be empty').trim().notEmpty(),

            // checks if `pw` contains at least 8 characters
            check('password', 'Passwords should contain at least 8 characters.')
            .isLength({min: 8}),

            /* Check username (must be unique) */
			check('username').custom(function(username) {	
				console.log(username);
			
				return new Promise(async function(resolve, reject) {
					var result = await db.findOne(User, {username: username}, 'username');
                    if (result != null) {
                        reject(new Error('Username is already registered'));
                    }
                    
                    resolve(true);
				});
			}),

            /* Check email (must be unique) */
			check('email').custom(function(email) {	
				console.log(email);
			
				return new Promise(async function(resolve, reject) {
					var result = await db.findOne(User, {email: email}, 'email');
                    if (result != null) {
                        reject(new Error('Email is already registered'));
                    }
                    
                    resolve(true);
				});
			})
        ];

        return validation;
    }
}

/*
    exports the object `validation` (defined above)
    when another script exports from this file
*/
module.exports = validation;