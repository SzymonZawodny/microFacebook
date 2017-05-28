var express = require('express');
var router = express.Router();

router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get('/community', ensureAuthenticated, function(req, res){
    res.render('community');
});

router.get('/messages', ensureAuthenticated, function(req, res){
    res.render('messages');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;