const controller = {

    getYonde: function(req, res){
        res.render('Yonde');
    },

    getMyProfile: function(req, res){
        res.render('MyProfile');
    }

}

//export controller object when module is imported
module.exports = controller;