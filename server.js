const dotenv = require('dotenv');
const express = require('express');

const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.get('/', function(req, res){
    res.send('Home Page');
});

app.listen(port,hostname, function(){
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

