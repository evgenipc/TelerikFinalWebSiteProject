/**
 * Created by Evgeni on 6/1/2014.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerd', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        //
        .when('/geek', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        })

        .when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'SignInController'
        });

    $locationProvider.html5Mode(true);

}]);
