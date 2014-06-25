/**
 * Created by Evgeni on 6/7/2014.
 */

var identity = angular.module('identity', []);
    identity.factory('identity', function($window) { // removed , UsersResource
        var user;
        return {
            currentUser: user,
            isAuthenticated: function () {
                return !!this.currentUser;
            }
        }










//       var currentUser = undefined;
//        if(!!currentUser){
//            window.bootstrappedUserObject = JSON.stringify(currentUser);
//        }
//
//        return{
//            currentUser: undefined,
//            isAuthenticated: function(){
//                return !!this.currentUser;
//            }
//
//        }




//        if ($window.bootstrappedUserObject) {
////              user = new PostResource();
//            angular.extend(user, $window.bootstrappedUserObject);
//        }
//        return {
//            currentUser: user,
//            isAuthenticated: function () {
//                return !!this.currentUser;
//            }
//        }
   });



//       var currentUser = undefined;
//        if(!!currentUser){
//            window.bootstrappedUserObject = JSON.stringify(currentUser);
//        }
//
//        return{
//           // currentUser: undefined,
//            isAuthenticated: function(){
//                return !!this.currentUser;
//            }
//
//        }


