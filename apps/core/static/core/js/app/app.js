angular.module('firstApp', ['ngRoute', 'controllers'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/my-app',
                {
                    controller: 'TestingController',
                    templateUrl: GLOBAL.STATIC_URL + 'core/js/app/partials/temp-partial.html'
                });
    }]);

angular.module('navBar', ['ngRoute'])
    .controller('NavbarController', function ($scope, $location) {
        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return true
            } else {
                return false;
            }
        }
    });