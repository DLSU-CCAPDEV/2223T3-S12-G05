// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

const app = express();

/*
    execute functions
    defined in object `controller` in `../controllers/controller.js`
    when a client sends an HTTP GET request
*/
app.get('/Yonde*', controller.getYonde);
app.get('/', controller.getYonde);

app.get('/MyProfile', controller.getMyProfile);
app.get('/Post', controller.getPost);
app.get('/mbc21_login', controller.getLogIn);
app.get('/mbc21_logprof', controller.getProf);

app.get('/noName456', controller.getNoName);
app.get('/Post2', controller.getNoNamePost);

app.get('/userNotCry', controller.getUserNotCry);
app.get('/Post3', controller.getUserNotCryPost);

app.get('/tanjiNaur', controller.gettanjinaur);
app.get('/Post4', controller.gettanjiPost);

app.get('/Meee', controller.getMe);
app.get('/Post5', controller.getMePost);
/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;