'use strict';


// Declare app level module which depends on filters, and services
angular.module('lkApp', [
  'ngRoute',
  'lkApp.filters',
  'lkApp.services',
  'lkApp.directives',
  'lkApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: GLOBAL.STATIC_URL + 'core/js/app/partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: GLOBAL.STATIC_URL + 'core/js/app/partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
