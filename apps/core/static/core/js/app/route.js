
app.config(function ($routeProvider) {
    $routeProvider
        .when('/my-app',
            {
                controller: 'TestingController',
                templateUrl: '/app/partials/temp-partial.html'
            });
});
