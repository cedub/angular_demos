/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'lk.home', [
  'ui.router.state'
])

.provider('WorldFamily', [function () {

  // Create some default values for your provider
  this.defaultFamily = 'not-world';

  // Create a method you can use to set the values in your provider
  // HINT:  You could access the property directly
  this.setFamily = function (family) {
    this.defaultFamily = family;
  };

  // This is the WorldFamily factory
  this.$get = [function() {
    return {
      // Return the value of "defaultFamily" which is set in your configuration stage
      // Or set later on using this factory
      worldFamily: this.defaultFamily
    };
  }];

}])


.factory('NotWorldFamily', [function () {
  return {
    family: 'some-fam'
  };
}])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider', 'WorldFamilyProvider', function ($stateProvider, WorldFamilyProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    resolve: {
      offspring: ['$http', '$location', function ($http, $location) {
        return $http.get('/rest/api/offsprings').then(
          // Success Function
          function (response) {
            return reponse.data;
          },
          // Error Function
          function (response) {
            // return {
            //   'kids': ['Joe']
            // };
          }
        );
      }]
    }
  });

  WorldFamilyProvider.setFamily('shanes-family');
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', [
  '$scope',
  '$document',
  'WorldFamily',
  'offspring',
  '$location',
function (
  $scope,
  $document,
  WorldFamily,
  offspring,
  $location
) {
  if (angular.isUndefined(offspring)) {
    $location.path('/about');
  }
  $scope.family = WorldFamily.worldFamily;
  console.log(offspring);
}])


.directive('stuffDirective', [function () {
  return {
    template: '<div ng-transclude></div><p>{{ someProperty }}</p>',
    transclude: true,
    restrict: 'E',
    scope: {},
    link: function postLink(scope, iElement, iAttrs) {
      var $A = angular.element;
      iElement.addClass('iamshane');
      var _iElement = iElement[0];
      angular.element(iElement[0].querySelectorAll('p')).addClass('iambrennen');
      scope.iamjames = false;
    }
  };
}]);

