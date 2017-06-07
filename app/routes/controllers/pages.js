	var auth = require("../../auth/local-signup");
	var Post = require("../../models/blogModel");

	var pages = {
		home: function(req, res){
			res.render("home");
		},
		index: function(req, res){
			Post.find({"user": req.user.username}, function(err,post){
				if(err){
					console.log(err);
				} else{
					res.render("index", {
						status: req.query.status,
						posts:post
					 });
				}
			});
		},
		create: function(req, res){
			res.render("create");
		},
		login: function(req, res){
			res.render("login");
		},

		singup: function(req, res){
			auth({
				name: req.body.username,
				pass: req.body.password,
				first:req.body.firtName,
				last: req.body.lastName
			}, function(data){
				if(data.success){
					res.json({
							"success": " All good"
						});
					} else {
						res.json({
							"success": "Messed Up"
						});
					}
			});
		},

		post: function(req, res){
			Post.findOne({"_id": req.query.p}, function(err, post){
				if(err){
					console.log(err):
				} else {
					res.render("post", {
						current: post
					});
				}
			})
		}
	}

	module.exports = pages;