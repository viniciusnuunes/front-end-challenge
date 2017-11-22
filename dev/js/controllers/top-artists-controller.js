var apiKey = "ae1d9922136636e63bec4fb20441237b";
var sharedSecret = "c598ef7b2c34d1b9735254cb8c0aaebb";
var apiUrl = "http://ws.audioscrobbler.com/2.0/?";

app.controller("TopArtistsController", function($scope, $http, $rootScope, $location){

  $rootScope.activetab = $location.path();

  // chart.getTopArtists
  $http.get(apiUrl + 'method=chart.gettopartists&api_key=' + apiKey + '&format=json')
  .then(function(response) {
  $scope.topArtists = response.data.artists.artist;
  $scope.imgArtist = response.data.artists.artist["0"].image["0"]["#text"];  
  console.log(response);
  });
});
