var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider

  .when('/', {
    templateUrl : './partials/home.html'
  })
  .when('/artistas', {
    templateUrl : './partials/artistas.html',
  });

  $routeProvider.otherwise({redirectTo: "/"});
});
