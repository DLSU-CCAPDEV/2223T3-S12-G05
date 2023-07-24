const controller = {

    /*executes the Yonde homepage */
    getYonde: function(req, res){
        res.render('Yonde');
    },

    getMyProfile: function(req, res){
        res.render('MyProfile');
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
        res.render ('Post4');
    },

    getMe: function(req,res){
        res.render  ('Meee');
    },

    getMePost: function(req,res){
        res.render('Post5');
    }

}

//export controller object when module is imported
module.exports = controller;