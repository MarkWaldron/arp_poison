app.controller('scannerCtrl', function($scope, allTargets, scannerFactory, $state){
  $scope.targets = allTargets;
  $scope.poison = function(targets){
    scannerFactory.poisonTargets(targets)
    .then(function(targets){
      $state.go('home')
    })
  }
})
