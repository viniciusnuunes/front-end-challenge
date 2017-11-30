app.controller("TopArtistsController", function($scope, $http, $rootScope, $location){

  // Utilizei este trecho para o angular reconhecer qual é a página ativa na navbar
  $rootScope.activetab = $location.path();

  // Fazendo o GET para obter os resultados do artista
  $http.get($rootScope.apiUrl + 'method=chart.gettopartists&api_key=' + $rootScope.apiKey + '&format=json')
  .then(function(response) {

    // Retornando o objeto artista
    $scope.topArtists = response.data.artists.artist;

    // Retornando a imagem dos artistas
    $scope.imgArtist = response.data.artists.artist["0"].image["0"]["#text"];
    
    console.log(response);
  });
});
