const dotenv = require('dotenv');
const express = require('express');
const hbs = require('hbs');

// import daabase from `./models/db.js`
const db = require("./models/db.js");

// import module `routes` from `./routes/routes.js`
const routes = require('./routes/routes.js');
const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set('view engine', 'hbs');

// define the paths contained in `./routes/routes.js`
app.use('/', routes);

//display static
app.use('/assets', express.static('assets'));

// if the route is not defined in the server, render `../views/error.hbs`
// always defined as the last middleware
app.use(function (req, res) {
    res.render('error');
});

// connects to the database
//db.connect();

app.listen(port,hostname, function(){
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

