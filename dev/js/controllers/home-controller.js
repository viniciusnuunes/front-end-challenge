app.controller('HomeController', function($rootScope, $location) {
  
  // Utilizei este trecho para o angular reconhecer qual é a página ativa na navbar
  $rootScope.activetab = $location.path();
});
