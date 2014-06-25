/**
 * Created by Evgeni on 6/2/2014.
 */
angular.module('SignInCtrl', []).controller('SignInController', function($scope,identity,$window, $http, $location, auth) { // identity,
    //$scope.identity=identity;
    $scope.window = $window;
    $scope.identity = identity;
    $scope.tagline = 'New Controller working';
    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                console.log('Successful login!');
                identity.currentUser = user;
                $window.bootstrappedUserObject=user;
               // console.log(identity.currentUser);
               console.log($window.bootstrappedUserObject.username);

            }
            else{
                console.log('Could not login!');
            }
        });
        }
    $scope.logout = function(){
        auth.logout().then(function(){

                console.log('Successful logout!');
                     $window.bootstrappedUserObject=undefined;
                $location.path('/');
        })

    }
    }

);
