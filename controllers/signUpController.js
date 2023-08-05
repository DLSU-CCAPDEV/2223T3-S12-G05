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
        executed when the client sends an HTTP GET request `/getCheckID`
        as defined in `../routes/routes.js`

    getCheckID: async function (req, res) {

        /*
            when passing values using HTTP GET method
            the values are stored in `req.query` object
            Example url: `http://localhost/getCheckID?idNum=11312345`
            To retrieve the value of parameter `idNum`: `req.query.idNum`
        /*
        var idNum = req.query.idNum;

        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            searches for a single document based on the model `User`
            sends an empty string to the user if there are no match
            otherwise, sends an object containing the `idNum`
        *
        var result = await db.findOne(User, {idNum: idNum}, 'idNum');
        res.send(result);
    }
    */
}

module.exports = signupController;