const controller = {

    /*executes the Yonde pages*/
    getYonde: function(req, res){
        res.render('Yonde');
    },

    getMyProfile: function(req, res){
        res.render('MyProfile');
    },

    getSuccess: function (req, res) {

        /*
            when passing values using HTTP GET method
            the values are stored in the req.query object
            Example url: `http://localhost/success?fName=A&lName=B&idNum=123`
            To retrieve the value of parameter `username`: req.query.username
        */
        var details = {
            username: req.query.username
        };

        // render `../views/success.hbs`
        res.render('success', details);
    },

    getPost: function(req, res){
        res.render('Post');
    },

    getLogIn: function(req, res){
        res.render('mbc21_login');
    },

    getProf: function(req, res){
        res.render('mbc21_logprof');
    },

    getNoName: function(req, res){
        res.render('noName456');
    },

    getNoNamePost: function(req, res){
        res.render('Post2');
    },

    getUserNotCry: function(req, res){
        res.render('userNotCry');
    },

    getUserNotCryPost: function (req, res){
        res.render('Post3');
    },

    gettanjinaur: function(req, res){
        res.render('tanjiNaur');
    },

    gettanjiPost: function(req, res){
        res.render('Post4');
    },

    getMe: function(req,res){
        res.render('Meee');
    },

    getMePost: function(req,res){
        res.render('Post5');
    }

}

//export controller object when module is imported
module.exports = controller;