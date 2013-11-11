angular.module('controllers', [])

    .controller('TestingController', function ($scope) {
        $scope.users = [
            {'name': 'Christian'},
            {'name': 'Sadie'},
            {'name': 'CJ'},
            {'name': 'Soren'},
            {'name': 'Jane'},
            {'name': 'Nellie'}
        ];
    })

    .controller('NavbarController', function ($scope, $location) {
        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return true
            } else {
                return false;
            }
        }
    });
