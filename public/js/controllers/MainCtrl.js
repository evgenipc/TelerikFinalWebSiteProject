/**
 * Created by Evgeni on 6/1/2014.
 */
angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location, auth, $window) {
//    var button;
//    if($window.bootstrappedUserObject.username==undefined){
//        button='Profile';
//    }
//    else{
//        button='Sign in';
//    }
    $scope.tagline = 'To the moon and back!';
    $scope.logout = function(){
        auth.logout().then(function(){

            console.log('Successful logout!');
            $location.path('/');
        })

    }
   // $scope.button=button;
    //$scope.window = $window;


});