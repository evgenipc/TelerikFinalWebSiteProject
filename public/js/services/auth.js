/**
 * Created by Evgeni on 6/11/2014.
 */
var auth = angular.module('auth', []);
auth.factory('auth', function($http, $q, identity){
    return{
        login: function(user) {
            var deferred = $q.defer();

            $http.post('/signin', user).success(function (response) {
                if (response.success) {
                    angular.extend(user, response.user);
                    identity.currentUser = user;
                    deferred.resolve(true);
                }
                else {
                    deferred.resolve(false);
                }

                console.log(response);

            });

            return deferred.promise;
    },
        logout:function(){
            var deferred=$q.defer();
            $http.post('/logout').success(function() {
                identity.currentUser = undefined;
                    deferred.resolve();
            })

            return deferred.promise;


        }


    }

})