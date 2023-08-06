const dotenv = require('dotenv');
const express = require('express');
const hbs = require('hbs');

// import module `express-session`
const session = require('express-session');

// import module `mongoose`
const mongoose = require('mongoose');

// import module `connect-mongo`
const MongoStore = require('connect-mongo')(session);

// import database from `./models/db.js`
const db = require("./models/db.js");

// import module `routes` from `./routes/routes.js`
const routes = require('./routes/routes.js');
const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set('view engine', 'hbs');

// Parse request body as json
app.use(express.json());

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

//display static
app.use('/assets', express.static('assets'));

// connects to the database
db.connect();

// use `express-session`` middleware and set its options
// use `MongoStore` as server-side session storage
app.use(session({
    'secret': 'yonde',
    'resave': false,
    'saveUninitialized': false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// define the paths contained in `./routes/routes.js`
app.use('/', routes);

// if the route is not defined in the server, render `../views/error.hbs`
// always define this as the last middleware
app.use(function (req, res) {

    var details = {};

    /*
        checks if a user is logged-in by checking the session data
        if a user is logged-in.
    */
    if(req.session.username) {
        details.flag = true;
        details.username = req.session.username;
    }

    /*
        if no user is logged-in,
        do not display the profile tab and the logout tab in the nav bar.
    */
    else
        details.flag = false;

    // render `../views/error.hbs`
    res.render('error', details);
});

app.listen(port,hostname, function(){
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

