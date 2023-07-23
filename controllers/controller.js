const controller = {

    /*executes the Yonde homepage */
    getYonde: function(req, res){
        res.render('Yonde');
    },

    

}

//export controller object when module is imported
module.exports = controller;