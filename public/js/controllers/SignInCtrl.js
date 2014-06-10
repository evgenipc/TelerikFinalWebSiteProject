/**
 * Created by Evgeni on 6/2/2014.
 */
angular.module('SignInCtrl', []).controller('SignInController', function($scope, $http, identity, auth) {
    $scope.identity=identity;
    $scope.tagline = 'New Controller working';
    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                console.log('Successful login!');
            }
            else{
                console.log('Could not login!');
            }
        });
}
    }

);
