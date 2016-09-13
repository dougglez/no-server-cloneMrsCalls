angular.module('mrsCallsClone').controller('prodCtrl', function($scope, mainService){

  $scope.getAllProducts = mainService.getAllProducts;


});
