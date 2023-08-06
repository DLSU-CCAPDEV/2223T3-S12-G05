// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const profileController = {

    /*
        executed when the client sends an HTTP GET request `/profile/:username`
        as defined in `../routes/routes.js`
    */
    getProfile: async function (req, res) {

        // query where `username` is equal to URL parameter `username`
        var query = {username: req.params.username};
        var details = {};

        // fields to be returned
        var projection = 'username email profilepic coverpic followerNo followingNo';

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
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            this function searches the collection `users`
            based on the value set in object `query`
            the third parameter is a string containing fields to be returned
        */
        var result = await db.findOne(User, query, projection);

        /*
            if the user exists in the database
            render the profile page with their details
        */
        if(result != null) {
            var details = {
                username: result.username,
                email: result.email,

                profilepic: result.profilepic,
                coverpic: result.coverpic,
                followerNo: result.followerNo,
                followingNo: result.followingNo
            };

            // render `../views/profile.hbs`
            res.render('profile', details);
        }

        /*
            if the user does not exist in the database
            render the error page
        */
        else {
            res.render('error');
        }
    }
}

/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = profileController;