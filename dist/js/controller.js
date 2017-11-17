app.controller("MyController", function($scope, $http){
  $scope.titulo = "Teste";
  $http.get('http://rest-service.guides.spring.io/greeting')
  .then(function(response) {
    $scope.greeting = response.data;
  });
});

// $http({
//  method: 'GET',
//  url: '/url-da-api' })
//  .then(function successCallback(response) {
//    // se der tudo certo ele vai cair aqui
//    }, function errorCallback(response) {
//    // se der errrado vai cair aqui
//  });
