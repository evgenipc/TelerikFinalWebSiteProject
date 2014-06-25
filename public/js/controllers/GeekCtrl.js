/**
 * Created by Evgeni on 6/1/2014.
 */
angular.module('GeekCtrl', []).controller('GeekController', function($q, $scope,  $http,$window) {
    $scope.window = $window;
    $scope.tagline = 'Some fucking text in here!';
    $scope.PostComment = function(postComment){
        var deferred=$q.defer();
        console.log(postComment);




        $http.post('/nerd', postComment).success(function(response){
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
    }

});