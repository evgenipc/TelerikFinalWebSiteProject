/**
 * Created by Evgeni on 6/2/2014.
 */
angular.module('SignInCtrl', []).controller('SignInController', function($scope, $http, $location,  identity, auth) {
    $scope.identity=identity;
    $scope.tagline = 'New Controller working';
    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                console.log('Successful login!');
               // identity.currentUser = user;
            }
            else{
                console.log('Could not login!');
            }
        });
        }
    $scope.logout = function(){
        auth.logout().then(function(){

                console.log('Successful logout!');
                $location.path('/');
        })

    }
    }

);
