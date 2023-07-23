const dotenv = require('dotenv');
const express = require('express');

const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

//home page
app.get('/home', function(req, res){
    res.send('Home Page');
});

app.get('/', function(req, res){
    res.send('Home Page');
});

//my profile page
app.get('/myprofile', function(req, res){
    res.send('Profile Page');
})

//other profile
app.get('/*viewprofile', function(req, res){
    res.send('Other Profile Page');
})

//view post
app.get('/*post', function(req, res){
    res.send('Post');
})


app.listen(port,hostname, function(){
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

