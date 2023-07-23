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
    }

}

//export controller object when module is imported
module.exports = controller;