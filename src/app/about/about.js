angular.module( 'lk.about', [
  'ui.router.state',
  'ui.bootstrap'
])



.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    }
  });
}])



.controller( 'AboutCtrl', ['$scope', function ($scope) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}]);
