/**
 * Created by Evgeni on 6/11/2014.
 */
var auth = angular.module('auth', []);
auth.factory('auth', function($http, $q, identity){
    return{
        login: function(user){
            var deferred=$q.defer();



            $http.post('/signin', user).success(function(response){
//                identity.currentUser=response.user;
                if(response.success){
                    deferred.resolve(true);
                }
                else{
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