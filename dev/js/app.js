// Iniciando o modulo e injetando as dependêcias utilizadas
var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination']);

// Colocando as variaveis para serem usadas em todas as controllers
app.run(['$rootScope', function($rootScope) {
  $rootScope.apiKey = "ae1d9922136636e63bec4fb20441237b";
  $rootScope.sharedSecret = "c598ef7b2c34d1b9735254cb8c0aaebb";
  $rootScope.apiUrl = "http://ws.audioscrobbler.com/2.0/?";
}]);

// Configurando as rotas para utilização da SPA
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
