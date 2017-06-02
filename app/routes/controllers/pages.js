	var pages = {
		index: function(req, res){
			res.render("index");
		},
		create: function(req, res){
			res.render("create");
		},
		login: function(req, res){
			res.render("login");
		},
		signup: function(req, res){
			res.render("signup");
		}
	}

	module.exports = pages;