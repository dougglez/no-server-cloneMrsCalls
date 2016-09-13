angular.module('mrsCallsClone').directive('cartDir', function() {
  return {
    restrict: 'E',
    template: '<div class="col-md-12"><div class="control-group" ng-repeat="prod in getCartItems | filter: {name: searched}" ><div class="col-md-4 prod-pics"><img src={{prod.img}} alt={{prod.name}} class={{prod.class}}/>{{prod.name}}</div></div></div>',


  
    };
});
