/**
 * Created by Evgeni on 6/7/2014.
 */

var identity = angular.module('identity', []);
    identity.factory('identity', function($window) { // removed , UsersResource , $window, $scope
    var user;
    if ($window.bootstrappedUserObject) {
        user = new UsersResource();
        angular.extend(user, $window.bootstrappedUserObject);
    }
    return {
        currentUser: user,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorizedForRole: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});