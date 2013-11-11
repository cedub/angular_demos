'use strict';

/* Directives */


angular.module('lkApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('lknav', function () {
        return {
            restrict: 'E',
            templateUrl: GLOBAL.STATIC_URL + 'core/js/app/partials/nav.html'
        };
    });
