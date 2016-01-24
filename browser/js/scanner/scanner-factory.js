app.factory('scannerFactory', function ($http) {
    return {
      getAllTargets: function(){
        return $http.get('/api/targets')
      },
      poisonTargets: function(targets){
        return $http.put('/api/targets')
      }
    }
});
