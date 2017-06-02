	var express = require("express");
	var bodyParser = require("body-parser");
	var hbs = require("hbs");
	var mongoose = require("mongoose");
	var bcrypt= require("bcrypt-nodejs");
	var passport = require("passport");
	var session = require("express-session");
	var routes = require("./app/routes/routes");
	var path = require("path");


	var app = express()
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({
  	extended : true
  }));

	app.use("/static", express.static(path.join(__dirname, "app/client")));
	app.use(session({
			secret : 'itsASecret',
			resave : true,
			saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());


	app.set("view engine", "hbs");
	app.set("views", path.join(__dirname, "app/views"));

	routes(app);


	mongoose.connect("mongodb://localhost/blog");
	app.listen(8080);