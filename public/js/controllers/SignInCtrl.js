/**
 * Created by Evgeni on 6/2/2014.
 */
angular.module('SignInCtrl', []).controller('SignInController', function($scope, $http) {

    $scope.tagline = 'New Controller working';
    $scope.login = function(user){
        $http.post('signin', user).success(function(response){
            console.log(response);
        });
    };

});