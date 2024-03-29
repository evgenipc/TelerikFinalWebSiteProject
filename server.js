/**
 * Created by Evgeni on 6/1/2014.
 */
// server.js

// modules =================================================
var express = require('express');
var bodyParser = require("body-parser");
var mongoose= require('mongoose');
var MemoryStore = require('connect').session.MemoryStore;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var LocalPassport= require('passport-local');
var session = require('express-session');
var crypto = require('crypto');
var app     = express();

// configuration ===========================================
var userSchema = new mongoose.Schema({
    username: String,
    hashPass: String,
    salt:String,

    email: String,
    updated: { type: Date, default: Date.now },
    age:     { type: Number, min: 18, max: 65 },
    position: {
        x: Number,
        y: Number
    }
});
userSchema.method('authenticate', function(password){
    if(generateHashedPassword(this.salt, password)==this.hashPass){
        return true;
    }
    else {
        return false;
    }


})

var User = mongoose.model("User", userSchema);

// Salting password


function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function generateHashedPassword(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');

}

// including user

 /*
var salt =generateSalt()
var user= new User({
    username: "nqkoi",
    salt:salt,
    hashPass: generateHashedPassword(salt,'evgeni'),
    email: "nqkoisi@abv.bg",
    updated: { type: Date, default: Date.now },
    age:     { type: 22, min: 18, max: 65 },
    position: {
        x: 2,
        y: 3
    }
});


  var postSchema1 = mongoose.Schema({
  username: String,
  date: { type: Date, default: Date.now },
  email: String,
  add: String;
  })

  var Post1 = mongoose.model('Post1', postSchema1);




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
 */

//     Passport part


passport.use(new LocalPassport(function(username, password, done){

    User.findOne({ username: username }).exec(function(err, user) {
        if (err) {
            console.log('Error loading user: ' + err);
            return;
        }

        if (user && user.authenticate(password)) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    })
//
//        User.findOne({username: username}).exec(function(err,user){
//            if(err){
//                console.log("Error loading user :" + err);
//                return;
//            }
//            if(user){
//                return done(null,user);
//            }
//            else{
//                return done(null,false);
//            }
//        })

}));
passport.serializeUser(function(user,done){
    if(user){
        return done(null, user.id);
    }
});
passport.deserializeUser(function(id, done){
    User.findOne({_id:id}).exec(function(err, user){
        if(err){
            console.log("Error loading user :" + err);
            return;
        }
        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }

    })
});




// config files



var db = require('./config/db');

var port = process.env.PORT || 2244; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

app.configure(function() {
    app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 					// log every request to the console
    app.use(express.cookieParser());
    app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
    app.use(express.session({secret: 'unicorn'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT
    app.use(mongoose);
});

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);										// startup our app at http://localhost:port
console.log('Magic happens on port ' + port);
// module.exports = mongoose.model(User1& , user1Schema);			// shoutout to the user
exports= module.exports = app; //expose app
