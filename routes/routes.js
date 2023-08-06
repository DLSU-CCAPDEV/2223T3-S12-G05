// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

// import module `signUpController` from `../controllers/signUpController.js`
const signUpController = require('../controllers/signUpController.js');

// import module `profileController` from `../controllers/profileController.js`
const profileController = require('../controllers/profileController.js');

// import module `postController` from `../controllers/postController.js`
const postController = require('../controllers/postController.js');

// import module `validation` from `../helpers/validation.js`
const validation = require('../helpers/validation.js');

const app = express();

const createPost = require('../controllers/postController.js');
const postController = require('../controllers/postController.js');

/*
    execute functions
    defined in object `controller` in `../controllers/controller.js`
    when a client sends an HTTP GET request
*/
app.get('/Yonde*', controller.getYonde);
app.get('/', controller.getYonde);

app.get('/login', controller.getLogIn);
app.get('/signup', signUpController.getSignUp);
app.post('/signup', validation.signupValidation(), signUpController.postSignUp);
app.get('/getCheckUsername', signUpController.getCheckUsername);
/*
    execute function getProfile()
    defined in object `profileController` in `../controllers/profileController.js`
    when a client sends an HTTP GET request for `/profile/:username`
    where `username` is a parameter
*/
app.get('/profile/:username', profileController.getProfile);

app.get('/MyProfile', controller.getMyProfile); //to delete

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

app.post('/create-post', postController.createPost);
app.get('/profile', profileController.getProfile);

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/

app.get("/Yonde", postController);
module.exports = app;