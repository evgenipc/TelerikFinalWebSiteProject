/**
 * Created by Evgeni on 6/12/2014.
 */
angular.module('RegisterCtrl', []).controller('RegisterController', function($scope) { //, $http, $location,  identity, auth
        $scope.tagline = 'New Controller working';
        $scope.register = function(user1){
            console.log(user1);
            this.generateSalt = function(){
                return crypto.randomBytes(128).toString('base64');
            };
            this.generateHashedPassword= function(salt, pwd){
                var hmac = crypto.createHmac('sha1', salt);
                return hmac.update(pwd).digest('hex');

            };
            var salt = generateSalt();
            var user= new User({
                username:user1.username,
                salt:salt,
                hashPass: generateHashedPassword(salt, user1.password),
                email:user1.email,
                updated:Date.now,
                age:user1.age,
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
        }
    }

);
