angular.module('mrsCallsClone').controller('homeCtrl', function($scope, mainService){

$scope.getFeaturedProducts = mainService.getFeaturedProducts;

// $scope.slide = function(
//   $
// )

$scope.getCarousel = mainService.getCarousel;
// jQuery stuff
//   Carousel

$scope.homePicturePicker = function () {
  var index = Math.floor(Math.random() * getCarousel.length);
  return getCarousel[index].img;
};


});
