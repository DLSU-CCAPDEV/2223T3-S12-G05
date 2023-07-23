const dotenv = require('dotenv');
const express = require('express');

const controller = require('./controllers/controller.js');
const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set('view engine', 'hbs');

//home page
app.get('/Yonde*', controller.getYonde);
app.get('/', controller.getYonde);

//display static
app.use('/assets', express.static('assets'));

app.get('/MyProfile', controller.getMyProfile);

app.listen(port,hostname, function(){
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

