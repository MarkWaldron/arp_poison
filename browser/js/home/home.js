app.config(function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'js/home/home.html'
    })
    .state('scan', {
      url: '/scan',
      controller: 'scannerCtrl',
      templateUrl: 'js/scanner/scanner.html',
      resolve: {
        allTargets: function(scannerFactory){
          return scannerFactory.getAllTargets()
          .then(function(targets){
            return targets.data;
          })
          .catch(null, function(error){
            console.log(error);
          })
        }
      }
    })
});
