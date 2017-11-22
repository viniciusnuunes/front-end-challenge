var apiKey = "ae1d9922136636e63bec4fb20441237b";
var sharedSecret = "c598ef7b2c34d1b9735254cb8c0aaebb";
var apiUrl = "http://ws.audioscrobbler.com/2.0/?";

app.controller('TopMusicsController', function($scope, $http, $rootScope, $location){
    
    $rootScope.activetab = $location.path();

    $http.get(apiUrl + 'method=chart.gettoptracks&api_key=' + apiKey + '&format=json')
    .then(function(response){
        $scope.topMusics = response.data.tracks.track;
        console.log(response);
    })
});