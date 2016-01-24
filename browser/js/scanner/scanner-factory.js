app.factory('scannerFactory', function ($http) {
    return {
      getAllTargets: function(){
        return $http.get('/targets')
      }
    }
});
