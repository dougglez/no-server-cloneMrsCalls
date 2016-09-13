angular.module('mrsCallsClone', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'source/home/home.html',
    })

    .state('products', {
      url: '/products',
      controller: 'prodCtrl',
      templateUrl: 'source/products/prod.html',
    })

    .state('cart', {
      url: '/cart',
      controller: 'cartCtrl',
      templateUrl: 'source/cart/cart.html',
    })

    .state('coming-soon', {
      url: '/coming-soon',
      controller: 'coming-soonCtrl',
      templateUrl: 'source/coming-soon/coming-soon.html',
    });



  });
