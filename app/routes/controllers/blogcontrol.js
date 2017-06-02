	var post = require("../../models/blogpost")	

	var newPost = function(req, res){
		new post({
	  		title: req.body.title,
	  		post: req.body.post,
	  		date: req.body.date
	  	}).save(function(err){
	  		if(err){
	  			console.log(err);
	  		} else {
	  			res.redirect("/index");
	  		}
	  	});
	  }