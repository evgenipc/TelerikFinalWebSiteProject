/**
 * Created by Evgeni on 6/1/2014.
 */
angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location,  identity, auth, $q) {

    $scope.tagline = 'To the moon and back!';
    $scope.logout = function(){
        auth.logout().then(function(){

            console.log('Successful logout!');
            $location.path('/');
        })

    }


});