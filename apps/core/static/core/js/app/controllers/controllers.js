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
    });
