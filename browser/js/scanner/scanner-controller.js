app.controller('scannerCtrl', function($scope, allTargets, scannerFactory, $state){
  $scope.targets = allTargets;
  $scope.poision = function(targets){
    scannerFactory.poisonTargets(targets)
    .then(function(){
      $state.go('results')
    })
  }
})
