/**
 * Created by Evgeni on 6/1/2014.
 */
angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location, auth, $window) {
    $scope.window = $window;
    var button;
    console.log($window.bootstrappedUserObject);
//    //if(window.bootstrappedUserObject==undefined){
//        button='Sign in';
//    }
//    else{
        button='Profile';
   // }
    $scope.tagline = 'To the moon and back!';
    $scope.logout = function(){
        auth.logout().then(function(){

            console.log('Successful logout!');
            $location.path('/');
        })

    };
    $scope.button=button;


});