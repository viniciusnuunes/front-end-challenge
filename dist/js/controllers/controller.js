var apiKey = "ae1d9922136636e63bec4fb20441237b";
var sharedSecret = "c598ef7b2c34d1b9735254cb8c0aaebb";
var urlApi = "http://ws.audioscrobbler.com/2.0/?";

app.controller("MyController", function($scope, $http){

  // chart.getTopArtists
  $http.get(urlApi + 'method=chart.gettopartists&api_key=' + apiKey + '&format=json')
  .then(function(response) {
  $scope.topArtists = response.data.artists.artist;
  console.log(response);
  });
});
