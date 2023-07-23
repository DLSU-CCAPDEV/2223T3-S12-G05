const dotenv = require('dotenv');
const express = require('express');

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

app.get('/MyProfile', controller.getMyProfile);

app.listen(port,hostname, function(){
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

