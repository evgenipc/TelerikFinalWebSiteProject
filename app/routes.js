/**
 * Created by Evgeni on 6/1/2014.
 */
    // app/routes.js

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    // route to handle creating (app.post)
    // route to handle delete (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    var passport = require('passport');
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
            })
        }
