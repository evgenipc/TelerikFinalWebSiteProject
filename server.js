/**
 * Created by Evgeni on 6/1/2014.
 */
// server.js

// modules =================================================
var express = require('express');
var app     = express();
var bodyParser = require("body-parser");
var mongoose= require('mongoose');
var MemoryStore = require('connect').session.MemoryStore;

// configuration ===========================================
var user1Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    updated: { type: Date, default: Date.now },
    age:     { type: Number, min: 18, max: 65 },
    position: {
        x: Number,
        y: Number
    }
});

var User = mongoose.model("User", user1Schema);


var user= new User({
    username: "nqkoisi",
    password: 12345,
    email: "nqkoisi@abv.bg",
    updated: { type: Date, default: Date.now },
    age:     { type: 22, min: 18, max: 65 },
    position: {
        x: 2,
        y: 3
    }
});
user.save(function (err) {
    if (err) throw err;
    User.find()
        .exec(function (err, units) {
            if (err) throw err;
            for (var i = 0; i < units.length; i++) {
                console.log(units[i]);
            }
        });
});

// config files
var db = require('./config/db');

var port = process.env.PORT || 2244; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

app.configure(function() {
    app.use(express.cookieParser());
    app.use(express.session(
        {secret:"secret key", store:new MemoryStore()}));
    app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 					// log every request to the console
    app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
    app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port);
// module.exports = mongoose.model(User1& , user1Schema);			// shoutout to the user
exports = module.exports = app; 						// expose app
