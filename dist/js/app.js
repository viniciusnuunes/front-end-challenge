var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl : './partials/home.html',
    controller : 'HomeController'
  })
  .when('/artistas', {
    templateUrl : './partials/artistas.html',
    controller : 'TopArtistsController'
  })
  .when('/musicas', {
    templateUrl : './partials/musicas.html',
    controller : 'TopMusicsController'
  })
  .otherwise({redirectTo: "/"});
});
