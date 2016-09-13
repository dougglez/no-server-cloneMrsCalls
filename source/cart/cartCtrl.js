angular.module('mrsCallsClone').controller('cartCtrl', function($scope, mainService){

$scope.getCartItems = mainService.getCartItems;


});
