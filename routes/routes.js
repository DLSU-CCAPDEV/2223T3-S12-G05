// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

const app = express();


/*
    execute function getYonde()
    defined in object `controller` in `../controllers/controller.js`
    when a client sends an HTTP GET request for `/`
*/
app.get('/Yonde*', controller.getYonde);
app.get('/', controller.getYonde);

app.get('/MyProfile', controller.getMyProfile);

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;