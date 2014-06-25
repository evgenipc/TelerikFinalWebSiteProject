/**
 * Created by Evgeni on 6/1/2014.
 */



angular.module('NerdCtrl', []).controller('NerdController', function($q, $scope,  $http,$window) {

    $scope.window = $window;
    $scope.tagline = 'Nothing beats a pocket protector!';
    var posts;
    $scope.PostComment = function (postComment) {
       // var deferred=$q.defer();
        console.log(postComment);


        //console.log(PostResource);

        $http.post('/nerd', postComment).success(function (response) {
//                identity.currentUser=response.user;
            if (response.success) {
               // deferred.resolve(true);
            }
            else {
                // deferred.resolve(false);
            }

           // console.log(response);
            posts=response;
            console.log(posts);
            $scope.posts=posts;
        });



       // return deferred.promise;


    };
});


