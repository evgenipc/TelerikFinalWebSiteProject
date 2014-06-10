/**
 * Created by Evgeni on 6/2/2014.
 */
angular.module('SignInCtrl', []).controller('SignInController', function($scope, $http, identity) {
    $scope.identity=identity;
    $scope.tagline = 'New Controller working';
    $scope.login = function(user){
        $http.post('/signin', user).success(function(response){
            identity.currentUser=response.user;


            console.log(response);

        })

        }
    }

);
