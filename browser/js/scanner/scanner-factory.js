app.factory('scannerFactory', function ($http) {
    return {
      getAllTargets: function(){
        return $http.get('/api/targets')
      },
      poisonTargets: function(targets){
        var tone = targets['targetone'].split('/');
        var ttwo = targets['targettwo'].split('/');
        var toip = tone[0];
        var tomac = tone[1];
        var ttip = ttwo[0];
        var ttmac = ttwo[1];
        return $http.put('/api/targets/' + toip + '/' + tomac + '/' + ttip + '/' + ttmac)
      }
    }
});
