angular.module('firstApp', ['ngRoute', 'controllers'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/my-app',
                {
                    controller: 'TestingController',
                    templateUrl: GLOBAL.STATIC_URL + 'core/js/app/partials/temp-partial.html'
                });
    }]);

