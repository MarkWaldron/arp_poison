app.controller('homeCtrl', function($scope, $state){
  $scope.scan = function(){
    $state.go('scan')
  }
})
