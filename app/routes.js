/**
 * Created by Evgeni on 6/1/2014.
 */
    // app/routes.js

module.exports = function(app) {
    // frontend routes =========================================================
    // route to handle all angular requests
    var passport = require('passport');
    var mongoose = require("mongoose");
    var posts =[];

    var postSchema1 = mongoose.Schema({
        username: String,
        date: { type: Date, default: Date.now },
        password: String,
        email: String,
        add: String
    });
    var postSchema2 = mongoose.Schema({
        username: String,
        date: { type: Date, default: Date.now },
        password: String,
        email: String,
        add: String,
        neshto: String
    });

    var Post1 = mongoose.model('Post1', postSchema1);
    var Post2 = mongoose.model('Post2', postSchema2);


    //var posta = new Post2({ username: 'Silence' });


    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file

    });


    app.post('/signin', function(req, res, next){
           var auth = passport.authenticate('local', function(err, user){
               if(err) return next(err);
               if(!user){
                   res.send({success:false})
               }
               req.login(user, function(err) {
                  if(err)  return next(err);
                  res.send({success:true,user:user});
                   }
               )

           })








            auth(req, res, next);
        }
    );
    app.post('/logout', function(req, res, next){
            req.logout();
            res.end();
            });

    app.post('/nerd', function(req, res, next){
                console.log(req.param('username'));
                var post9 = new Post1({ username: req.param('username'), add:req.param('comment'), password:req.param('password')});
                post9.save(function (err) {
                    if (err) throw err;
                    Post1.find()
                        .exec(function (err, units) {
                            if (err) throw err;
                            posts =[];
                            for (var i = 0; i < units.length; i++) {
                                console.log(units[i]);
                                posts.push(units[i]);
                            }
                            res.send(posts);
                            console.log(posts);
                        });
                });
        });
    app.post('/geek', function(req, res, next){
        console.log(req.param('username'));
        var post6 = new Post2({ username: req.param('username'), add:req.param('comment'), password:req.param('password')});
        post6.save(function (err) {
            if (err) throw err;
            Post2.find()
                .exec(function (err, units) {
                    if (err) throw err;
                    for (var i = 0; i < units.length; i++) {
                        console.log(units[i]);
                    }
                });
        });
    });






};





