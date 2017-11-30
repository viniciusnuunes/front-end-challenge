app.controller('TopMusicsController', function($scope, $http, $rootScope, $location){
    
    // Utilizei este trecho para o angular reconhecer qual é a página ativa na navbar
    $rootScope.activetab = $location.path();

    $http.get($rootScope.apiUrl + 'method=chart.gettoptracks&api_key=' + $rootScope.apiKey + '&format=json')
    .then(function(response){

        // Retornando o objeto musicas
        $scope.topMusics = response.data.tracks.track;
        console.log(response);
    })
});