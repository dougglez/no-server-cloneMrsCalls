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

angular.module('mrsCallsClone').controller('mainCtrl', function($scope, mainService){




});

angular.module('mrsCallsClone').service('mainService', function(){

  var featuredProducts = [
    {
      name: 'Chocolate Sea Salt',
      img: './img/prodPics/Milk-Chocolate-Sea-Salt-Caramels-600x600.jpg',
      id: "1",
    },
    {
      name: 'Sea Salt Caramels',
      img: './img/prodPics/Caramels-Sea-Salt-Tub-600x600.jpg',
      id: "2",
    },
    {
      name: 'Caramel Apples',
      img: './img/prodPics/Caramel-Apples-Double-Dipped-600x600.jpg',
      id: "3",
    },
  ];

  var allProducts = [

    {
      name: 'Sea Salt Caramels',
      img: './img/prodPics/Caramels-Sea-Salt-tub-600x600.jpg',
      id: "2",
      class: "zoomInUp animated",
    },
    {
      name: 'Vanilla Cream (5.5 oz box)',
      img: './img/prodPics/Caramels-Vanilla-Cream-Box-600x600.jpg',
      id: "4",
      class: "flip animated",
    },
    {
      name: 'Pecan (5.5 oz box)',
      img: './img/prodPics/Caramels-Pecan-Box-600x600.jpg',
      id: "9",
      class: "rollIn animated",
    },
    {
      name: 'Mocha',
      img: './img/prodPics/Caramels-Mocha-Tub-600x600.jpg',
      id: "10",
      class: "flip animated",
    },
    {
      name: 'Licorice (1 lb tub)',
      img: './img/prodPics/Caramels-Licorice-Tub-600x600.jpg',
      id: "11",
      class: "lightSpeedIn animated",
    },
    {
      name: 'Vanilla Cream',
      img: './img/prodPics/Caramels-Vanilla-Cream-Box-600x600.jpg',
      id: "12",
      class: "rubberBand animated",
    },


    //Chocolate caramels below here
    {
      name: 'Chocolate Sea Salt',
      img: './img/prodPics/Milk-Chocolate-Sea-Salt-Caramels-600x600.jpg',
      id: "1",
      class: "bounce animated",
    },
    {
      name: 'Double Dipped Chocolate Pretzels',
      img: './img/prodPics/Caramel-Pretzels-Double-Dipped-Chocolatey-600x600.jpg',
      id: "5",
      class: "bounceInLeft animated",
    },
    {
      name: 'Chocolate Caramel Pretzels (2-pack)',
      img: './img/prodPics/Pretzels-Chocolate-Caramel-2pk-600x600.jpg',
      id: "7",
      class: "wobble animated",
    },
    {
      name: 'Chocolate Caramel Pretzels (2-pack)',
      img: './img/prodPics/Pretzels-Chocolate-Caramel-2pk-600x600.jpg',
      id: "7",
      class: "wobble animated",
    },
    {
      name: 'Caramel Apples',
      img: './img/prodPics/Caramel-Apples-Double-Dipped-600x600.jpg',
      id: "3",
      class: "rotate animated",
    },
    {
      name: 'Chocolate Covered Oreos',
      img: './img/prodPics/Chocolate-Covered-Oreos-600x600.jpg',
      id: "8",
      class: "zoomInUp animated",
    },


  ];

var cartItems = [


  {
    name: 'Chocolate Sea Salt',
    img: './img/prodPics/Milk-Chocolate-Sea-Salt-Caramels-600x600.jpg',
    id: "1",
    class: "bounce animated",
  },


];



var carouselPics = [
  {
    name: 'car1',
    img: './img/carousel/car1.jpg',
    id: "car1",
  },
  {
    name: 'car2',
    img: './img/carousel/car2.jpg',
    id: "car2",
  },
  {
    name: 'car3',
    img: './img/carousel/car3.jpg',
    id: "car3",
  },
  {
    name: 'car4',
    img: './img/carousel/car4.jpg',
    id: "car4",
  },
  {
    name: 'car5',
    img: './img/carousel/car5.jpg',
    id: "car5",
  },
];

  // var carouselPics = [
  //   {
  //     name: 'car1',
  //     img: './img/carousel/car1.jpg',
  //     id: "car1",
  //   },
  //   {
  //     name: 'car2',
  //     img: './img/carousel/car2.jpg',
  //     id: "car2",
  //   },
  //   {
  //     name: 'car3',
  //     img: './img/carousel/car3.jpg',
  //     id: "car3",
  //   },
  //   {
  //     name: 'car4',
  //     img: './img/carousel/car4.jpg',
  //     id: "car4",
  //   },
  //   {
  //     name: 'car5',
  //     img: './img/carousel/car5.jpg',
  //     id: "car5",
  //   },
  // ];

  this.getFeaturedProducts = featuredProducts;

  this.getAllProducts = allProducts;

  this.getCartItems = cartItems;



  this.getCarousel = carouselPics;




});

module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			my_target: {
				options: {
      				mangle: true,
					compress: {
						drop_console: true
					}
    			},
				files: {
					'dist/anijs-min.js': ['src/anijs.js'],
					'dist/event_systems/jquery/anijs-jquery-event-system-min.js': ['src/event_systems/jquery/anijs-jquery-event-system.js'],
					'dist/helpers/scrollreveal/anijs-helper-scrollreveal-min.js': ['src/helpers/scrollreveal/anijs-helper-scrollreveal.js'],
					'dist/helpers/dom/anijs-helper-dom-min.js': ['src/helpers/dom/anijs-helper-dom.js']
				}
			}
		},
		copy: {
			remoteProduction: {
				src: [
						'src/anijs.js'
					],
				dest: 'dist/anijs.js',
				options: {
				}
			},
			remoteProduction2: {
				src: [
						'src/event_systems/jquery/anijs-jquery-event-system.js'
					],
				dest: 'dist/event_systems/jquery/anijs-jquery-event-system.js',
				options: {
				}
			},
			remoteProduction3: {
				src: [
						'src/helpers/scrollreveal/anijs-helper-scrollreveal.js'
					],
				dest: 'dist/helpers/scrollreveal/anijs-helper-scrollreveal.js',
				options: {
				}
			},
			remoteProduction4: {
				src: [
						'src/helpers/dom/anijs-helper-dom.js'
					],
				dest: 'dist/helpers/dom/anijs-helper-dom.js',
				options: {
				}
			}
		},

		replace: {
		  example: {
		    src: ['dist/anijs-min.js'],             // source files array (supports minimatch)
		    dest: 'dist/anijs-min.js',             // destination directory or file
		    replacements: [
		    	{ from: '_createDefaultHelper', to: '_a' },
		    	{ from: '_createParser', to: '_b' },
		    	{ from: '_setupElementAnim', to: '_c' },
		    	{ from: '_setupElementSentenceAnim', to: '_d' },
		    	{ from: '_eventHelper', to: '_e' },
		    	{ from: '_eventTargetHelper', to: '_f' },
		    	{ from: '_behaviorTargetHelper', to: '_g' },
		    	{ from: '_behaviorHelper', to: '_h' },
		    	{ from: '_afterHelper', to: '_i' },
		    	{ from: '_beforeHelper', to: '_j' },
		    	{ from: '_callbackHelper', to: '_k' },
		    	{ from: '_helperHelper', to: '_l' },
		    	{ from: '_eventProviderHelper', to: '_m' },
		    	{ from: '_getParsedAniJSSentenceCollection', to: '_n' },
		    	{ from: '_findAniJSNodeCollection', to: '_o' },
		    	{ from: '_animationEndPrefix', to: '_p' },
		    	{ from: '_transitionEndPrefix', to: '_q' },
		    	{ from: '_endPrefixBrowserDetectionIndex', to: '_r' },
		    	{ from: '_helperCollection', to: '_t' },
		    	{ from: '_helperDefaultIndex', to: '_u' },
		    	{ from: '_animationEndEvent', to: '_v' },
		    	{ from: '_classNamesWhenAnim', to: '_w' },
		    	{ from: 'beArray', to: '_x' },
		    	{ from: '_actionHelper', to: '_y' },
		    	{ from: '_paramsHelper', to: '_z' },
		    	{ from: "Event object missing 'type' property.", to: 'error' },
		    ]
		  }
		}


	});

  	// Load task-providing plugins.
  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask(
		'prod',
		'Compiles all of the assets and copies the files to the build directory.', 
		[ 'uglify', 'copy', 'replace']
	);
};

angular.module('mrsCallsClone').controller('cartCtrl', function($scope, mainService){

$scope.getCartItems = mainService.getCartItems;


});

angular.module('mrsCallsClone').controller('coming-soonCtrl', function($scope) {

});

angular.module('mrsCallsClone').directive('cartDir', function() {
  return {
    restrict: 'E',
    template: '<div class="col-md-12"><div class="control-group" ng-repeat="prod in getCartItems | filter: {name: searched}" ><div class="col-md-4 prod-pics"><img src={{prod.img}} alt={{prod.name}} class={{prod.class}}/>{{prod.name}}</div></div></div>',


  
    };
});

angular.module('mrsCallsClone').directive('comingSoon', function() {

  function randColor() {
      var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'black'];
      var index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }

return {
  template: '<h1 title>Coming soon!</h1><p>In the meantime, enjoy this article:</p> <a href="https://en.wikipedia.org/wiki/Special:Random" media="screen" title="no title">SURPRISE!!</a><iframe src="https://vine.co/v/Mrn9aiAzmtQ/embed/simple?audio=1" width="600" height="600" frameborder="0" class="vine"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>',
  restrict: 'AE',
    scope: {
      title: '=',
      callback: '&',
    },
    link: function(scope, element, attributes) {
      //jqlite means that you can do certain jQuery things like:
      element.on('click', function(event) {


        var colorChange = randColor();

        var targetElement = element.find('.vine');

        targetElement.css('border-color', colorChange);

        //make header change colors
        // var intervalID = window.setInterval(function() {
        //   targetElement.css('background-color', newColor);
        // }, 500);
      });
    },
  };

});


//

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

// angular.module('directiveApp').directive('dmHeader', function() {
//
//
//   $('document').ready(function(){
//     $('.swiper').slick({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       fade: true,
//       cssEase: 'linear',
//       autplay: true,
//       autoplaySpeed: 3000,
//       centerMode: true,
//       centerPadding: '50px',
//     });
//   });
// };

angular.module('mrsCallsClone').controller('prodCtrl', function($scope, mainService){

  $scope.getAllProducts = mainService.getAllProducts;


});

!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("AniJS-RWWD");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=function(b){var c="data-anijs",d="default",e="|",f="$",g="if",h="on",i=["do","after","before","to"],j="(\\s+|^)",k="(\\s+|$)",l="animationend",m="transitionend",n="target";b={rootDOMTravelScope:{},notifierCollection:{},init:function(){o._t={};var a=o._a();b.registerHelper(d,a),o._u=d,b.rootDOMTravelScope=document,b.Parser=o.Parser,o._v=o._p(),o._w=""},setDOMRootTravelScope:function(a){var c,d=document;try{"document"===a?c=d:(c=d.querySelector(a),c||(c=d))}catch(e){c=d}b.rootDOMTravelScope=c},run:function(){var a=[],d={};b.purgeAll(),b.notifierCollection={},a=o._o(b.rootDOMTravelScope);var e,f=a.length,g=0;for(g;f>g;g++)e=a[g],d=o._n(e.getAttribute(c)),o._c(e,d);var h=b.getNotifier("AniJSNotifier");h&&h.dispatchEvent("onRunFinished")},createAnimation:function(a,b){var c=b||"";o._c(c,a)},getHelper:function(a){var b=o._t;return b[a]||b[d]},registerHelper:function(a,b){o._t[a]=b},purge:function(a){if(a&&""!==a&&" "!==a){var c=document.querySelectorAll(a),d=c.length,e=0;for(e;d>e;e++)b.EventSystem.purgeEventTarget(c[e])}},purgeAll:function(){b.EventSystem.purgeAll()},purgeEventTarget:function(a){b.EventSystem.purgeEventTarget(a)},setClassNamesWhenAnim:function(a){o._w=" "+a},createNotifier:function(){return b.EventSystem.createEventTarget()},registerNotifier:function(a){var c=b.notifierCollection;return a.id&&a.value&&b.EventSystem.isEventTarget(a.value)?(c[a.id]=a.value,1):""},getNotifier:function(a){return b.notifierCollection[a]}};var o={};return o._a=function(){var a={removeAnim:function(a,b){a.target&&a.type&&b.nodeHelper.removeClass(a.target,b.behavior)},holdAnimClass:function(){},fireOnce:function(a,b){b.eventSystem.removeEventListenerHelper(b.eventTarget,b.event.type,b.listener)},emit:function(a,c,d){var e=d[0]||null,f="";if(null!==e){e=e.split("."),e.length>1?(f=e[0],e=e[1]):(f="",e=e[0]);var g=b.getNotifier(f)||null;null!==g&&g.dispatchEvent(e)}c.hasRunned||c.run()}};return a},o._b=function(){return new Parser},o._c=function(a,b){var c,d,e,f,g=b.length,h=0;for(h;g>h;h++)c=b[h],e=c.after,d=c.before,f=c.behavior,e&&(c.after=o.Parser.parseDoDefinition(e)),d&&(c.before=o.Parser.parseDoDefinition(d)),f&&(c.behavior=o.Parser.parseDoDefinition(f)),o._d(a,c)},o._d=function(a,c){var d,e=o._e(c),f=o._f(a,c);if(c.after&&o.Util._x(c.after)&&(d=c.after[0]),""!==e){var g,h=f.length,i=0;for(i;h>i;i++)if(g=f[i],b.EventSystem.isEventTarget(g)){var j=function(e){var f=o._g(a,c,e),g=o._h(c),h=o._j(a,c),i=o._i(a,c);""!==o._w&&(o.Util._x(g)||(g+=o._w));var k={behaviorTargetList:f,nodeHelper:o.NodeHelper,animationEndEvent:o._v,behavior:g,after:i,eventSystem:b.EventSystem,eventTarget:e.currentTarget,afterFunctionName:d,dataAniJSOwner:a,listener:j,event:e,before:h},l=new b.AnimationContext(k);l.runAll(k)};b.EventSystem.addEventListenerHelper(g,e,j,!1),b.EventSystem.registerEventHandle(g,e,j)}}},o._e=function(a){var b="",c=a.event||b;return c===l?c=o._p():c===m&&(c=o._q()),c},o._f=function(c,d){var e,f=c,g=[f],h=b.rootDOMTravelScope;if(d.eventTarget)if(e=o._notifierHelper(d.eventTarget),e.length>0)g=e;else if("document"===d.eventTarget)g=[document];else if("window"===d.eventTarget)g=[a];else if(d.eventTarget.split)try{g=h.querySelectorAll(d.eventTarget)}catch(i){g=[]}return g},o._g=function(a,c,d){var e=a,g=[e],h=b.rootDOMTravelScope,i=c.behaviorTarget;if(i)if(o.Util._x(i)){var j=this._y(a,c,i);j&&o.Util.isFunction(j[0])&&(g=j[0](d,{dataAniJSOwner:a},o._z(j)))}else if(i===n&&d.currentTarget)g=[d.currentTarget];else{i=i.split(f).join(",");try{g=h.querySelectorAll(i)}catch(k){g=[]}}return g},o._h=function(a){return this._y({},a,a.behavior)},o._i=function(a,b){var c=b.after;return o.Util._x(c)?this._y(a,b,c):o._k(a,b,c)},o._j=function(a,b){var c=b.before;return o.Util._x(c)?this._y(a,b,c):o._k(a,b,c)},o._y=function(a,b,c){var d,e=c||"";return o.Util._x(e)&&(d=o._k(a,b,e[0]),d?e[0]=d:e=e.join(" ")),e},o._k=function(a,b,c){var d=c||"",e=o._l(b);if(d&&!o.Util.isFunction(d)){var f=o._t,g=f[e];d=g&&o.Util.isFunction(g[d])?g[d]:!1}return d},o._l=function(a){var b=a.helper||o._u;return b},o._notifierHelper=function(a){{var c=[];b.notifierCollection}if(a)if(a.id&&b.EventSystem.isEventTarget(a.value))c.push(a.value),b.registerNotifier(a);else if(a.split){notifierIDList=a.split("$");var d,e=notifierIDList.length,f=1;for(f;e>f;f++)if(d=notifierIDList[f],d&&" "!==d){d=d.trim();var g=b.getNotifier(d);g||(g=b.EventSystem.createEventTarget(),b.registerNotifier({id:d,value:g})),c.push(g)}}return c},o._z=function(a){for(var b=[],c=a.length;c-->1;)b[c-1]=a[c];return b},o._n=function(a){return o.Parser.parse(a)},o._o=function(a){var b="["+c+"]";return a.querySelectorAll(b)},o._p=function(){var a=o._r(),b=[l,"oAnimationEnd",l,"webkitAnimationEnd"];return b[a]},o._q=function(){var a=o._r(),b=[m,"oTransitionEnd",m,"webkitTransitionEnd"];return b[a]},o._r=function(){for(var a=document.createElement("fe"),b="Animation",c=["animation","O"+b,"Moz"+b,"webkit"+b],d=0;d<c.length;d++)if(void 0!==a.style[c[d]])return d},b.AnimationContext=function(a){var c=this;c.init=function(a){c.behaviorTargetList=a.behaviorTargetList||[],c.nodeHelper=a.nodeHelper,c.animationEndEvent=a.animationEndEvent,c.behavior=a.behavior,c.after=a.after,c.eventSystem=a.eventSystem,c.eventTarget=a.eventTarget,c.afterFunctionName=a.afterFunctionName,c.dataAniJSOwner=a.dataAniJSOwner,c.listener=a.listener,c.event=a.event,c.before=a.before},c.doDefaultAction=function(a,b){var d,e=c,f=e.nodeHelper,g=e.animationEndEvent,h=e.after,i=e.afterFunctionName;e.eventSystem.addEventListenerHelper(a,g,function(a){a.stopPropagation(),e.eventSystem.removeEventListenerHelper(a.target,a.type,arguments.callee),h&&(o.Util.isFunction(h)?h(a,c):o.Util._x(h)&&h[0](a,c,o._z(h)))}),"holdAnimClass"!==i&&"$holdAnimClass"!==i&&(d=a._ajLastBehavior,d&&f.removeClass(a,d),a._ajLastBehavior=b),a.offsetWidth=a.offsetWidth,f.addClass(a,b)},c.doFunctionAction=function(a,b){var d=c,e=d.after,f={target:a};b[0](f,c,o._z(b)),o.Util.isFunction(e)?e(f,c):o.Util._x(e)&&e[0](f,c,o._z(e))},c.runAll=function(){var a,d,e=c,f=e.behaviorTargetList,g=f.length,h=(e.behavior,0),i=e.before,j=c.event;for(h;g>h;h++)d={behaviorTargetList:[f[h]],nodeHelper:c.nodeHelper,animationEndEvent:c.animationEndEvent,behavior:c.behavior,after:c.after,eventSystem:c.eventSystem,eventTarget:c.eventTarget,afterFunctionName:c.afterFunctionName,dataAniJSOwner:c.dataAniJSOwner,listener:c.listener,event:j},a=new b.AnimationContext(d),i?o.Util.isFunction(i)?i(j,a):o.Util._x(i)&&i[0](j,a,o._z(i)):a.run()},c.run=function(){var a=c,b=a.behavior,d=a.behaviorTargetList[0];c.hasRunned=1,o.Util._x(b)?a.doFunctionAction(d,b):a.doDefaultAction(d,b)},c.init(a)},o.Parser={parse:function(a){return this.parseDeclaration(a)},parseDeclaration:function(a){var b,c,d=[];b=a.split(";");var e=b.length,f=0;for(f;e>f;f++)c=this.parseSentence(b[f]),d.push(c);return d},parseSentence:function(a){var b,c,d={};b=a.split(",");var e=b.length,f=0;for(f;e>f;f++)c=this.parseDefinition(b[f]),d[c.key]=c.value;return d},parseDefinition:function(a){var b,c,d,e={},f="event",j="eventTarget",k=["behavior","after","before","behaviorTarget"];if(b=a.split(":"),b.length>1){if(c=b[0].trim(),b.length>2?(d=b.slice(1),d=d.join(":"),d=d.trim()):d=b[1].trim(),e.value=d,c===g)c=f;else if(c===h)c=j;else for(var l=i.length-1;l>=0;l--)c===i[l]&&(c=k[l],"after"!==c&&"before"!==c||"$"===d[0]||(d="$"+d),d=this.parseDoDefinition(d));e.key=c,e.value=d}return e},parseDoDefinition:function(a){var b=/^\$(\w+)\s*/g,c=b.exec(a),d="",f=1;if(null!==c){d=c[1],doDefinitionArray=a.split(c[0])[1],doDefinitionArray=null!==doDefinitionArray?doDefinitionArray.split(e):[],a=[],a[0]=d;for(var g=0;g<doDefinitionArray.length;g++)""!==doDefinitionArray[g]&&(a[f++]=doDefinitionArray[g].trim());return a}return a}},o.NodeHelper={addClass:function(a,b){b instanceof Array||(b=b.split(" "));for(var c=0,d=b.length;d>c;++c)b[c]&&!new RegExp(j+b[c]+k).test(a.className)&&(a.className=""===a.className?b[c]:a.className.trim()+" "+b[c])},removeClass:function(a,b){b instanceof Array||(b=b.split(" "));for(var c=0,d=b.length;d>c;++c)a.className=a.className.replace(new RegExp(j+b[c]+k)," ").trim()},hasClass:function(a,b){return b&&new RegExp(j+b+k).test(a.className)}},o.Util={isFunction:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},_x:function(a){return Array.isArray(a)}},b.EventSystem={eventCollection:{},eventIdCounter:0,isEventTarget:function(a){return a.addEventListener?1:0},createEventTarget:function(){return new b.EventTarget},addEventListenerHelper:function(a,b,c){a.addEventListener(b,c,!1)},removeEventListenerHelper:function(a,b,c){a&&a.removeEventListener(b,c)},purgeAll:function(){var a,b,c=this,d=c.eventCollection,e=Object.keys(d),f=e.length,g=0;for(g;f>g;g++)a=e[g],b=d[a],b&&b.handleCollection&&b.handleCollection.length>0&&c.purgeEventTarget(b.handleCollection[0].element),delete d[a]},purgeAllNodes:function(a){var b=a.querySelectorAll("*");size=b.length;for(var c=size-1;c>=0;c--)this.purgeEventTarget(b[c])},purgeEventTarget:function(a){var b,c=this,d=a._aniJSEventID;if(d){b=c.eventCollection[d].handleCollection;var e,f=b.length,g=0;for(g;f>g;g++)e=b[g],c.removeEventListenerHelper(a,e.eventType,e.listener);c.eventCollection[d]=a._aniJSEventID=null,delete c.eventCollection[d],delete a._aniJSEventID}},registerEventHandle:function(a,b,c){var d=this,e=a._aniJSEventID,f=d.eventCollection,g={eventType:b,listener:c,element:a};if(e)f[e].handleCollection.push(g);else{var h={handleCollection:[g]};f[++d.eventIdCounter]=h,a._aniJSEventID=d.eventIdCounter}}},b.EventTarget=function(){this._listeners={}},b.EventTarget.prototype={constructor:b.EventTarget,addEventListener:function(a,b){var c=this;"undefined"==typeof c._listeners[a]&&(c._listeners[a]=[]),c._listeners[a].push(b)},dispatchEvent:function(a){var b=this;if("string"==typeof a&&(a={type:a}),a.target||(a.target=b),!a.type)throw new Error("error");if(this._listeners[a.type]instanceof Array)for(var c=b._listeners[a.type],d=0,e=c.length;e>d;d++)c[d].call(b,a)},removeEventListener:function(a,b){var c=this;if(c._listeners[a]instanceof Array)for(var d=c._listeners[a],e=0,f=d.length;f>e;e++)if(d[e]===b){d.splice(e,1);break}}},b}(c||{});return c.init(),c.run(),"function"==typeof define&&define.amd&&define("anijs",[],function(){return c}),"undefined"==typeof b&&(a.AniJS=c),c});
/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(root, factory) {
    "use strict";
    if (typeof module == "object" && typeof module.exports == "object") {
        module.exports = root.document ?
            factory(root, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("AniJS-RWWD");
                }
                return factory(w);
        };
    } else {
        factory(root);
    }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {


    /**
     * AniJS is library for write declarative animations in your static html documents
     * @class AniJSit
     * @constructor init
     * @author @dariel_noel
     */
    var AniJS = (function(AniJS) {

        //Shorthands
        var ANIJS_DATATAG_NAME = 'data-anijs',
            DEFAULT = 'default',
            BODY = 'body',
            PARAMS_SEPARATOR = '|',
            MULTIPLE_CLASS_SEPARATOR = '$',
            EVENT_RESERVED_WORD = 'if',
            EVENT_TARGET_RESERVED_WORD = 'on',
            BEHAVIOR_RESERVED_WORD = ['do', 'after', 'before', 'to'],
            BEHAVIOR_TARGET_RESERVED_WORD = 'to',
            REGEX_BEGIN = '(\\s+|^)',
            REGEX_END = '(\\s+|$)',
            ANIMATION_END = 'animationend',
            TRANSITION_END = 'transitionend',
            TARGET = 'target';

        /////////////////////////////////////////////////////////
        // Public API
        /////////////////////////////////////////////////////////

        AniJS = {

            rootDOMTravelScope: {},

            notifierCollection: {},

            /**
             * Initializer Function
             * @method init
             * @return
             */
            init: function() {

                //ATTRS inicialization
                selfish._helperCollection = {};

                var defaultHelper = selfish._createDefaultHelper();

                //Registering an empty helper
                AniJS.registerHelper(DEFAULT, defaultHelper);

                //Default Helper Index
                selfish._helperDefaultIndex = DEFAULT;

                AniJS.rootDOMTravelScope = document;

                //Initialize the Parser Object
                AniJS.Parser = selfish.Parser;

                //AnimationEnd Correct Prefix Setup
                selfish._animationEndEvent = selfish._animationEndPrefix();

                //Add this class names when anim
                selfish._classNamesWhenAnim = '';
            },

            /**
             * You can use these to change the scope to run AniJS
             * @method setDOMRootTravelScope
             * @param {} selector
             * @return
             */
            setDOMRootTravelScope: function(selector) {
                var rootDOMTravelScope,
                    domDocument = document;
                try {
                    if (selector === 'document') {
                        rootDOMTravelScope = domDocument;
                    } else {
                        rootDOMTravelScope = domDocument.querySelector(selector);
                        if (!rootDOMTravelScope) {
                            rootDOMTravelScope = domDocument;
                        }
                    }

                } catch (e) {
                    rootDOMTravelScope = domDocument;
                }
                AniJS.rootDOMTravelScope = rootDOMTravelScope;
            },

            /**
             * Parse Declarations and setup Anim in a founded elements
             * @method run
             * @return
             */
            run: function() {
                var aniJSNodeCollection = [],
                    aniJSParsedSentenceCollection = {};

                //Clear all node listener
                AniJS.purgeAll();

                AniJS.notifierCollection = {};

                aniJSNodeCollection = selfish._findAniJSNodeCollection(AniJS.rootDOMTravelScope);

                var size = aniJSNodeCollection.length,
                    i = 0,
                    item;

                for (i; i < size; i++) {
                    item = aniJSNodeCollection[i];

                    //IMPROVE: The datatag name migth come from configuration
                    aniJSParsedSentenceCollection = selfish._getParsedAniJSSentenceCollection(item.getAttribute(ANIJS_DATATAG_NAME));

                    //Le seteo su animacion
                    selfish._setupElementAnim(item, aniJSParsedSentenceCollection);
                }

                //We can use this for supply the window load and DomContentLoaded in some context
                var aniJSEventsNotifier = AniJS.getNotifier('AniJSNotifier');
                if(aniJSEventsNotifier){
                    aniJSEventsNotifier.dispatchEvent('onRunFinished');
                }
            },

            /**
             * Create an animation from a aniJSParsedSentenceCollection
             * @method createAnimation
             * @param {} aniJSParsedSentenceCollection
             * @param {} element
             * @return
             */
            createAnimation: function(aniJSParsedSentenceCollection, element) {
                var nodeElement = element || '';

                //BEAUTIFY: The params order migth be the same
                selfish._setupElementAnim(nodeElement, aniJSParsedSentenceCollection);
            },

            /**
             * Return a Helper by ID, you can use this to attach callback to the Helper
             * @method getHelper
             * @param {} helperID
             * @return LogicalExpression
             */
            getHelper: function(helperID) {
                var helperCollection = selfish._helperCollection;
                return helperCollection[helperID] || helperCollection[DEFAULT];
            },

            /**
             * A helper it's a callback function container
             * using this function you can register your custom Helper
             * @method registerHelper
             * @param {} helperName
             * @param {} helperInstance
             * @return
             */
            registerHelper: function(helperName, helperInstance) {
                selfish._helperCollection[helperName] = helperInstance;
            },

            /**
             * Purge a NodeList By Selector
             * @method purge
             * @param {} selector
             * @return
             */
            purge: function(selector) {
                //TODO: Search a regular expression for test a valid CSS selector
                if (selector && selector !== '' && selector !== ' ') {
                    var purgeNodeCollection = document.querySelectorAll(selector),
                        size = purgeNodeCollection.length,
                        i = 0;

                    for (i; i < size; i++) {
                        AniJS.EventSystem.purgeEventTarget(purgeNodeCollection[i]);
                    }
                }
            },

            /**
             * Purge all register elements handle
             * you can use this when you run AniJS again
             * @method purgeAll
             * @return
             */
            purgeAll: function() {
                AniJS.EventSystem.purgeAll();
            },

            /**
             * Remove all listener from an element
             * @method purgeEventTarget
             * @param {} element
             * @return
             */
            purgeEventTarget: function(element) {
                AniJS.EventSystem.purgeEventTarget(element);
            },

            /**
             * Add default class names while Anim
             * @method setClassNamesWhenAnim
             * @param {} defaultClasses
             * @return
             */
            setClassNamesWhenAnim: function(defaultClasses) {
                selfish._classNamesWhenAnim = ' ' + defaultClasses;
            },

            /**
             * Create an EventTarget
             * @method createNotifier
             * @return EventTarget
             */
            createNotifier: function() {
                return AniJS.EventSystem.createEventTarget();
            },

            /**
             * Put an event Notifier in the notifierCollection
             * @method registerNotifier
             * @param {} notifier
             * @return Literal
             */
            registerNotifier: function(notifier) {
                var notifierCollection = AniJS.notifierCollection;

                //TODO: Optimize lookups here
                if (notifier.id && notifier.value && AniJS.EventSystem.isEventTarget(notifier.value)) {
                    notifierCollection[notifier.id] = notifier.value;
                    return 1;
                }

                return '';
            },

            /**
             * Return an notifier instance
             * @method getNotifier
             * @param {} notifierID
             * @return notifier
             */
            getNotifier: function(notifierID) {
                return AniJS.notifierCollection[notifierID];
            }

        };

        /////////////////////////////////////////////////////////
        // Private Methods an Vars
        /////////////////////////////////////////////////////////

        var selfish = {

        };

        /**
         * Description
         * @method _createDefaultHelper
         * @return defaultHelper
         */
        selfish._createDefaultHelper = function() {
            //TODO: Why default helper here, migth be directly in the public API
            var defaultHelper = {
                /**
                 * Remove the animation class added when animation is created
                 * @method removeAnim
                 * @param {} e
                 * @param {} animationContext
                 * @return
                 */
                removeAnim: function(e, animationContext) {
                    if(e.target && e.type){
                      animationContext.nodeHelper.removeClass(e.target, animationContext.behavior);
                    }
                },
                /**
                 * Holds the animation class added when animation is created
                 * @method holdAnimClass
                 * @param {} e
                 * @param {} animationContext
                 * @return
                 */
                holdAnimClass: function(e, animationContext) {
                },

                fireOnce: function(e, animationContext) {
                    animationContext.eventSystem.removeEventListenerHelper(animationContext.eventTarget, animationContext.event.type, animationContext.listener);
                },

                /**
                 * Fire custom event
                 *
                 * Examples:
                 *
                 *  Fire dummyEvent event of customNotifier
                 *
                 *  if: click, do: $addClass fadeIn animated, to: #container, after: emit customNotifier.dummyEvent
                 *  if: dummyEvent, on: $customNotifier, do: $addClass hidden,  to: $children #container | div
                 *
                 *
                 * @author Yolier Galan Tasse <gallegogt@gmail.com>
                 * @since  2014-09-20
                 * @param  {object}   e          The event handler
                 * @param  {object}   ctx        AniJS Animation Context Object
                 * @param  {[string]} params     [description]
                 */
                emit: function(e, ctx, params) {
                    var cevent = params[0] || null,
                        notifier = "";
                    if(cevent !== null) {
                        cevent = cevent.split('.');
                        if(cevent.length > 1) {
                            notifier = cevent[0];
                            cevent = cevent[1];
                        } else {
                            notifier = "";
                            cevent = cevent[0];
                        }
                        var customNotifier = AniJS.getNotifier(notifier) || null;
                        if(customNotifier !== null)
                            customNotifier.dispatchEvent(cevent);
                    }
                    //Run the animation
                    if(!ctx.hasRunned){
                        ctx.run();
                    }
                }
            };

            return defaultHelper;
        };

        /**
         * Create a Parser Instance
         * @method _createParser
         * @return Parser
         */
        selfish._createParser = function() {
            //TODO: The Parser could be an static class
            return new Parser();
        };

        /**
         * Setup the animation of the some element
         * @method _setupElementAnim
         * @param {} element
         * @param {} aniJSParsedSentenceCollection
         * @return
         */
        selfish._setupElementAnim = function(element, aniJSParsedSentenceCollection) {
            var size = aniJSParsedSentenceCollection.length,
                i = 0,
                item,
                before,
                after,
                behavior;

            for (i; i < size; i++) {
                item = aniJSParsedSentenceCollection[i];
                after = item.after;
                before = item.before;
                behavior = item.behavior;

                if(after){
                    item.after = selfish.Parser.parseDoDefinition(after);
                }
                if(before){
                    item.before = selfish.Parser.parseDoDefinition(before);
                }
                if(behavior){
                    item.behavior = selfish.Parser.parseDoDefinition(behavior);
                }
                selfish._setupElementSentenceAnim(element, item);
            }
        };

        /**
         * Setup the element animation from a AniJS Sentence
         * @method _setupElementSentenceAnim
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return
         */
        selfish._setupElementSentenceAnim = function(element, aniJSParsedSentence) {
            //TODO: If the user use animationend or transitionend names to custom events the eventdispach will be not executed
            var event = selfish._eventHelper(aniJSParsedSentence),
                eventTargetList = selfish._eventTargetHelper(element, aniJSParsedSentence),
                afterFunctionName;

            if(aniJSParsedSentence.after && selfish.Util.beArray(aniJSParsedSentence.after)){
                afterFunctionName =  aniJSParsedSentence.after[0];
            }

            //Es obligatorio definir de eventTarget ATTR
            if (event !== '') {
                var size = eventTargetList.length,
                    i = 0,
                    eventTargetItem;
                for (i; i < size; i++) {
                    eventTargetItem = eventTargetList[i];
                    if (AniJS.EventSystem.isEventTarget(eventTargetItem)) {
                        var listener = function(event) {

                            //Si cambia algun parametro dinamicamente entonces hay que enterarse
                            var behaviorTargetList = selfish._behaviorTargetHelper(element, aniJSParsedSentence, event),
                                behavior = selfish._behaviorHelper(aniJSParsedSentence),
                                before = selfish._beforeHelper(element, aniJSParsedSentence),
                                after = selfish._afterHelper(element, aniJSParsedSentence);
                            if (selfish._classNamesWhenAnim !== '') {
                                if(!selfish.Util.beArray(behavior))
                                    behavior += selfish._classNamesWhenAnim;
                            }
                            //Creo un nuevo animation context
                            var animationContextConfig = {
                                behaviorTargetList: behaviorTargetList,
                                nodeHelper: selfish.NodeHelper,
                                animationEndEvent: selfish._animationEndEvent,
                                behavior: behavior,
                                after: after,
                                eventSystem: AniJS.EventSystem,
                                eventTarget: event.currentTarget,
                                afterFunctionName: afterFunctionName,
                                dataAniJSOwner: element,
                                listener: listener,
                                event: event,
                                before: before
                                //TODO: eventSystem should be called directly
                            },

                            animationContextInstance = new AniJS.AnimationContext(animationContextConfig);

                            animationContextInstance.runAll(animationContextConfig);
                        };

                        //TODO: Improve lookup here AniJS.EventSystem
                        AniJS.EventSystem.addEventListenerHelper(eventTargetItem, event, listener, false);

                        //Register event to feature handle
                        AniJS.EventSystem.registerEventHandle(eventTargetItem, event, listener);
                    }
                }
            }
        };

        /**
         * Helper to setup the Event that trigger the animation from declaration
         * https://developer.mozilla.org/en-US/docs/Web/Reference/Events
         * http://www.w3schools.com/tags/ref_eventattributes.asp
         * @method _eventHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return event
         */
        selfish._eventHelper = function(aniJSParsedSentence) {
            var defaultValue = '',
                event = aniJSParsedSentence.event || defaultValue;

            //TODO: Improve to reduce this ugly logic here
            if (event === ANIMATION_END) {
                event = selfish._animationEndPrefix();
            } else if (event === TRANSITION_END) {
                event = selfish._transitionEndPrefix();
            }

            return event;
        };

        /**
         * Helper to setup the Place from listen the trigger event of the animation
         * If is not specified one place, se asume que es himself
         * Take in account that where it's just a selector
         * @method _eventTargetHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return eventTargetList
         */
        selfish._eventTargetHelper = function(element, aniJSParsedSentence) {
            var defaultValue = element,
                eventTargetList = [defaultValue],
                rootDOMTravelScope = AniJS.rootDOMTravelScope,
                notifierList;

            //TODO: We could add other non direct DOM Objects
            if (aniJSParsedSentence.eventTarget) {

                notifierList = selfish._notifierHelper(aniJSParsedSentence.eventTarget);

                if (notifierList.length > 0) {
                    eventTargetList = notifierList;
                } else if (aniJSParsedSentence.eventTarget === 'document') {
                    eventTargetList = [document];
                } else if (aniJSParsedSentence.eventTarget === 'window') {
                    eventTargetList = [window];
                } else if (aniJSParsedSentence.eventTarget.split) {
                    try {
                        eventTargetList = rootDOMTravelScope.querySelectorAll(aniJSParsedSentence.eventTarget);
                    } catch (e) {
                        console.log('Ugly Selector Here');
                        eventTargetList = [];
                    }
                }
            }
            //It's not a nodeList any more
            return eventTargetList;
        };

        /**
         * Helper to setup the Node can be animated
         * @method _behaviorTargetHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return behaviorTargetNodeList
         */
        selfish._behaviorTargetHelper = function(element, aniJSParsedSentence, event) {
            var defaultValue = element,
                behaviorTargetNodeList = [defaultValue],
                rootDOMTravelScope = AniJS.rootDOMTravelScope,
                behaviorTarget = aniJSParsedSentence.behaviorTarget;

            if (behaviorTarget) {
                if(!selfish.Util.beArray(behaviorTarget)){
                    if(behaviorTarget === TARGET && event.currentTarget){
                        behaviorTargetNodeList = [event.currentTarget];
                    } else{
                        //Expression regular remplazar caracteres $ por comas
                        //TODO: Estudiar si este caracter no esta agarrado
                        behaviorTarget = behaviorTarget.split(MULTIPLE_CLASS_SEPARATOR).join(',');
                        try {
                            behaviorTargetNodeList = rootDOMTravelScope.querySelectorAll(behaviorTarget);
                        } catch (e) {
                            behaviorTargetNodeList = [];
                        }
                    }
                } else{
                    var behaviorObject = this._actionHelper(element, aniJSParsedSentence, behaviorTarget);
                    if(behaviorObject && selfish.Util.isFunction(behaviorObject[0])){
                        behaviorTargetNodeList = behaviorObject[0]
                                                    (event,{dataAniJSOwner:element},
                                                    selfish._paramsHelper(behaviorObject));
                    }
                }
            }
            return behaviorTargetNodeList;
        };

        /**
         * Helper to setup the Animation type
         * @method _behaviorHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._behaviorHelper = function(aniJSParsedSentence) {
            return this._actionHelper({}, aniJSParsedSentence, aniJSParsedSentence.behavior);
        };

        /**
         * Helper to setup the after callback function
         * @method _afterHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._afterHelper = function(element, aniJSParsedSentence) {
            var defaultValue =  aniJSParsedSentence.after;
            // return defaultValue;
            if(!selfish.Util.beArray(defaultValue))
                return selfish._callbackHelper(element, aniJSParsedSentence, defaultValue);
            return this._actionHelper(element, aniJSParsedSentence, defaultValue);
        };

        /**
         * Helper to setup the after callback function
         * @method _afterHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._beforeHelper = function(element, aniJSParsedSentence) {
            var defaultValue =  aniJSParsedSentence.before;
            if(!selfish.Util.beArray(defaultValue))
                return selfish._callbackHelper(element, aniJSParsedSentence, defaultValue);
            return this._actionHelper(element, aniJSParsedSentence, defaultValue);
        };
        /**
         * The executed actions helper
         * @author Dariel Noel <darielnoel@gmail.com>
         * @since  2014-09-10
         * @param  {[type]}   element             [description]
         * @param  {[type]}   aniJSParsedSentence [description]
         * @param  {[type]}   action              [description]
         * @return {[type]}                       [description]
         */
        selfish._actionHelper = function(element, aniJSParsedSentence, action) {
            var defaultValue = action || '',
                executeFunction;
            if(selfish.Util.beArray(defaultValue)) {
                executeFunction = selfish._callbackHelper(element, aniJSParsedSentence, defaultValue[0]);
                if(executeFunction) {
                    defaultValue[0] = executeFunction;
                } else {
                    defaultValue = defaultValue.join(' ');
                }

            }
            return defaultValue;
        };

        /**
         * Helper for before and after helpers refactoring
         * @method _callbackHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @param {} callbackFunction
         * @return defaultValue
         */
        selfish._callbackHelper = function(element, aniJSParsedSentence, callbackFunction) {
            var defaultValue = callbackFunction || '',
                helper = selfish._helperHelper(aniJSParsedSentence);

            if (defaultValue) {
                if (!selfish.Util.isFunction(defaultValue)) {
                    var helperCollection = selfish._helperCollection,
                        helperInstance = helperCollection[helper];

                    if (helperInstance && selfish.Util.isFunction(helperInstance[defaultValue])) {
                        defaultValue = helperInstance[defaultValue];
                    } else {
                        defaultValue = false;
                    }
                }
            }

            return defaultValue;
        };

        /**
         * Helper to setup the helper of the animation
         * @method _helperHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._helperHelper = function(aniJSParsedSentence) {
            var defaultValue = aniJSParsedSentence.helper || selfish._helperDefaultIndex;
            return defaultValue;
        };

        /**
         * Helper to setup the notifier
         * @method _notifierHelper
         * @param {} eventTargetDefinition
         * @return defaultValue
         */
        selfish._notifierHelper = function(eventTargetDefinition) {
            var defaultValue = [],
                notifierCollection = AniJS.notifierCollection;

            if (eventTargetDefinition) {
                //{id: notifierID, value:notifierObject}
                if (eventTargetDefinition.id && AniJS.EventSystem.isEventTarget(eventTargetDefinition.value)) {
                    //TODO: In the near future could be an object list
                    defaultValue.push(eventTargetDefinition.value);

                    AniJS.registerNotifier(eventTargetDefinition);
                } else if (eventTargetDefinition.split) {
                    //Picar por signo de peso y obtener la lista de id de events Notifiers
                    notifierIDList = eventTargetDefinition.split('$');
                    var size = notifierIDList.length,
                        i = 1,
                        notifierID;

                    for (i; i < size; i++) {
                        notifierID = notifierIDList[i];
                        if (notifierID && notifierID !== ' ') {
                            //limpiarle los espacios alante y atras (trim)
                            notifierID = notifierID.trim();

                            //TODO: Big Refactoring here
                            var value = AniJS.getNotifier(notifierID);
                            if (!value) {
                                value = AniJS.EventSystem.createEventTarget();
                                AniJS.registerNotifier({
                                    id: notifierID,
                                    value: value
                                });
                            }
                            defaultValue.push(value);
                        }
                    }
                }
            }

            return defaultValue;
        };

        selfish._paramsHelper = function(paramsArray){
            var arr = [],
                i = paramsArray.length;
            while(i-- > 1) arr[i - 1] = paramsArray[i];
            return arr;
        };

        /**
         * Parse an String Declaration
         * @method _getParsedAniJSSentenceCollection
         * @param {} stringDeclaration
         * @return CallExpression
         */
        selfish._getParsedAniJSSentenceCollection = function(stringDeclaration) {
            return selfish.Parser.parse(stringDeclaration);
        };

        /**
         * Select all DOM nodes that have a AniJS declaration
         * @method _findAniJSNodeCollection
         * @param {} rootDOMTravelScope
         * @return CallExpression
         */
        selfish._findAniJSNodeCollection = function(rootDOMTravelScope) {
            //IMPROVE: Might a configuration option
            var aniJSDataTagName = '[' + ANIJS_DATATAG_NAME + ']';
            return rootDOMTravelScope.querySelectorAll(aniJSDataTagName);
        };

        /**
         * Return the correct AnimationEnd Prefix according to the current browser
         * @method _animationEndPrefix
         * @return
         */
        selfish._animationEndPrefix = function() {
            var endPrefixBrowserDetectionIndex = selfish._endPrefixBrowserDetectionIndex(),
                animationEndBrowserPrefix = [ANIMATION_END, 'oAnimationEnd', ANIMATION_END, 'webkitAnimationEnd'];

            return animationEndBrowserPrefix[endPrefixBrowserDetectionIndex];
        };

        /**
         * Return the correct TransitionEnd Prefix according to the current browser
         * @method _transitionEndPrefix
         * @return
         */
        selfish._transitionEndPrefix = function() {
            var endPrefixBrowserDetectionIndex = selfish._endPrefixBrowserDetectionIndex(),
                transitionEndBrowserPrefix = [TRANSITION_END, 'oTransitionEnd', TRANSITION_END, 'webkitTransitionEnd'];

            return transitionEndBrowserPrefix[endPrefixBrowserDetectionIndex];
        };

        /**
         * Return the correct Transition and  Animation End Prefix helper according to the current browser
         * @method _transitionEndPrefix
         * @return index of the prefix acording to the browser
         */
        selfish._endPrefixBrowserDetectionIndex = function() {
            //TODO: Delete de element after create this
            var el = document.createElement('fe'),
                ANIM = 'Animation',
                animationBrowserDetection = ['animation', 'O'+ANIM, 'Moz'+ANIM, 'webkit'+ANIM];

            for (var i = 0; i < animationBrowserDetection.length; i++) {
                if (el.style[animationBrowserDetection[i]] !== undefined) {
                    return i;
                }
            }
        };

        /////////////////////////////////////////////////////////
        // Private SubModules
        /////////////////////////////////////////////////////////

        /**
         * Encapsulate the animation Context
         * @class animationContext
         * @author @dariel_noel
         */
        AniJS.AnimationContext = (function(config) {

            //TODO: Module aproach here
            var animationContextInstance = this;

            /**
             * Class constructor
             * @method init
             * @param {} config
             * @return
             */
            animationContextInstance.init = function(config) {

                //TODO: Valorar la idea de usar prototype por performance reasons
                //ATTRS
                animationContextInstance.behaviorTargetList = config.behaviorTargetList || [];

                animationContextInstance.nodeHelper = config.nodeHelper;

                animationContextInstance.animationEndEvent = config.animationEndEvent;

                animationContextInstance.behavior = config.behavior;

                animationContextInstance.after = config.after;

                animationContextInstance.eventSystem = config.eventSystem;

                animationContextInstance.eventTarget = config.eventTarget;

                animationContextInstance.afterFunctionName = config.afterFunctionName;

                animationContextInstance.dataAniJSOwner = config.dataAniJSOwner;

                animationContextInstance.listener = config.listener;

                animationContextInstance.event = config.event;
                animationContextInstance.before = config.before;
            };

            /**
             * Custom AniJS animation behavior
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-03
             * @param  {[type]}   target   [description]
             * @param  {[type]}   behavior [description]
             * @return {[type]}            [description]
             */
            animationContextInstance.doDefaultAction = function(target, behavior){
                var instance = animationContextInstance,
                    nodeHelper = instance.nodeHelper,
                    animationEndEvent = instance.animationEndEvent,
                    after = instance.after,
                    afterFunctionName = instance.afterFunctionName,
                    lastBehavior;

                //create event
                instance.eventSystem.addEventListenerHelper(target, animationEndEvent, function(e) {
                    e.stopPropagation();
                    //remove event
                    instance.eventSystem.removeEventListenerHelper(e.target, e.type, arguments.callee);
                    if(after){
                        if(selfish.Util.isFunction(after)){
                            after(e, animationContextInstance);
                        } else if(selfish.Util.beArray(after)) {
                            after[0](e, animationContextInstance, selfish._paramsHelper(after));
                        }
                    }
                });
                // Backguard compatibility
                if (afterFunctionName !== "holdAnimClass" && afterFunctionName !== "$holdAnimClass") {
                    lastBehavior = target._ajLastBehavior;
                    if(lastBehavior){
                        // removing the animation by default if there are not hold animClass
                        nodeHelper.removeClass(target, lastBehavior);
                    }
                    target._ajLastBehavior = behavior;
                }
                // Trigger a reflow in between removing and adding the class name.
                // http://css-tricks.com/restart-css-animation/
                target.offsetWidth = target.offsetWidth;
                nodeHelper.addClass(target, behavior);
            };

            /**
             * Allows to use a custom helpers function via do definitions
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-03
             * @param  {[type]}   target   [description]
             * @param  {[type]}   behavior [description]
             * @return {[type]}            [description]
             */
            animationContextInstance.doFunctionAction = function(target, behavior){
                var instance = animationContextInstance,
                    after = instance.after,
                    e = {target:target};
                behavior[0](e, animationContextInstance, selfish._paramsHelper(behavior));
                if(selfish.Util.isFunction(after)){
                    after(e, animationContextInstance);
                } else {
                    if(selfish.Util.beArray(after)) {
                        after[0](e, animationContextInstance, selfish._paramsHelper(after));
                    }
                }
            };

            /**
             * Create an animation context instance for every behavior target list
             * and run it
             * @method run
             * @return
             */
            animationContextInstance.runAll = function() {
                var instance = animationContextInstance,
                    behaviorTargetList = instance.behaviorTargetList,
                    behaviorTargetListSize = behaviorTargetList.length,
                    behavior = instance.behavior,
                    j = 0,
                    before = instance.before,
                    simpleAnimationContextInstance,
                    event = animationContextInstance.event,
                    animationContextConfig;

                for (j; j < behaviorTargetListSize; j++) {

                    animationContextConfig = {
                        behaviorTargetList: [behaviorTargetList[j]],
                        nodeHelper: animationContextInstance.nodeHelper,
                        animationEndEvent: animationContextInstance.animationEndEvent,
                        behavior: animationContextInstance.behavior,
                        after: animationContextInstance.after,
                        eventSystem: animationContextInstance.eventSystem,
                        eventTarget: animationContextInstance.eventTarget,
                        afterFunctionName: animationContextInstance.afterFunctionName,
                        dataAniJSOwner: animationContextInstance.dataAniJSOwner,
                        listener: animationContextInstance.listener,
                        event: event
                        //TODO: eventSystem should be called directly
                    };

                    simpleAnimationContextInstance = new AniJS.AnimationContext(animationContextConfig);
                    if (before) {
                        if(selfish.Util.isFunction(before)) {
                            before(event, simpleAnimationContextInstance);
                        } else if(selfish.Util.beArray(before)) {
                            before[0](event, simpleAnimationContextInstance, selfish._paramsHelper(before));
                        }
                    } else {
                        simpleAnimationContextInstance.run();
                    }
                }
            };
            /**
             * Execute an animation context instance
             * @method run
             * @return
             */
            animationContextInstance.run = function() {
                var instance = animationContextInstance,
                    behavior = instance.behavior,
                    behaviorTargetListItem = instance.behaviorTargetList[0];

                animationContextInstance.hasRunned = 1;
                if(selfish.Util.beArray(behavior)){
                    instance
                        .doFunctionAction(behaviorTargetListItem, behavior);
                } else{
                    instance
                        .doDefaultAction(behaviorTargetListItem, behavior);
                }
            };

            animationContextInstance.init(config);
        });

        /**
         * Encapsulate the AnimJS sintax parser
         * @class Parser
         * @author @dariel_noel
         */
        selfish.Parser = {

            /**
             * Parse a aniJSDeclaration
             * @method parse
             * @param {} aniJSDeclaration
             * @return CallExpression
             */
            parse: function(aniJSDeclaration) {
                return this.parseDeclaration(aniJSDeclaration);
            },

            /**
             * Declaration parse
             *  Sintax: Declaration -> Sentence; | *
             *  Example: SentenceA; SentenceB
             * @method _parseDeclaration
             * @param {} declaration
             * @return parsedDeclaration
             */
            parseDeclaration: function(declaration) {
                var parsedDeclaration = [],
                    sentenceCollection,
                    parsedSentence;

                sentenceCollection = declaration.split(';');

                var size = sentenceCollection.length,
                    i = 0;

                for (i; i < size; i++) {
                    parsedSentence = this.parseSentence(sentenceCollection[i]);
                    parsedDeclaration.push(parsedSentence);
                }

                return parsedDeclaration;
            },

            /**
             * Sentence Parse
             *  Sintax: Sentence -> if, on, do, to, after, helper
             *  Example: "if: DOMContentLoaded, on: document, do:flip, to: .animatecss, after: testcallback"
             *  note: The order it's not important
             * @method _parseSentence
             * @param {} sentence
             * @return parsedSentence
             */
            parseSentence: function(sentence) {
                var parsedSentence = {},
                    definitionCollection,
                    parsedDefinition;

                definitionCollection = sentence.split(',');

                var size = definitionCollection.length,
                    i = 0;

                for (i; i < size; i++) {
                    parsedDefinition = this.parseDefinition(definitionCollection[i]);
                    parsedSentence[parsedDefinition.key] = parsedDefinition.value;
                }
                return parsedSentence;
            },

            /**
             * Parse definition
             *  Sintax: Definition -> if | on | do | to | after | helper
             *  Example: "if: DOMContentLoaded, on: document, do:flip, to: .animatecss,  after: testcallback"
             * @method _parseDefinition
             * @param {} definition
             * @return parsedDefinition
             */
            parseDefinition: function(definition) {
                var parsedDefinition = {},
                    definitionBody,
                    definitionKey,
                    definitionValue,
                    EVENT_KEY = 'event',
                    EVENT_TARGET_KEY = 'eventTarget',
                    BEHAVIOR_KEY = ['behavior', 'after', 'before', 'behaviorTarget'];

                //Performance reasons
                definitionBody = definition.split(':');
                if (definitionBody.length > 1) {
                    definitionKey = definitionBody[0].trim();
                    //CSS3 selectors support
                    if(definitionBody.length > 2){
                        definitionValue = definitionBody.slice(1);
                        definitionValue = definitionValue.join(':');
                        definitionValue = definitionValue.trim();
                    } else {
                        definitionValue = definitionBody[1].trim();
                    }
                    parsedDefinition.value = definitionValue;
                    //Change by reserved words
                    if (definitionKey === EVENT_RESERVED_WORD) {
                        definitionKey = EVENT_KEY;
                    } else if (definitionKey === EVENT_TARGET_RESERVED_WORD) {
                        definitionKey = EVENT_TARGET_KEY;
                    } else {
                        for (var i = BEHAVIOR_RESERVED_WORD.length - 1; i >= 0; i--) {
                              if(definitionKey === BEHAVIOR_RESERVED_WORD[i]) {
                                definitionKey = BEHAVIOR_KEY[i];
                                /**
                                 * TODO: This code is deprecated for next version
                                 */
                                if((definitionKey === 'after' || definitionKey === 'before') && definitionValue[0]!== '$') {
                                    definitionValue = '$' + definitionValue;
                                }
                                definitionValue = this.parseDoDefinition(definitionValue);
                              }
                        }
                    }
                    parsedDefinition.key = definitionKey;
                    parsedDefinition.value = definitionValue;
                }

                return parsedDefinition;
            },

            /**
             * Allow to parse do definitions
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-03
             * @param  {[type]}   doDefinition [description]
             */
            parseDoDefinition: function(doDefinition) {
                var reg = /^\$(\w+)\s*/g,
                    regMatch = reg.exec(doDefinition),
                    functionName = "",
                    parametersArray = [], it = 1;

                if(regMatch !== null) {
                    functionName = regMatch[1];
                    doDefinitionArray = doDefinition.split(regMatch[0])[1];
                    doDefinitionArray = doDefinitionArray !== null ? doDefinitionArray.split(PARAMS_SEPARATOR) : [];
                    doDefinition = [];
                    doDefinition[0] = functionName;
                    for (var i = 0; i < doDefinitionArray.length; i++) {
                        if(doDefinitionArray[i] !== "")
                            doDefinition[it++] = doDefinitionArray[i].trim();
                    }
                    return doDefinition;
                }
                return doDefinition;
            }
        };

        /**
         * Helper to DOM manipulation
         * @class Parser
         * @author @dariel_noel
         */
        selfish.NodeHelper = {

            /**
             * Add some classes to a node
             * @method addClass
             * @param {} elem
             * @param {} string
             * @return
             */
            addClass: function(elem, string) {
                if (!(string instanceof Array)) {
                    string = string.split(' ');
                }
                for (var i = 0, len = string.length; i < len; ++i) {
                    if (string[i] && !new RegExp(REGEX_BEGIN + string[i] + REGEX_END).test(elem.className)) {
                        elem.className = (elem.className === "") ?  string[i] : elem.className.trim() + ' ' + string[i];
                    }
                }
            },

            /**
             * Remove class of some DOM element
             * @method removeClass
             * @param {} elem
             * @param {} string
             * @return
             */
            removeClass: function(elem, string) {
                if (!(string instanceof Array)) {
                    string = string.split(' ');
                }
                for (var i = 0, len = string.length; i < len; ++i) {
                    elem.className = elem.className.replace(new RegExp(REGEX_BEGIN + string[i] + REGEX_END), ' ').trim();
                }
            },

            /**
             * Test if the nested element has the supply class
             * @method hasClass
             * @param {} elem
             * @param {} string
             * @return LogicalExpression
             */
            hasClass: function(elem, string) {
                return string && new RegExp(REGEX_BEGIN + string + REGEX_END).test(elem.className);
            }
        };

        /**
         * A kind of util functions
         * @class Util
         * @author @dariel_noel
         */
        selfish.Util = {

            /**
             * Thanks a lot to underscore guys
             * @method isFunction
             * @param {} obj
             * @return UnaryExpression
             */
            isFunction: function(obj) {
                return !!(obj && obj.constructor && obj.call && obj.apply);
            },
            /**
             * Test if some object is an array
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-09
             * @return {Boolean}  [description]
             */
            beArray:function(object){
                return Array.isArray(object);
            }
        };

        /////////////////////////////////////////////////////////
        // Public SubModules
        /////////////////////////////////////////////////////////

        /**
         * Event System Interface (AniJS Current Implementation)
         * @class EventSystem
         * @author @dariel_noel
         */
        AniJS.EventSystem = {

            //ATTRS
            eventCollection: {},

            eventIdCounter: 0,

            /**
             * Return true if the element it's an event target object
             * @method isEventTarget
             * @param {} element
             * @return true or false
             */
            isEventTarget: function(element) {
                return (element.addEventListener) ? 1 : 0;
            },

            /**
             * Create new EventTarget element
             * @method createEventTarget
             * @return AniJS.EventTarget
             */
            createEventTarget: function() {
                return new AniJS.EventTarget();
            },

            /**
             * Put a listener in the object
             * @method addEventListenerHelper
             * @param {} eventTargetItem
             * @param {} event
             * @param {} listener
             * @param {} other
             * @return
             */
            addEventListenerHelper: function(eventTargetItem, event, listener, other) {
                eventTargetItem.addEventListener(event, listener, false);
            },

            /**
             * Put a listener of the object
             * @method removeEventListenerHelper
             * @param {} e
             * @param {} arguments
             * @return
             */
            removeEventListenerHelper: function(element, type, listener) {
                if(element){
                    element.removeEventListener(type, listener);
                }
            },


            /**
             * Purge all register elements handle
             * @method purgeAll
             * @return
             */
            purgeAll: function() {
                var instance = this,
                    eventCollection = instance.eventCollection,
                    eventCollectionKeyList = Object.keys(eventCollection),
                    size = eventCollectionKeyList.length,
                    i = 0,
                    key,
                    eventObject;

                for (i; i < size; i++) {
                    key = eventCollectionKeyList[i];
                    eventObject = eventCollection[key];

                    if (eventObject && eventObject.handleCollection && eventObject.handleCollection.length > 0) {
                        instance.purgeEventTarget(eventObject.handleCollection[0].element);
                    }

                    delete eventCollection[key];
                }
            },

            /**
             * Detach all AniJS subscriptions to the all nodes bellow this
             * @method purgeAllNodes
             * @param {} element
             * @return
             */
            purgeAllNodes: function(element){
                //Dame todos los que tengan data-anijs
                //a cada uno purgue
                var nodes = element.querySelectorAll("*");
                    size = nodes.length;
                for (var i = size - 1; i >= 0; i--) {
                    this.purgeEventTarget(nodes[i]);
                }
            },

            /**
             * Detach all AniJS subscriptions to this element
             * @method purgeEventTarget
             * @param {} element
             * @return
             */
            purgeEventTarget: function(element) {
                var instance = this,
                    aniJSEventID = element._aniJSEventID,
                    elementHandleCollection;
                if (aniJSEventID) {

                    //Se le quitan todos los eventos a los que este suscrito
                    elementHandleCollection = instance.eventCollection[aniJSEventID].handleCollection;

                    var size = elementHandleCollection.length,
                        i = 0,
                        item;

                    for (i; i < size; i++) {
                        item = elementHandleCollection[i];

                        //Para cada handle
                        instance.removeEventListenerHelper(element, item.eventType, item.listener);

                    }
                    instance.eventCollection[aniJSEventID] = element._aniJSEventID = null;
                    delete instance.eventCollection[aniJSEventID];
                    delete element._aniJSEventID;
                }
            },

            /**
             * Create a handle to remove the listener when purge it
             * @method registerEventHandle
             * @param {} element
             * @param {} eventType
             * @param {} listener
             * @return
             */
            registerEventHandle: function(element, eventType, listener) {
                var instance = this,
                    aniJSEventID = element._aniJSEventID,
                    eventCollection = instance.eventCollection,
                    elementEventHandle = {
                        eventType: eventType,
                        listener: listener,
                        element: element
                    };

                if (aniJSEventID) {
                    eventCollection[aniJSEventID].handleCollection.push(elementEventHandle);
                } else {
                    var tempEventHandle = {
                        handleCollection: [elementEventHandle]
                    };

                    eventCollection[++instance.eventIdCounter] = tempEventHandle;
                    element._aniJSEventID = instance.eventIdCounter;
                }
            }

        };


        /**
         * Helper the custom EventTarget
         * Copyright (c) 2010 Nicholas C. Zakas. All rights reserved.
         * MIT License
         * http://www.nczonline.net/blog/2010/03/09/custom-events-in-javascript/
         * @class EventTarget
         */
        AniJS.EventTarget = function EventTarget() {
            this._listeners = {};
        };

        AniJS.EventTarget.prototype = {

            constructor: AniJS.EventTarget,

            /**
             * Registers the specified listener on the EventTarget it's called on
             * Similar to the native implementation
             * @method addEventListener
             * @param {} type
             * @param {} listener
             * @param {} other
             * @return
             */
            addEventListener: function(type, listener, other) {
                var instance = this;
                if (typeof instance._listeners[type] == "undefined") {
                    instance._listeners[type] = [];
                }

                instance._listeners[type].push(listener);
            },

            /**
             * Dispatches an Event at the specified EventTarget
             * Similar to the native implementation
             * @method dispatchEvent
             * @param {} event
             * @return
             */
            dispatchEvent: function(event) {
                var instance = this;
                if (typeof event == "string") {
                    event = {
                        type: event
                    };
                }
                if (!event.target) {
                    event.target = instance;
                }

                if (!event.type) { //falsy
                    throw new Error("Event object missing 'type' property.");
                }

                if (this._listeners[event.type] instanceof Array) {
                    var listeners = instance._listeners[event.type];

                    for (var i = 0, len = listeners.length; i < len; i++) {
                        listeners[i].call(instance, event);
                    }
                }
            },

            /**
             * Removes the event listener previously registered with EventTarget.addEventListener.
             * Similar to the native implementation
             * @method removeEventListener
             * @param {} type
             * @param {} listener
             * @return
             */
            removeEventListener: function(type, listener) {
                var instance = this;
                if (instance._listeners[type] instanceof Array) {
                    var listeners = instance._listeners[type];
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        if (listeners[i] === listener) {
                            listeners.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        };

        return AniJS;

    }(AniJS || {}));

    AniJS.init();
    AniJS.run();

    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    // AMD Support
    if (typeof define === "function" && define.amd) {
        define("anijs", [], function() {
            return AniJS;
        });
    }
    if (typeof noGlobal == typeof undefined) {
        window.AniJS = AniJS;
    }

    return AniJS;
});

/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(root, factory) {
    "use strict";
    if (typeof module == "object" && typeof module.exports == "object") {
        module.exports = root.document ?
            factory(root, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("AniJS-RWWD");
                }
                return factory(w);
        };
    } else {
        factory(root);
    }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {


    /**
     * AniJS is library for write declarative animations in your static html documents
     * @class AniJSit
     * @constructor init
     * @author @dariel_noel
     */
    var AniJS = (function(AniJS) {

        //Shorthands
        var ANIJS_DATATAG_NAME = 'data-anijs',
            DEFAULT = 'default',
            BODY = 'body',
            PARAMS_SEPARATOR = '|',
            MULTIPLE_CLASS_SEPARATOR = '$',
            EVENT_RESERVED_WORD = 'if',
            EVENT_TARGET_RESERVED_WORD = 'on',
            BEHAVIOR_RESERVED_WORD = ['do', 'after', 'before', 'to'],
            BEHAVIOR_TARGET_RESERVED_WORD = 'to',
            REGEX_BEGIN = '(\\s+|^)',
            REGEX_END = '(\\s+|$)',
            ANIMATION_END = 'animationend',
            TRANSITION_END = 'transitionend',
            TARGET = 'target';

        /////////////////////////////////////////////////////////
        // Public API
        /////////////////////////////////////////////////////////

        AniJS = {

            rootDOMTravelScope: {},

            notifierCollection: {},

            /**
             * Initializer Function
             * @method init
             * @return
             */
            init: function() {

                //ATTRS inicialization
                selfish._helperCollection = {};

                var defaultHelper = selfish._createDefaultHelper();

                //Registering an empty helper
                AniJS.registerHelper(DEFAULT, defaultHelper);

                //Default Helper Index
                selfish._helperDefaultIndex = DEFAULT;

                AniJS.rootDOMTravelScope = document;

                //Initialize the Parser Object
                AniJS.Parser = selfish.Parser;

                //AnimationEnd Correct Prefix Setup
                selfish._animationEndEvent = selfish._animationEndPrefix();

                //Add this class names when anim
                selfish._classNamesWhenAnim = '';
            },

            /**
             * You can use these to change the scope to run AniJS
             * @method setDOMRootTravelScope
             * @param {} selector
             * @return
             */
            setDOMRootTravelScope: function(selector) {
                var rootDOMTravelScope,
                    domDocument = document;
                try {
                    if (selector === 'document') {
                        rootDOMTravelScope = domDocument;
                    } else {
                        rootDOMTravelScope = domDocument.querySelector(selector);
                        if (!rootDOMTravelScope) {
                            rootDOMTravelScope = domDocument;
                        }
                    }

                } catch (e) {
                    rootDOMTravelScope = domDocument;
                }
                AniJS.rootDOMTravelScope = rootDOMTravelScope;
            },

            /**
             * Parse Declarations and setup Anim in a founded elements
             * @method run
             * @return
             */
            run: function() {
                var aniJSNodeCollection = [],
                    aniJSParsedSentenceCollection = {};

                //Clear all node listener
                AniJS.purgeAll();

                AniJS.notifierCollection = {};

                aniJSNodeCollection = selfish._findAniJSNodeCollection(AniJS.rootDOMTravelScope);

                var size = aniJSNodeCollection.length,
                    i = 0,
                    item;

                for (i; i < size; i++) {
                    item = aniJSNodeCollection[i];

                    //IMPROVE: The datatag name migth come from configuration
                    aniJSParsedSentenceCollection = selfish._getParsedAniJSSentenceCollection(item.getAttribute(ANIJS_DATATAG_NAME));

                    //Le seteo su animacion
                    selfish._setupElementAnim(item, aniJSParsedSentenceCollection);
                }

                //We can use this for supply the window load and DomContentLoaded in some context
                var aniJSEventsNotifier = AniJS.getNotifier('AniJSNotifier');
                if(aniJSEventsNotifier){
                    aniJSEventsNotifier.dispatchEvent('onRunFinished');
                }
            },

            /**
             * Create an animation from a aniJSParsedSentenceCollection
             * @method createAnimation
             * @param {} aniJSParsedSentenceCollection
             * @param {} element
             * @return
             */
            createAnimation: function(aniJSParsedSentenceCollection, element) {
                var nodeElement = element || '';

                //BEAUTIFY: The params order migth be the same
                selfish._setupElementAnim(nodeElement, aniJSParsedSentenceCollection);
            },

            /**
             * Return a Helper by ID, you can use this to attach callback to the Helper
             * @method getHelper
             * @param {} helperID
             * @return LogicalExpression
             */
            getHelper: function(helperID) {
                var helperCollection = selfish._helperCollection;
                return helperCollection[helperID] || helperCollection[DEFAULT];
            },

            /**
             * A helper it's a callback function container
             * using this function you can register your custom Helper
             * @method registerHelper
             * @param {} helperName
             * @param {} helperInstance
             * @return
             */
            registerHelper: function(helperName, helperInstance) {
                selfish._helperCollection[helperName] = helperInstance;
            },

            /**
             * Purge a NodeList By Selector
             * @method purge
             * @param {} selector
             * @return
             */
            purge: function(selector) {
                //TODO: Search a regular expression for test a valid CSS selector
                if (selector && selector !== '' && selector !== ' ') {
                    var purgeNodeCollection = document.querySelectorAll(selector),
                        size = purgeNodeCollection.length,
                        i = 0;

                    for (i; i < size; i++) {
                        AniJS.EventSystem.purgeEventTarget(purgeNodeCollection[i]);
                    }
                }
            },

            /**
             * Purge all register elements handle
             * you can use this when you run AniJS again
             * @method purgeAll
             * @return
             */
            purgeAll: function() {
                AniJS.EventSystem.purgeAll();
            },

            /**
             * Remove all listener from an element
             * @method purgeEventTarget
             * @param {} element
             * @return
             */
            purgeEventTarget: function(element) {
                AniJS.EventSystem.purgeEventTarget(element);
            },

            /**
             * Add default class names while Anim
             * @method setClassNamesWhenAnim
             * @param {} defaultClasses
             * @return
             */
            setClassNamesWhenAnim: function(defaultClasses) {
                selfish._classNamesWhenAnim = ' ' + defaultClasses;
            },

            /**
             * Create an EventTarget
             * @method createNotifier
             * @return EventTarget
             */
            createNotifier: function() {
                return AniJS.EventSystem.createEventTarget();
            },

            /**
             * Put an event Notifier in the notifierCollection
             * @method registerNotifier
             * @param {} notifier
             * @return Literal
             */
            registerNotifier: function(notifier) {
                var notifierCollection = AniJS.notifierCollection;

                //TODO: Optimize lookups here
                if (notifier.id && notifier.value && AniJS.EventSystem.isEventTarget(notifier.value)) {
                    notifierCollection[notifier.id] = notifier.value;
                    return 1;
                }

                return '';
            },

            /**
             * Return an notifier instance
             * @method getNotifier
             * @param {} notifierID
             * @return notifier
             */
            getNotifier: function(notifierID) {
                return AniJS.notifierCollection[notifierID];
            }

        };

        /////////////////////////////////////////////////////////
        // Private Methods an Vars
        /////////////////////////////////////////////////////////

        var selfish = {

        };

        /**
         * Description
         * @method _createDefaultHelper
         * @return defaultHelper
         */
        selfish._createDefaultHelper = function() {
            //TODO: Why default helper here, migth be directly in the public API
            var defaultHelper = {
                /**
                 * Remove the animation class added when animation is created
                 * @method removeAnim
                 * @param {} e
                 * @param {} animationContext
                 * @return
                 */
                removeAnim: function(e, animationContext) {
                    if(e.target && e.type){
                      animationContext.nodeHelper.removeClass(e.target, animationContext.behavior);
                    }
                },
                /**
                 * Holds the animation class added when animation is created
                 * @method holdAnimClass
                 * @param {} e
                 * @param {} animationContext
                 * @return
                 */
                holdAnimClass: function(e, animationContext) {
                },

                fireOnce: function(e, animationContext) {
                    animationContext.eventSystem.removeEventListenerHelper(animationContext.eventTarget, animationContext.event.type, animationContext.listener);
                },

                /**
                 * Fire custom event
                 *
                 * Examples:
                 *
                 *  Fire dummyEvent event of customNotifier
                 *
                 *  if: click, do: $addClass fadeIn animated, to: #container, after: emit customNotifier.dummyEvent
                 *  if: dummyEvent, on: $customNotifier, do: $addClass hidden,  to: $children #container | div
                 *
                 *
                 * @author Yolier Galan Tasse <gallegogt@gmail.com>
                 * @since  2014-09-20
                 * @param  {object}   e          The event handler
                 * @param  {object}   ctx        AniJS Animation Context Object
                 * @param  {[string]} params     [description]
                 */
                emit: function(e, ctx, params) {
                    var cevent = params[0] || null,
                        notifier = "";
                    if(cevent !== null) {
                        cevent = cevent.split('.');
                        if(cevent.length > 1) {
                            notifier = cevent[0];
                            cevent = cevent[1];
                        } else {
                            notifier = "";
                            cevent = cevent[0];
                        }
                        var customNotifier = AniJS.getNotifier(notifier) || null;
                        if(customNotifier !== null)
                            customNotifier.dispatchEvent(cevent);
                    }
                    //Run the animation
                    if(!ctx.hasRunned){
                        ctx.run();
                    }
                }
            };

            return defaultHelper;
        };

        /**
         * Create a Parser Instance
         * @method _createParser
         * @return Parser
         */
        selfish._createParser = function() {
            //TODO: The Parser could be an static class
            return new Parser();
        };

        /**
         * Setup the animation of the some element
         * @method _setupElementAnim
         * @param {} element
         * @param {} aniJSParsedSentenceCollection
         * @return
         */
        selfish._setupElementAnim = function(element, aniJSParsedSentenceCollection) {
            var size = aniJSParsedSentenceCollection.length,
                i = 0,
                item,
                before,
                after,
                behavior;

            for (i; i < size; i++) {
                item = aniJSParsedSentenceCollection[i];
                after = item.after;
                before = item.before;
                behavior = item.behavior;

                if(after){
                    item.after = selfish.Parser.parseDoDefinition(after);
                }
                if(before){
                    item.before = selfish.Parser.parseDoDefinition(before);
                }
                if(behavior){
                    item.behavior = selfish.Parser.parseDoDefinition(behavior);
                }
                selfish._setupElementSentenceAnim(element, item);
            }
        };

        /**
         * Setup the element animation from a AniJS Sentence
         * @method _setupElementSentenceAnim
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return
         */
        selfish._setupElementSentenceAnim = function(element, aniJSParsedSentence) {
            //TODO: If the user use animationend or transitionend names to custom events the eventdispach will be not executed
            var event = selfish._eventHelper(aniJSParsedSentence),
                eventTargetList = selfish._eventTargetHelper(element, aniJSParsedSentence),
                afterFunctionName;

            if(aniJSParsedSentence.after && selfish.Util.beArray(aniJSParsedSentence.after)){
                afterFunctionName =  aniJSParsedSentence.after[0];
            }

            //Es obligatorio definir de eventTarget ATTR
            if (event !== '') {
                var size = eventTargetList.length,
                    i = 0,
                    eventTargetItem;
                for (i; i < size; i++) {
                    eventTargetItem = eventTargetList[i];
                    if (AniJS.EventSystem.isEventTarget(eventTargetItem)) {
                        var listener = function(event) {

                            //Si cambia algun parametro dinamicamente entonces hay que enterarse
                            var behaviorTargetList = selfish._behaviorTargetHelper(element, aniJSParsedSentence, event),
                                behavior = selfish._behaviorHelper(aniJSParsedSentence),
                                before = selfish._beforeHelper(element, aniJSParsedSentence),
                                after = selfish._afterHelper(element, aniJSParsedSentence);
                            if (selfish._classNamesWhenAnim !== '') {
                                if(!selfish.Util.beArray(behavior))
                                    behavior += selfish._classNamesWhenAnim;
                            }
                            //Creo un nuevo animation context
                            var animationContextConfig = {
                                behaviorTargetList: behaviorTargetList,
                                nodeHelper: selfish.NodeHelper,
                                animationEndEvent: selfish._animationEndEvent,
                                behavior: behavior,
                                after: after,
                                eventSystem: AniJS.EventSystem,
                                eventTarget: event.currentTarget,
                                afterFunctionName: afterFunctionName,
                                dataAniJSOwner: element,
                                listener: listener,
                                event: event,
                                before: before
                                //TODO: eventSystem should be called directly
                            },

                            animationContextInstance = new AniJS.AnimationContext(animationContextConfig);

                            animationContextInstance.runAll(animationContextConfig);
                        };

                        //TODO: Improve lookup here AniJS.EventSystem
                        AniJS.EventSystem.addEventListenerHelper(eventTargetItem, event, listener, false);

                        //Register event to feature handle
                        AniJS.EventSystem.registerEventHandle(eventTargetItem, event, listener);
                    }
                }
            }
        };

        /**
         * Helper to setup the Event that trigger the animation from declaration
         * https://developer.mozilla.org/en-US/docs/Web/Reference/Events
         * http://www.w3schools.com/tags/ref_eventattributes.asp
         * @method _eventHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return event
         */
        selfish._eventHelper = function(aniJSParsedSentence) {
            var defaultValue = '',
                event = aniJSParsedSentence.event || defaultValue;

            //TODO: Improve to reduce this ugly logic here
            if (event === ANIMATION_END) {
                event = selfish._animationEndPrefix();
            } else if (event === TRANSITION_END) {
                event = selfish._transitionEndPrefix();
            }

            return event;
        };

        /**
         * Helper to setup the Place from listen the trigger event of the animation
         * If is not specified one place, se asume que es himself
         * Take in account that where it's just a selector
         * @method _eventTargetHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return eventTargetList
         */
        selfish._eventTargetHelper = function(element, aniJSParsedSentence) {
            var defaultValue = element,
                eventTargetList = [defaultValue],
                rootDOMTravelScope = AniJS.rootDOMTravelScope,
                notifierList;

            //TODO: We could add other non direct DOM Objects
            if (aniJSParsedSentence.eventTarget) {

                notifierList = selfish._notifierHelper(aniJSParsedSentence.eventTarget);

                if (notifierList.length > 0) {
                    eventTargetList = notifierList;
                } else if (aniJSParsedSentence.eventTarget === 'document') {
                    eventTargetList = [document];
                } else if (aniJSParsedSentence.eventTarget === 'window') {
                    eventTargetList = [window];
                } else if (aniJSParsedSentence.eventTarget.split) {
                    try {
                        eventTargetList = rootDOMTravelScope.querySelectorAll(aniJSParsedSentence.eventTarget);
                    } catch (e) {
                        console.log('Ugly Selector Here');
                        eventTargetList = [];
                    }
                }
            }
            //It's not a nodeList any more
            return eventTargetList;
        };

        /**
         * Helper to setup the Node can be animated
         * @method _behaviorTargetHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return behaviorTargetNodeList
         */
        selfish._behaviorTargetHelper = function(element, aniJSParsedSentence, event) {
            var defaultValue = element,
                behaviorTargetNodeList = [defaultValue],
                rootDOMTravelScope = AniJS.rootDOMTravelScope,
                behaviorTarget = aniJSParsedSentence.behaviorTarget;

            if (behaviorTarget) {
                if(!selfish.Util.beArray(behaviorTarget)){
                    if(behaviorTarget === TARGET && event.currentTarget){
                        behaviorTargetNodeList = [event.currentTarget];
                    } else{
                        //Expression regular remplazar caracteres $ por comas
                        //TODO: Estudiar si este caracter no esta agarrado
                        behaviorTarget = behaviorTarget.split(MULTIPLE_CLASS_SEPARATOR).join(',');
                        try {
                            behaviorTargetNodeList = rootDOMTravelScope.querySelectorAll(behaviorTarget);
                        } catch (e) {
                            behaviorTargetNodeList = [];
                        }
                    }
                } else{
                    var behaviorObject = this._actionHelper(element, aniJSParsedSentence, behaviorTarget);
                    if(behaviorObject && selfish.Util.isFunction(behaviorObject[0])){
                        behaviorTargetNodeList = behaviorObject[0]
                                                    (event,{dataAniJSOwner:element},
                                                    selfish._paramsHelper(behaviorObject));
                    }
                }
            }
            return behaviorTargetNodeList;
        };

        /**
         * Helper to setup the Animation type
         * @method _behaviorHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._behaviorHelper = function(aniJSParsedSentence) {
            return this._actionHelper({}, aniJSParsedSentence, aniJSParsedSentence.behavior);
        };

        /**
         * Helper to setup the after callback function
         * @method _afterHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._afterHelper = function(element, aniJSParsedSentence) {
            var defaultValue =  aniJSParsedSentence.after;
            // return defaultValue;
            if(!selfish.Util.beArray(defaultValue))
                return selfish._callbackHelper(element, aniJSParsedSentence, defaultValue);
            return this._actionHelper(element, aniJSParsedSentence, defaultValue);
        };

        /**
         * Helper to setup the after callback function
         * @method _afterHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._beforeHelper = function(element, aniJSParsedSentence) {
            var defaultValue =  aniJSParsedSentence.before;
            if(!selfish.Util.beArray(defaultValue))
                return selfish._callbackHelper(element, aniJSParsedSentence, defaultValue);
            return this._actionHelper(element, aniJSParsedSentence, defaultValue);
        };
        /**
         * The executed actions helper
         * @author Dariel Noel <darielnoel@gmail.com>
         * @since  2014-09-10
         * @param  {[type]}   element             [description]
         * @param  {[type]}   aniJSParsedSentence [description]
         * @param  {[type]}   action              [description]
         * @return {[type]}                       [description]
         */
        selfish._actionHelper = function(element, aniJSParsedSentence, action) {
            var defaultValue = action || '',
                executeFunction;
            if(selfish.Util.beArray(defaultValue)) {
                executeFunction = selfish._callbackHelper(element, aniJSParsedSentence, defaultValue[0]);
                if(executeFunction) {
                    defaultValue[0] = executeFunction;
                } else {
                    defaultValue = defaultValue.join(' ');
                }

            }
            return defaultValue;
        };

        /**
         * Helper for before and after helpers refactoring
         * @method _callbackHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @param {} callbackFunction
         * @return defaultValue
         */
        selfish._callbackHelper = function(element, aniJSParsedSentence, callbackFunction) {
            var defaultValue = callbackFunction || '',
                helper = selfish._helperHelper(aniJSParsedSentence);

            if (defaultValue) {
                if (!selfish.Util.isFunction(defaultValue)) {
                    var helperCollection = selfish._helperCollection,
                        helperInstance = helperCollection[helper];

                    if (helperInstance && selfish.Util.isFunction(helperInstance[defaultValue])) {
                        defaultValue = helperInstance[defaultValue];
                    } else {
                        defaultValue = false;
                    }
                }
            }

            return defaultValue;
        };

        /**
         * Helper to setup the helper of the animation
         * @method _helperHelper
         * @param {} element
         * @param {} aniJSParsedSentence
         * @return defaultValue
         */
        selfish._helperHelper = function(aniJSParsedSentence) {
            var defaultValue = aniJSParsedSentence.helper || selfish._helperDefaultIndex;
            return defaultValue;
        };

        /**
         * Helper to setup the notifier
         * @method _notifierHelper
         * @param {} eventTargetDefinition
         * @return defaultValue
         */
        selfish._notifierHelper = function(eventTargetDefinition) {
            var defaultValue = [],
                notifierCollection = AniJS.notifierCollection;

            if (eventTargetDefinition) {
                //{id: notifierID, value:notifierObject}
                if (eventTargetDefinition.id && AniJS.EventSystem.isEventTarget(eventTargetDefinition.value)) {
                    //TODO: In the near future could be an object list
                    defaultValue.push(eventTargetDefinition.value);

                    AniJS.registerNotifier(eventTargetDefinition);
                } else if (eventTargetDefinition.split) {
                    //Picar por signo de peso y obtener la lista de id de events Notifiers
                    notifierIDList = eventTargetDefinition.split('$');
                    var size = notifierIDList.length,
                        i = 1,
                        notifierID;

                    for (i; i < size; i++) {
                        notifierID = notifierIDList[i];
                        if (notifierID && notifierID !== ' ') {
                            //limpiarle los espacios alante y atras (trim)
                            notifierID = notifierID.trim();

                            //TODO: Big Refactoring here
                            var value = AniJS.getNotifier(notifierID);
                            if (!value) {
                                value = AniJS.EventSystem.createEventTarget();
                                AniJS.registerNotifier({
                                    id: notifierID,
                                    value: value
                                });
                            }
                            defaultValue.push(value);
                        }
                    }
                }
            }

            return defaultValue;
        };

        selfish._paramsHelper = function(paramsArray){
            var arr = [],
                i = paramsArray.length;
            while(i-- > 1) arr[i - 1] = paramsArray[i];
            return arr;
        };

        /**
         * Parse an String Declaration
         * @method _getParsedAniJSSentenceCollection
         * @param {} stringDeclaration
         * @return CallExpression
         */
        selfish._getParsedAniJSSentenceCollection = function(stringDeclaration) {
            return selfish.Parser.parse(stringDeclaration);
        };

        /**
         * Select all DOM nodes that have a AniJS declaration
         * @method _findAniJSNodeCollection
         * @param {} rootDOMTravelScope
         * @return CallExpression
         */
        selfish._findAniJSNodeCollection = function(rootDOMTravelScope) {
            //IMPROVE: Might a configuration option
            var aniJSDataTagName = '[' + ANIJS_DATATAG_NAME + ']';
            return rootDOMTravelScope.querySelectorAll(aniJSDataTagName);
        };

        /**
         * Return the correct AnimationEnd Prefix according to the current browser
         * @method _animationEndPrefix
         * @return
         */
        selfish._animationEndPrefix = function() {
            var endPrefixBrowserDetectionIndex = selfish._endPrefixBrowserDetectionIndex(),
                animationEndBrowserPrefix = [ANIMATION_END, 'oAnimationEnd', ANIMATION_END, 'webkitAnimationEnd'];

            return animationEndBrowserPrefix[endPrefixBrowserDetectionIndex];
        };

        /**
         * Return the correct TransitionEnd Prefix according to the current browser
         * @method _transitionEndPrefix
         * @return
         */
        selfish._transitionEndPrefix = function() {
            var endPrefixBrowserDetectionIndex = selfish._endPrefixBrowserDetectionIndex(),
                transitionEndBrowserPrefix = [TRANSITION_END, 'oTransitionEnd', TRANSITION_END, 'webkitTransitionEnd'];

            return transitionEndBrowserPrefix[endPrefixBrowserDetectionIndex];
        };

        /**
         * Return the correct Transition and  Animation End Prefix helper according to the current browser
         * @method _transitionEndPrefix
         * @return index of the prefix acording to the browser
         */
        selfish._endPrefixBrowserDetectionIndex = function() {
            //TODO: Delete de element after create this
            var el = document.createElement('fe'),
                ANIM = 'Animation',
                animationBrowserDetection = ['animation', 'O'+ANIM, 'Moz'+ANIM, 'webkit'+ANIM];

            for (var i = 0; i < animationBrowserDetection.length; i++) {
                if (el.style[animationBrowserDetection[i]] !== undefined) {
                    return i;
                }
            }
        };

        /////////////////////////////////////////////////////////
        // Private SubModules
        /////////////////////////////////////////////////////////

        /**
         * Encapsulate the animation Context
         * @class animationContext
         * @author @dariel_noel
         */
        AniJS.AnimationContext = (function(config) {

            //TODO: Module aproach here
            var animationContextInstance = this;

            /**
             * Class constructor
             * @method init
             * @param {} config
             * @return
             */
            animationContextInstance.init = function(config) {

                //TODO: Valorar la idea de usar prototype por performance reasons
                //ATTRS
                animationContextInstance.behaviorTargetList = config.behaviorTargetList || [];

                animationContextInstance.nodeHelper = config.nodeHelper;

                animationContextInstance.animationEndEvent = config.animationEndEvent;

                animationContextInstance.behavior = config.behavior;

                animationContextInstance.after = config.after;

                animationContextInstance.eventSystem = config.eventSystem;

                animationContextInstance.eventTarget = config.eventTarget;

                animationContextInstance.afterFunctionName = config.afterFunctionName;

                animationContextInstance.dataAniJSOwner = config.dataAniJSOwner;

                animationContextInstance.listener = config.listener;

                animationContextInstance.event = config.event;
                animationContextInstance.before = config.before;
            };

            /**
             * Custom AniJS animation behavior
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-03
             * @param  {[type]}   target   [description]
             * @param  {[type]}   behavior [description]
             * @return {[type]}            [description]
             */
            animationContextInstance.doDefaultAction = function(target, behavior){
                var instance = animationContextInstance,
                    nodeHelper = instance.nodeHelper,
                    animationEndEvent = instance.animationEndEvent,
                    after = instance.after,
                    afterFunctionName = instance.afterFunctionName,
                    lastBehavior;

                //create event
                instance.eventSystem.addEventListenerHelper(target, animationEndEvent, function(e) {
                    e.stopPropagation();
                    //remove event
                    instance.eventSystem.removeEventListenerHelper(e.target, e.type, arguments.callee);
                    if(after){
                        if(selfish.Util.isFunction(after)){
                            after(e, animationContextInstance);
                        } else if(selfish.Util.beArray(after)) {
                            after[0](e, animationContextInstance, selfish._paramsHelper(after));
                        }
                    }
                });
                // Backguard compatibility
                if (afterFunctionName !== "holdAnimClass" && afterFunctionName !== "$holdAnimClass") {
                    lastBehavior = target._ajLastBehavior;
                    if(lastBehavior){
                        // removing the animation by default if there are not hold animClass
                        nodeHelper.removeClass(target, lastBehavior);
                    }
                    target._ajLastBehavior = behavior;
                }
                // Trigger a reflow in between removing and adding the class name.
                // http://css-tricks.com/restart-css-animation/
                target.offsetWidth = target.offsetWidth;
                nodeHelper.addClass(target, behavior);
            };

            /**
             * Allows to use a custom helpers function via do definitions
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-03
             * @param  {[type]}   target   [description]
             * @param  {[type]}   behavior [description]
             * @return {[type]}            [description]
             */
            animationContextInstance.doFunctionAction = function(target, behavior){
                var instance = animationContextInstance,
                    after = instance.after,
                    e = {target:target};
                behavior[0](e, animationContextInstance, selfish._paramsHelper(behavior));
                if(selfish.Util.isFunction(after)){
                    after(e, animationContextInstance);
                } else {
                    if(selfish.Util.beArray(after)) {
                        after[0](e, animationContextInstance, selfish._paramsHelper(after));
                    }
                }
            };

            /**
             * Create an animation context instance for every behavior target list
             * and run it
             * @method run
             * @return
             */
            animationContextInstance.runAll = function() {
                var instance = animationContextInstance,
                    behaviorTargetList = instance.behaviorTargetList,
                    behaviorTargetListSize = behaviorTargetList.length,
                    behavior = instance.behavior,
                    j = 0,
                    before = instance.before,
                    simpleAnimationContextInstance,
                    event = animationContextInstance.event,
                    animationContextConfig;

                for (j; j < behaviorTargetListSize; j++) {

                    animationContextConfig = {
                        behaviorTargetList: [behaviorTargetList[j]],
                        nodeHelper: animationContextInstance.nodeHelper,
                        animationEndEvent: animationContextInstance.animationEndEvent,
                        behavior: animationContextInstance.behavior,
                        after: animationContextInstance.after,
                        eventSystem: animationContextInstance.eventSystem,
                        eventTarget: animationContextInstance.eventTarget,
                        afterFunctionName: animationContextInstance.afterFunctionName,
                        dataAniJSOwner: animationContextInstance.dataAniJSOwner,
                        listener: animationContextInstance.listener,
                        event: event
                        //TODO: eventSystem should be called directly
                    };

                    simpleAnimationContextInstance = new AniJS.AnimationContext(animationContextConfig);
                    if (before) {
                        if(selfish.Util.isFunction(before)) {
                            before(event, simpleAnimationContextInstance);
                        } else if(selfish.Util.beArray(before)) {
                            before[0](event, simpleAnimationContextInstance, selfish._paramsHelper(before));
                        }
                    } else {
                        simpleAnimationContextInstance.run();
                    }
                }
            };
            /**
             * Execute an animation context instance
             * @method run
             * @return
             */
            animationContextInstance.run = function() {
                var instance = animationContextInstance,
                    behavior = instance.behavior,
                    behaviorTargetListItem = instance.behaviorTargetList[0];

                animationContextInstance.hasRunned = 1;
                if(selfish.Util.beArray(behavior)){
                    instance
                        .doFunctionAction(behaviorTargetListItem, behavior);
                } else{
                    instance
                        .doDefaultAction(behaviorTargetListItem, behavior);
                }
            };

            animationContextInstance.init(config);
        });

        /**
         * Encapsulate the AnimJS sintax parser
         * @class Parser
         * @author @dariel_noel
         */
        selfish.Parser = {

            /**
             * Parse a aniJSDeclaration
             * @method parse
             * @param {} aniJSDeclaration
             * @return CallExpression
             */
            parse: function(aniJSDeclaration) {
                return this.parseDeclaration(aniJSDeclaration);
            },

            /**
             * Declaration parse
             *  Sintax: Declaration -> Sentence; | *
             *  Example: SentenceA; SentenceB
             * @method _parseDeclaration
             * @param {} declaration
             * @return parsedDeclaration
             */
            parseDeclaration: function(declaration) {
                var parsedDeclaration = [],
                    sentenceCollection,
                    parsedSentence;

                sentenceCollection = declaration.split(';');

                var size = sentenceCollection.length,
                    i = 0;

                for (i; i < size; i++) {
                    parsedSentence = this.parseSentence(sentenceCollection[i]);
                    parsedDeclaration.push(parsedSentence);
                }

                return parsedDeclaration;
            },

            /**
             * Sentence Parse
             *  Sintax: Sentence -> if, on, do, to, after, helper
             *  Example: "if: DOMContentLoaded, on: document, do:flip, to: .animatecss, after: testcallback"
             *  note: The order it's not important
             * @method _parseSentence
             * @param {} sentence
             * @return parsedSentence
             */
            parseSentence: function(sentence) {
                var parsedSentence = {},
                    definitionCollection,
                    parsedDefinition;

                definitionCollection = sentence.split(',');

                var size = definitionCollection.length,
                    i = 0;

                for (i; i < size; i++) {
                    parsedDefinition = this.parseDefinition(definitionCollection[i]);
                    parsedSentence[parsedDefinition.key] = parsedDefinition.value;
                }
                return parsedSentence;
            },

            /**
             * Parse definition
             *  Sintax: Definition -> if | on | do | to | after | helper
             *  Example: "if: DOMContentLoaded, on: document, do:flip, to: .animatecss,  after: testcallback"
             * @method _parseDefinition
             * @param {} definition
             * @return parsedDefinition
             */
            parseDefinition: function(definition) {
                var parsedDefinition = {},
                    definitionBody,
                    definitionKey,
                    definitionValue,
                    EVENT_KEY = 'event',
                    EVENT_TARGET_KEY = 'eventTarget',
                    BEHAVIOR_KEY = ['behavior', 'after', 'before', 'behaviorTarget'];

                //Performance reasons
                definitionBody = definition.split(':');
                if (definitionBody.length > 1) {
                    definitionKey = definitionBody[0].trim();
                    //CSS3 selectors support
                    if(definitionBody.length > 2){
                        definitionValue = definitionBody.slice(1);
                        definitionValue = definitionValue.join(':');
                        definitionValue = definitionValue.trim();
                    } else {
                        definitionValue = definitionBody[1].trim();
                    }
                    parsedDefinition.value = definitionValue;
                    //Change by reserved words
                    if (definitionKey === EVENT_RESERVED_WORD) {
                        definitionKey = EVENT_KEY;
                    } else if (definitionKey === EVENT_TARGET_RESERVED_WORD) {
                        definitionKey = EVENT_TARGET_KEY;
                    } else {
                        for (var i = BEHAVIOR_RESERVED_WORD.length - 1; i >= 0; i--) {
                              if(definitionKey === BEHAVIOR_RESERVED_WORD[i]) {
                                definitionKey = BEHAVIOR_KEY[i];
                                /**
                                 * TODO: This code is deprecated for next version
                                 */
                                if((definitionKey === 'after' || definitionKey === 'before') && definitionValue[0]!== '$') {
                                    definitionValue = '$' + definitionValue;
                                }
                                definitionValue = this.parseDoDefinition(definitionValue);
                              }
                        }
                    }
                    parsedDefinition.key = definitionKey;
                    parsedDefinition.value = definitionValue;
                }

                return parsedDefinition;
            },

            /**
             * Allow to parse do definitions
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-03
             * @param  {[type]}   doDefinition [description]
             */
            parseDoDefinition: function(doDefinition) {
                var reg = /^\$(\w+)\s*/g,
                    regMatch = reg.exec(doDefinition),
                    functionName = "",
                    parametersArray = [], it = 1;

                if(regMatch !== null) {
                    functionName = regMatch[1];
                    doDefinitionArray = doDefinition.split(regMatch[0])[1];
                    doDefinitionArray = doDefinitionArray !== null ? doDefinitionArray.split(PARAMS_SEPARATOR) : [];
                    doDefinition = [];
                    doDefinition[0] = functionName;
                    for (var i = 0; i < doDefinitionArray.length; i++) {
                        if(doDefinitionArray[i] !== "")
                            doDefinition[it++] = doDefinitionArray[i].trim();
                    }
                    return doDefinition;
                }
                return doDefinition;
            }
        };

        /**
         * Helper to DOM manipulation
         * @class Parser
         * @author @dariel_noel
         */
        selfish.NodeHelper = {

            /**
             * Add some classes to a node
             * @method addClass
             * @param {} elem
             * @param {} string
             * @return
             */
            addClass: function(elem, string) {
                if (!(string instanceof Array)) {
                    string = string.split(' ');
                }
                for (var i = 0, len = string.length; i < len; ++i) {
                    if (string[i] && !new RegExp(REGEX_BEGIN + string[i] + REGEX_END).test(elem.className)) {
                        elem.className = (elem.className === "") ?  string[i] : elem.className.trim() + ' ' + string[i];
                    }
                }
            },

            /**
             * Remove class of some DOM element
             * @method removeClass
             * @param {} elem
             * @param {} string
             * @return
             */
            removeClass: function(elem, string) {
                if (!(string instanceof Array)) {
                    string = string.split(' ');
                }
                for (var i = 0, len = string.length; i < len; ++i) {
                    elem.className = elem.className.replace(new RegExp(REGEX_BEGIN + string[i] + REGEX_END), ' ').trim();
                }
            },

            /**
             * Test if the nested element has the supply class
             * @method hasClass
             * @param {} elem
             * @param {} string
             * @return LogicalExpression
             */
            hasClass: function(elem, string) {
                return string && new RegExp(REGEX_BEGIN + string + REGEX_END).test(elem.className);
            }
        };

        /**
         * A kind of util functions
         * @class Util
         * @author @dariel_noel
         */
        selfish.Util = {

            /**
             * Thanks a lot to underscore guys
             * @method isFunction
             * @param {} obj
             * @return UnaryExpression
             */
            isFunction: function(obj) {
                return !!(obj && obj.constructor && obj.call && obj.apply);
            },
            /**
             * Test if some object is an array
             * @author Dariel Noel <darielnoel@gmail.com>
             * @since  2014-09-09
             * @return {Boolean}  [description]
             */
            beArray:function(object){
                return Array.isArray(object);
            }
        };

        /////////////////////////////////////////////////////////
        // Public SubModules
        /////////////////////////////////////////////////////////

        /**
         * Event System Interface (AniJS Current Implementation)
         * @class EventSystem
         * @author @dariel_noel
         */
        AniJS.EventSystem = {

            //ATTRS
            eventCollection: {},

            eventIdCounter: 0,

            /**
             * Return true if the element it's an event target object
             * @method isEventTarget
             * @param {} element
             * @return true or false
             */
            isEventTarget: function(element) {
                return (element.addEventListener) ? 1 : 0;
            },

            /**
             * Create new EventTarget element
             * @method createEventTarget
             * @return AniJS.EventTarget
             */
            createEventTarget: function() {
                return new AniJS.EventTarget();
            },

            /**
             * Put a listener in the object
             * @method addEventListenerHelper
             * @param {} eventTargetItem
             * @param {} event
             * @param {} listener
             * @param {} other
             * @return
             */
            addEventListenerHelper: function(eventTargetItem, event, listener, other) {
                eventTargetItem.addEventListener(event, listener, false);
            },

            /**
             * Put a listener of the object
             * @method removeEventListenerHelper
             * @param {} e
             * @param {} arguments
             * @return
             */
            removeEventListenerHelper: function(element, type, listener) {
                if(element){
                    element.removeEventListener(type, listener);
                }
            },


            /**
             * Purge all register elements handle
             * @method purgeAll
             * @return
             */
            purgeAll: function() {
                var instance = this,
                    eventCollection = instance.eventCollection,
                    eventCollectionKeyList = Object.keys(eventCollection),
                    size = eventCollectionKeyList.length,
                    i = 0,
                    key,
                    eventObject;

                for (i; i < size; i++) {
                    key = eventCollectionKeyList[i];
                    eventObject = eventCollection[key];

                    if (eventObject && eventObject.handleCollection && eventObject.handleCollection.length > 0) {
                        instance.purgeEventTarget(eventObject.handleCollection[0].element);
                    }

                    delete eventCollection[key];
                }
            },

            /**
             * Detach all AniJS subscriptions to the all nodes bellow this
             * @method purgeAllNodes
             * @param {} element
             * @return
             */
            purgeAllNodes: function(element){
                //Dame todos los que tengan data-anijs
                //a cada uno purgue
                var nodes = element.querySelectorAll("*");
                    size = nodes.length;
                for (var i = size - 1; i >= 0; i--) {
                    this.purgeEventTarget(nodes[i]);
                }
            },

            /**
             * Detach all AniJS subscriptions to this element
             * @method purgeEventTarget
             * @param {} element
             * @return
             */
            purgeEventTarget: function(element) {
                var instance = this,
                    aniJSEventID = element._aniJSEventID,
                    elementHandleCollection;
                if (aniJSEventID) {

                    //Se le quitan todos los eventos a los que este suscrito
                    elementHandleCollection = instance.eventCollection[aniJSEventID].handleCollection;

                    var size = elementHandleCollection.length,
                        i = 0,
                        item;

                    for (i; i < size; i++) {
                        item = elementHandleCollection[i];

                        //Para cada handle
                        instance.removeEventListenerHelper(element, item.eventType, item.listener);

                    }
                    instance.eventCollection[aniJSEventID] = element._aniJSEventID = null;
                    delete instance.eventCollection[aniJSEventID];
                    delete element._aniJSEventID;
                }
            },

            /**
             * Create a handle to remove the listener when purge it
             * @method registerEventHandle
             * @param {} element
             * @param {} eventType
             * @param {} listener
             * @return
             */
            registerEventHandle: function(element, eventType, listener) {
                var instance = this,
                    aniJSEventID = element._aniJSEventID,
                    eventCollection = instance.eventCollection,
                    elementEventHandle = {
                        eventType: eventType,
                        listener: listener,
                        element: element
                    };

                if (aniJSEventID) {
                    eventCollection[aniJSEventID].handleCollection.push(elementEventHandle);
                } else {
                    var tempEventHandle = {
                        handleCollection: [elementEventHandle]
                    };

                    eventCollection[++instance.eventIdCounter] = tempEventHandle;
                    element._aniJSEventID = instance.eventIdCounter;
                }
            }

        };


        /**
         * Helper the custom EventTarget
         * Copyright (c) 2010 Nicholas C. Zakas. All rights reserved.
         * MIT License
         * http://www.nczonline.net/blog/2010/03/09/custom-events-in-javascript/
         * @class EventTarget
         */
        AniJS.EventTarget = function EventTarget() {
            this._listeners = {};
        };

        AniJS.EventTarget.prototype = {

            constructor: AniJS.EventTarget,

            /**
             * Registers the specified listener on the EventTarget it's called on
             * Similar to the native implementation
             * @method addEventListener
             * @param {} type
             * @param {} listener
             * @param {} other
             * @return
             */
            addEventListener: function(type, listener, other) {
                var instance = this;
                if (typeof instance._listeners[type] == "undefined") {
                    instance._listeners[type] = [];
                }

                instance._listeners[type].push(listener);
            },

            /**
             * Dispatches an Event at the specified EventTarget
             * Similar to the native implementation
             * @method dispatchEvent
             * @param {} event
             * @return
             */
            dispatchEvent: function(event) {
                var instance = this;
                if (typeof event == "string") {
                    event = {
                        type: event
                    };
                }
                if (!event.target) {
                    event.target = instance;
                }

                if (!event.type) { //falsy
                    throw new Error("Event object missing 'type' property.");
                }

                if (this._listeners[event.type] instanceof Array) {
                    var listeners = instance._listeners[event.type];

                    for (var i = 0, len = listeners.length; i < len; i++) {
                        listeners[i].call(instance, event);
                    }
                }
            },

            /**
             * Removes the event listener previously registered with EventTarget.addEventListener.
             * Similar to the native implementation
             * @method removeEventListener
             * @param {} type
             * @param {} listener
             * @return
             */
            removeEventListener: function(type, listener) {
                var instance = this;
                if (instance._listeners[type] instanceof Array) {
                    var listeners = instance._listeners[type];
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        if (listeners[i] === listener) {
                            listeners.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        };

        return AniJS;

    }(AniJS || {}));

    AniJS.init();
    AniJS.run();

    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    // AMD Support
    if (typeof define === "function" && define.amd) {
        define("anijs", [], function() {
            return AniJS;
        });
    }
    if (typeof noGlobal == typeof undefined) {
        window.AniJS = AniJS;
    }

    return AniJS;
});

!function(){AniJS.EventSystem;AniJS.EventSystem.isEventTarget=function(a){return a.trigger?1:0},AniJS.EventSystem.createEventTarget=function(){return $({})},AniJS.EventSystem.addEventListenerHelper=function(a,b,c){$(a).on(b,c)},AniJS.EventSystem.removeEventListenerHelper=function(a,b,c){$(a).off(b,c)}}(window);
/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * JQuery Event System Interface
 */
(function() {
    var JQueryEventSystem = AniJS.EventSystem;

    /**
     * Overwriting isEventTarget method
     * @method isEventTarget
     * @param {} element
     * @return ConditionalExpression
     */
    AniJS.EventSystem.isEventTarget = function(element) {
        return (element.trigger) ? 1 : 0;
    };

    /**
     * Overwriting createEventTarget method
     * @method createEventTarget
     * @return CallExpression
     */
    AniJS.EventSystem.createEventTarget = function() {
        return $({});
    };

    /**
     * Overwriting addEventListenerHelper method
     * @method addEventListenerHelper
     * @param {} eventTargetItem
     * @param {} event
     * @param {} listener
     * @param {} other
     * @return
     */
    AniJS.EventSystem.addEventListenerHelper = function(eventTargetItem, event, listener, other) {
        $(eventTargetItem).on(event, listener);
    };

    /**
     * Overwriting removeEventListenerHelper method
     * @method removeEventListenerHelper
     * @param {} e
     * @param {} arguments
     * @return
     */
    AniJS.EventSystem.removeEventListenerHelper = function(element, type, listener) {
        $(element).off(type, listener);
    };


}(window));

!function(){function a(a,b){var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector;return c.call(a,b)}function b(a){return document.querySelectorAll(a)}function c(a){for(var b=a.length;b-->0;)AniJS.EventSystem.purgeAllNodes(a[b]),a[b].parentNode.removeChild(a[b])}function d(a,b){for(var c=!1,d=0;d<a.length&&!c;d++)c=a[d]===b;return c}function e(a,b,c,d){for(var e=0;c>e++;)b===a?d(b,b.parentNode):d(a,b)}function f(a,b){for(var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector;a;){if(c.call(a,b))return a;a=a.parentElement}return!1}function g(b,c){var d=[];for(null===c&&(c="*");b&&"html"!==b.tagName;)a(b,c)&&d.push(b),b=b.parentElement;return d}function h(a,c,d){var e=[],f="*";return e=0===d.length?[c.dataAniJSOwner]:"target"===d[0]?[a.currentTarget]:b(d[0]),d.length>1&&(f=d[1]),{elements:e,selector:f}}function i(a,b){return a.querySelectorAll(b)}function j(a,b){for(var c,e=a.length;e-->0;)c=a[e],c&&!d(b,c)&&b.push(c);return b}var k=AniJS.getHelper();k.addClass=function(a,b,c){k.makeClassAction(a,b,c,0,a.target)},k.removeClass=function(a,b,c){k.makeClassAction(a,b,c,1,a.target)},k.toggleClass=function(a,b,c){k.makeClassAction(a,b,c,2,a.target)},k.makeClassAction=function(a,b,c,d,e){for(var f=b.behaviorTargetList,g=0;g<f.length;g++)element=f[g],e=element,0===d?b.nodeHelper.addClass(e,c[0]):1===d?b.nodeHelper.removeClass(e,c[0]):b.nodeHelper.hasClass(e,c[0])?b.nodeHelper.removeClass(e,c[0]):b.nodeHelper.addClass(e,c[0]);b.hasRunned||b.run()},k.remove=function(a,d,e){var f=e.length,g=a.target,h=null;if(0===f)c([g]);else for(;f-->0;)h=b(e[f])||[],c(h);d.hasRunned||d.run()},k.clone=function(a,c,d){var f=d.length,g=a.target,h=c.eventTarget,i=null,j=k.cloneNodeHelper,l=1;if(0===f)e(h,g,l,j);else{if(1==f){if(l=parseInt(d[0])||null,null!==l)return e(h,g,l,j),void(c.hasRunned||c.run());l=1}else l=parseInt(d[1])||1;i=b(d[0]);for(var m=0;m<i.length;m++)e(i[m],g,l,j)}c.hasRunned||c.run(),AniJS.run()},k.parent=function(a,b,c){for(var e,f=h(a,b,c),g=f.elements,i=[],j=g.length;j-->0;)e=g[j].parentNode,d(i,e)||i.push(e);return i},k.ancestors=function(a,b,c){var e=h(a,b,c),f=e.elements,i=e.selector,j=[],k=[],l=0,m=0;for(l=f.length;l-->0;)for(k=g(f[l].parentNode,i),m=k.length;m-->0;)d(j,k[m])||j.push(k[m]);return j},k.closest=function(a,b,c){for(var e,g=h(a,b,c),i=g.elements,j=g.selector,k=i.length,l=[];k-->0;)e=f(i[k].parentNode,j),e&&!d(l,e)&&l.push(e);return l},k.find=function(a,b,c){for(var d=h(a,b,c),e=d.elements,f=d.selector,g=e.length,k=[];g-->0;)tempFoundedNodeList=i(e[g],f),k=j(tempFoundedNodeList,k);return k},k.children=function(b,c,d){for(var e=h(b,c,d),f=e.elements,g=e.selector,i=f.length,k=0,l=[],m=null;i-->0;)for(m=f[i].children;k<m.length;k++)a(m[k],g)&&j([m[k]],l);return l},k.cloneNodeHelper=function(a,b){if(null!==b){var c=a.cloneNode(!0);AniJS.purgeEventTarget(c),c.removeAttribute("id"),b.appendChild(c)}}}(window);
/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * AniJS DOM Helper
 */
(function() {

    //Obtaining  the default helper
    var AniJSDefaultHelper = AniJS.getHelper();


    /**
     * Add class to the elements
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.addClass = function(e, animationContext, params) {
        AniJSDefaultHelper.makeClassAction(e, animationContext, params, 0, e.target);
    };

    /**
     * Remove class to the elements
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]                   [description]
     */
    AniJSDefaultHelper.removeClass = function(e, animationContext, params) {
        AniJSDefaultHelper.makeClassAction(e, animationContext, params, 1, e.target);
    };

    /**
     * Toggle class to the elements
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.toggleClass = function(e, animationContext, params) {
        AniJSDefaultHelper.makeClassAction(e, animationContext, params, 2, e.target);
    };

    /**
     * Make toggle, remove or addActions
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.makeClassAction = function(e, animationContext, params, actionID, target){
        var animationContextBehaviorTargetList = animationContext.behaviorTargetList;
        for (var i = 0; i < animationContextBehaviorTargetList.length; i++) {
            element = animationContextBehaviorTargetList[i];
            target = element;
            if(actionID === 0){
                animationContext.nodeHelper.addClass(target, params[0]);
            } else if(actionID === 1){
                animationContext.nodeHelper.removeClass(target, params[0]);
            } else{
                if(animationContext.nodeHelper.hasClass(target, params[0])){
                   animationContext.nodeHelper.removeClass(target, params[0]);
                }else {
                   animationContext.nodeHelper.addClass(target, params[0]);
                }
            }
        }
        //Run the animation
        if(!animationContext.hasRunned){
            animationContext.run();
        }
    };

    /**
     * Remove element or elements from html
     * Examples:
     *  Remove current element.
     *   if: click, do: $remove
     *  Remove HTML elements with class name .remove
     *   if: click, do: $remove .remove
     *  Remove HTML element with id remove
     *   if: click, do: $remove #remove
     *  Remove HTML elements with tag name p
     *   if: click, do: $remove p
     *  Remove all HTML elements that contain class name remove or id remove o tag name p
     *   if: click, do: $remove .remove & #remove & p
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-11
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.remove = function(e, animationContext, params) {
        var paramsLength = params.length,
            target = e.target,
            elements = null;
        if(paramsLength === 0) {
            wipeOff([target]);
        } else {
            while(paramsLength-- > 0) {
                elements = queryAll(params[paramsLength]) || [];
                wipeOff(elements);
            }
        }
        //Run the animation
        if(!animationContext.hasRunned){
            animationContext.run();
        }
    };

    /**
     * Clone HTML element
     * Examples:
     *  Clone current HTML element and append in same parent.
     *   if: click, do: $clone
     *  Clone current HTML element and append other parent.
     *   if: click, do: $clone, to: #otherParent
     *  Clone HTML element and append other parent.
     *   if: click, do: $clone #clone, to: #otherParent
     *  Clone HTML element and append in same parent.
     *   if: click, do: $clone #clone
     *
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-11
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.clone = function(e, animationContext, params) {
        var paramsLength = params.length,
            target = e.target, // para donde va el elemento
            eventTarget = animationContext.eventTarget, //quien origina el evento
            elements = null,
            fnCloneNode = AniJSDefaultHelper.cloneNodeHelper,
            repeats = 1;

        if(paramsLength === 0 ) {                //$clone
            cloneNode(eventTarget, target, repeats, fnCloneNode);
        } else {
            if(paramsLength == 1) {             //$clone 3, to: #clone
                repeats = parseInt(params[0]) || null;
                if(repeats !== null) {
                    cloneNode(eventTarget, target, repeats, fnCloneNode);
                    //Run the animation
                    if(!animationContext.hasRunned){
                        animationContext.run();
                    }
                    return;
                } else {
                    repeats = 1;
                }
            } else {                            //$clone selectror & 3, to: #clone
                repeats = parseInt(params[1]) || 1;
            }
            elements = queryAll(params[0]);
            var i = 0;
            for (; i < elements.length; i++) {
                cloneNode(elements[i], target, repeats, fnCloneNode);
            }
        }
        //Run the animation
        if(!animationContext.hasRunned){
            animationContext.run();
        }

        AniJS.run();
    };

    /**
     * Parent for element
     * Examples:
     *  Remove li parent
     *   if: click, on: li, do: $remove, to: $parent
     *  Se remueve el parent del li que dispara el evento
     *   if: click, on: li, do: $remove, to: $parent target
     *  Se remueve el parent de todos los elementos de clase .primary
     *   if: click, on: li, do: $remove, to: $parent .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.parent = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            parents = [],
            i = elements.length,
            parentNode;
        while(i-- > 0) {
            parentNode = elements[i].parentNode;
            if(!isContains(parents, parentNode)) {
                parents.push(parentNode);
            }
        }
        return parents;
    };

    /**
     * Parents for element
     * Examples:
     *  Se remueven todos los ancestros del div
     *   if: click, on: li, do: $remove, to: $ancestors
     *  Se remueven todos los ancestros con clase ".red-ancestors" de div
     *   if: click, on: li, do: $remove, to: $ancestors .red-ancestors
     *  Se remueven todos los ancestros con clase ".red-ancestors" de li que dispara el evento
     *   if: click, on: li, do: $remove, to: $ancestors target & .red-ancestors
     *  Se remueven todos los ancestros con clase ".red-ancestors" de los elementos con clase .primary
     *   if: click, on: li, do: $remove, to: $ancestors .primary & .red-ancestors
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.ancestors = function(e, ctx, params) {
        var psfi = parseSelectorFunctionInput(e, ctx, params),
            elements = psfi.elements,
            selector = psfi.selector,
            ancs = [], currentAncs = [], i = 0, j = 0;
        i = elements.length;
        while(i-- > 0) {
            // TODO: Este mecanismo debe ser optimizado ya que no sea necesario tener
            // todos los ancestros para entonces hacer las comparaciones
            currentAncs = ancestor(elements[i].parentNode, selector);
            j = currentAncs.length;
            //para cada ancestro si no esta contenido entonces se pone en la lista
            while(j-- > 0) {
                if(!isContains(ancs, currentAncs[j])) {
                    ancs.push(currentAncs[j]);
                }
            }
        }
        return ancs;
    };

    /**
     * Closets
     * Examples:
     *   Remueve el ancestro mas cercano del div
     *   if: click, on: li, do: $remove, to: $closest
     *   Remueve el ancestro mas cercano del li
     *   if: click, on: li, do: $remove, to: $closest target
     *   Remueve el ancestro mas cercano de div con clase .primary
     *   if: click, on: li, do: $remove, to: $closest .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.closest = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            selector = parsedInput.selector,
            i = elements.length,
            closestList = [],
            closestNode;
        while(i-- > 0) {
            closestNode = closest(elements[i].parentNode, selector);
            if(closestNode && !isContains(closestList, closestNode)) {
                closestList.push(closestNode);
            }
        }
        return closestList;
    };

    /**
     * Find
     * Examples:
     *
     *  Elimina todos los elemntos hijos del elemento actual
     *   if: click, on: li, do: $find, to: $find
     *  Elimina todos los elemntos hijos del elemento li
     *   if: click, on: li, do: $find, to: $find target
     *  Elimina todos los elemntos hijos del elemento actual que contengan la clase css .primary
     *   if: click, on: li, do: $find, to: $find .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.find = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            selector = parsedInput.selector,
            i = elements.length,
            foundedList = [];
        while(i-- > 0) {
            tempFoundedNodeList = findNodes(elements[i], selector);
            foundedList = mergeArray(tempFoundedNodeList, foundedList);
        }
        return foundedList;
    };
    /**
     * Children
     * Examples:
     *
     *   if: click, on: li, do: $remove, to: $children
     *
     *   if: click, on: li, do: $remove, to: $children target & h1
     *
     *   if: click, on: li, do: $remove, to: $children .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.children = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            selector = parsedInput.selector,
            i = elements.length, j = 0,
            foundedList = [], tmpItems = null;

        while(i-- > 0) {
            tmpItems = elements[i].children;
            for (; j < tmpItems.length; j++) {
                if(matchesSelector(tmpItems[j], selector)) {
                    mergeArray([ tmpItems[j] ], foundedList);
                }
            }
        }
        return foundedList;
    };

    /**
     * Clone HTML element
     * @method removeChild
     * @param {} element
     * @param {} parentNode
     */
    AniJSDefaultHelper.cloneNodeHelper = function(element, parentNode) {
        if(parentNode === null) return;
        var clone = element.cloneNode(true);
        AniJS.purgeEventTarget(clone);
        clone.removeAttribute("id");
        parentNode.appendChild(clone);
    };



    //-----------------------------------------------------------
    //           AUXILIARY FUCTIONS
    //-----------------------------------------------------------

    function matchesSelector(elem, selector) {
        var ms = elem.matches ||
                  elem.webkitMatchesSelector ||
                  elem.mozMatchesSelector ||
                  elem.msMatchesSelector;
        return ms.call(elem, selector);
    }

    /**
     * Return all nodes that match witch selector
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function queryAll(selector){
        return document.querySelectorAll(selector);
    }

    /**
     * Function for erease elements form html
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     */
    function wipeOff(elements) {
        var i = elements.length;
        while (i-- > 0) {
            AniJS.EventSystem.purgeAllNodes(elements[i]);
            elements[i].parentNode.removeChild(elements[i]);
        }
    }

    /**
     * Return all nodes that match witch selector
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function isContains(array, el) {
        var found = false;
        for (var i = 0; i < array.length && !found; i++) {
            found = (array[i] === el);
        }
        return found;
    }

    /**
     * Function to clone element
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     */
    function cloneNode(el, parent, repeats, fnCloneNode) {
        var i = 0;
        while(repeats > i++) {
            if(parent === el) {                             //Whitout to
                fnCloneNode(parent, parent.parentNode);
            } else {                                        //With to
                fnCloneNode(el, parent);
            }
        }
    }

    //http://stackoverflow.com/questions/15329167/closest-ancestor-matching-selector-using-native-dom
    //by Paul Irish
    function closest(elem, selector) {
        var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
        while (elem) {
            if (matchesSelector.call(elem, selector)) {
                return elem;
            } else {
                elem = elem.parentElement;
            }
        }
        return false;
    }

    /**
     * Ancestor
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function ancestor(elem, selector) {
        var ancestorList = [];
        if(selector === null) { selector = '*'; }
        while (elem && elem.tagName !== 'html') {
            if (matchesSelector(elem, selector)) {
                ancestorList.push(elem);
            }
            elem = elem.parentElement;
        }
        return ancestorList;
    }
    /**
     * Parse selector function input
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function parseSelectorFunctionInput(e, ctx, params) {
        var elements = [],
            selector = '*';

        if(params.length === 0) {
            elements = [ctx.dataAniJSOwner];
        }
        else {
            elements = ( params[0] === 'target' ) ? [e.currentTarget] : queryAll(params[0]);
        }
        if(params.length > 1) {
            selector = params[1];
        }

        return { elements: elements,  selector: selector };
    }
    /**
     * Find nodes
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function findNodes(root, selector){
        return root.querySelectorAll(selector);
    }
    /**
     * Merge array
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function mergeArray(from, receiver){
        var j = from.length,
            tempItem;
        while(j-- > 0) {
            tempItem = from[j];
            if(tempItem && !isContains(receiver, tempItem)) {
                receiver.push(tempItem);
            }
        }
        return receiver;
    }
}(window));

!function(){var a=AniJS.getHelper();a.scrollReveal=function(a,c,d){var e=.07;animationContextBehaviorTargetList=c.behaviorTargetList,d.length<2&&"repeat"!==d[0]&&c.after.length<1&&(c.after=[AniJS.getHelper().fireOnce]),isNaN(parseFloat(d[0]))||(e=d[0]);for(var f=0;f<animationContextBehaviorTargetList.length;f++)element=animationContextBehaviorTargetList[f],b.isElementInViewport(element,e)?element.isRevealed||(element.isRevealed=1,c.run()):element.isRevealed=0};var b={viewportFactor:1,docElem:window.document.documentElement,isElementInViewport:function(a,b){var c=window.pageYOffset,d=c+this._getViewportH(),e=a.offsetHeight,f=this._getOffset(a).top,g=f+e,b=b||0;return d>=f+e*b&&g>=c||"fixed"==(a.currentStyle?a.currentStyle:window.getComputedStyle(a,null)).position},_getViewportH:function(){var a=this.docElem.clientHeight,b=window.innerHeight;return b>a?b:a},_getOffset:function(a){var b=0,c=0;do isNaN(a.offsetTop)||(b+=a.offsetTop),isNaN(a.offsetLeft)||(c+=a.offsetLeft);while(a=a.offsetParent);return{top:b,left:c}}};window.scroll(window.scrollX,window.scrollY+1)}(window);
/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * AniJS ScrollReview Helper
 */
(function() {

    //Obtaining  the default helper
    var AniJSDefaultHelper = AniJS.getHelper();

    /**
     * Creating a testing scroll before function
     * @method scrollReveal
     * @param {} e
     * @param {} animationContext
     * @return
     */
    AniJSDefaultHelper.scrollReveal = function(e, animationContext, params) {
        var viewportRatio = 0.07;
        //Current elements that will be animated
        animationContextBehaviorTargetList = animationContext.behaviorTargetList;

        // The revealed function will be executed just one time
        if(params.length < 2 && params[0] !== 'repeat' && animationContext.after.length < 1){
            animationContext.after = [AniJS.getHelper().fireOnce];
        }

        if(!isNaN(parseFloat(params[0]))){
            viewportRatio = params[0];
        }

        for (var i = 0; i < animationContextBehaviorTargetList.length; i++) {
            element = animationContextBehaviorTargetList[i];

            //Check if the element is visible
            if (ScrollRevealHelper.isElementInViewport(element, viewportRatio)) {

                //The element is not animated again if it's visible
                if (!element.isRevealed) {
                    element.isRevealed = 1;
                    animationContext.run();
                }

            } else {
                element.isRevealed = 0;
            }
        }
    };

    /**
     * Helper the custom EventTarget
     * ! scrollReveal.js v0.1.2 (c) 2014 Julian Lloyd
     * MIT License
     * https://github.com/julianlloyd/scrollReveal.js
     * @class ScrollRevealHelper
     */
    var ScrollRevealHelper = {

        //ATTRS

        //TODO: This attrs should be customizable
        viewportFactor: 1,
        docElem: window.document.documentElement,

        /**
         * Return true if the element if visible in a viewport zone
         * @method isElementInViewport
         * @param {} el
         * @param {} h
         * @return LogicalExpression
         */
        isElementInViewport: function(el, h) {
            var scrolled = window.pageYOffset,
                viewed = scrolled + this._getViewportH(),
                elH = el.offsetHeight,
                elTop = this._getOffset(el).top,
                elBottom = elTop + elH,
                h = h || 0;

            return (elTop + elH * h) <= viewed && (elBottom) >= scrolled || (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).position == 'fixed';
        },

        /**
         * Obtaining the viewport height
         * @method _getViewportH
         * @return ConditionalExpression
         */
        _getViewportH: function() {
            var client = this.docElem.clientHeight,
                inner = window.innerHeight;

            return (client < inner) ? inner : client;
        },

        /**
         * The offset of the element
         * @method _getOffset
         * @param {} el
         * @return ObjectExpression
         */
        _getOffset: function(el) {
            var offsetTop = 0,
                offsetLeft = 0;

            do {
                if (!isNaN(el.offsetTop)) {
                    offsetTop += el.offsetTop;
                }
                if (!isNaN(el.offsetLeft)) {
                    offsetLeft += el.offsetLeft;
                }
            } while (el = el.offsetParent)

            return {
                top: offsetTop,
                left: offsetLeft
            }
        }
    };
    window.scroll(window.scrollX, window.scrollY+1);

}(window));

/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * JQuery Event System Interface
 */
(function() {
    var JQueryEventSystem = AniJS.EventSystem;

    /**
     * Overwriting isEventTarget method
     * @method isEventTarget
     * @param {} element
     * @return ConditionalExpression
     */
    AniJS.EventSystem.isEventTarget = function(element) {
        return (element.trigger) ? 1 : 0;
    };

    /**
     * Overwriting createEventTarget method
     * @method createEventTarget
     * @return CallExpression
     */
    AniJS.EventSystem.createEventTarget = function() {
        return $({});
    };

    /**
     * Overwriting addEventListenerHelper method
     * @method addEventListenerHelper
     * @param {} eventTargetItem
     * @param {} event
     * @param {} listener
     * @param {} other
     * @return
     */
    AniJS.EventSystem.addEventListenerHelper = function(eventTargetItem, event, listener, other) {
        $(eventTargetItem).on(event, listener);
    };

    /**
     * Overwriting removeEventListenerHelper method
     * @method removeEventListenerHelper
     * @param {} e
     * @param {} arguments
     * @return
     */
    AniJS.EventSystem.removeEventListenerHelper = function(element, type, listener) {
        $(element).off(type, listener);
    };


}(window));

/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * AniJS DOM Helper
 */
(function() {

    //Obtaining  the default helper
    var AniJSDefaultHelper = AniJS.getHelper();


    /**
     * Add class to the elements
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.addClass = function(e, animationContext, params) {
        AniJSDefaultHelper.makeClassAction(e, animationContext, params, 0, e.target);
    };

    /**
     * Remove class to the elements
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]                   [description]
     */
    AniJSDefaultHelper.removeClass = function(e, animationContext, params) {
        AniJSDefaultHelper.makeClassAction(e, animationContext, params, 1, e.target);
    };

    /**
     * Toggle class to the elements
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.toggleClass = function(e, animationContext, params) {
        AniJSDefaultHelper.makeClassAction(e, animationContext, params, 2, e.target);
    };

    /**
     * Make toggle, remove or addActions
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-03
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.makeClassAction = function(e, animationContext, params, actionID, target){
        var animationContextBehaviorTargetList = animationContext.behaviorTargetList;
        for (var i = 0; i < animationContextBehaviorTargetList.length; i++) {
            element = animationContextBehaviorTargetList[i];
            target = element;
            if(actionID === 0){
                animationContext.nodeHelper.addClass(target, params[0]);
            } else if(actionID === 1){
                animationContext.nodeHelper.removeClass(target, params[0]);
            } else{
                if(animationContext.nodeHelper.hasClass(target, params[0])){
                   animationContext.nodeHelper.removeClass(target, params[0]);
                }else {
                   animationContext.nodeHelper.addClass(target, params[0]);
                }
            }
        }
        //Run the animation
        if(!animationContext.hasRunned){
            animationContext.run();
        }
    };

    /**
     * Remove element or elements from html
     * Examples:
     *  Remove current element.
     *   if: click, do: $remove
     *  Remove HTML elements with class name .remove
     *   if: click, do: $remove .remove
     *  Remove HTML element with id remove
     *   if: click, do: $remove #remove
     *  Remove HTML elements with tag name p
     *   if: click, do: $remove p
     *  Remove all HTML elements that contain class name remove or id remove o tag name p
     *   if: click, do: $remove .remove & #remove & p
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-11
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.remove = function(e, animationContext, params) {
        var paramsLength = params.length,
            target = e.target,
            elements = null;
        if(paramsLength === 0) {
            wipeOff([target]);
        } else {
            while(paramsLength-- > 0) {
                elements = queryAll(params[paramsLength]) || [];
                wipeOff(elements);
            }
        }
        //Run the animation
        if(!animationContext.hasRunned){
            animationContext.run();
        }
    };

    /**
     * Clone HTML element
     * Examples:
     *  Clone current HTML element and append in same parent.
     *   if: click, do: $clone
     *  Clone current HTML element and append other parent.
     *   if: click, do: $clone, to: #otherParent
     *  Clone HTML element and append other parent.
     *   if: click, do: $clone #clone, to: #otherParent
     *  Clone HTML element and append in same parent.
     *   if: click, do: $clone #clone
     *
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-11
     * @param  {object}   e                The event handler
     * @param  {object}   animationContext AniJS Animation Context Object
     * @param  {[string]}   params           [description]
     */
    AniJSDefaultHelper.clone = function(e, animationContext, params) {
        var paramsLength = params.length,
            target = e.target, // para donde va el elemento
            eventTarget = animationContext.eventTarget, //quien origina el evento
            elements = null,
            fnCloneNode = AniJSDefaultHelper.cloneNodeHelper,
            repeats = 1;

        if(paramsLength === 0 ) {                //$clone
            cloneNode(eventTarget, target, repeats, fnCloneNode);
        } else {
            if(paramsLength == 1) {             //$clone 3, to: #clone
                repeats = parseInt(params[0]) || null;
                if(repeats !== null) {
                    cloneNode(eventTarget, target, repeats, fnCloneNode);
                    //Run the animation
                    if(!animationContext.hasRunned){
                        animationContext.run();
                    }
                    return;
                } else {
                    repeats = 1;
                }
            } else {                            //$clone selectror & 3, to: #clone
                repeats = parseInt(params[1]) || 1;
            }
            elements = queryAll(params[0]);
            var i = 0;
            for (; i < elements.length; i++) {
                cloneNode(elements[i], target, repeats, fnCloneNode);
            }
        }
        //Run the animation
        if(!animationContext.hasRunned){
            animationContext.run();
        }

        AniJS.run();
    };

    /**
     * Parent for element
     * Examples:
     *  Remove li parent
     *   if: click, on: li, do: $remove, to: $parent
     *  Se remueve el parent del li que dispara el evento
     *   if: click, on: li, do: $remove, to: $parent target
     *  Se remueve el parent de todos los elementos de clase .primary
     *   if: click, on: li, do: $remove, to: $parent .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.parent = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            parents = [],
            i = elements.length,
            parentNode;
        while(i-- > 0) {
            parentNode = elements[i].parentNode;
            if(!isContains(parents, parentNode)) {
                parents.push(parentNode);
            }
        }
        return parents;
    };

    /**
     * Parents for element
     * Examples:
     *  Se remueven todos los ancestros del div
     *   if: click, on: li, do: $remove, to: $ancestors
     *  Se remueven todos los ancestros con clase ".red-ancestors" de div
     *   if: click, on: li, do: $remove, to: $ancestors .red-ancestors
     *  Se remueven todos los ancestros con clase ".red-ancestors" de li que dispara el evento
     *   if: click, on: li, do: $remove, to: $ancestors target & .red-ancestors
     *  Se remueven todos los ancestros con clase ".red-ancestors" de los elementos con clase .primary
     *   if: click, on: li, do: $remove, to: $ancestors .primary & .red-ancestors
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.ancestors = function(e, ctx, params) {
        var psfi = parseSelectorFunctionInput(e, ctx, params),
            elements = psfi.elements,
            selector = psfi.selector,
            ancs = [], currentAncs = [], i = 0, j = 0;
        i = elements.length;
        while(i-- > 0) {
            // TODO: Este mecanismo debe ser optimizado ya que no sea necesario tener
            // todos los ancestros para entonces hacer las comparaciones
            currentAncs = ancestor(elements[i].parentNode, selector);
            j = currentAncs.length;
            //para cada ancestro si no esta contenido entonces se pone en la lista
            while(j-- > 0) {
                if(!isContains(ancs, currentAncs[j])) {
                    ancs.push(currentAncs[j]);
                }
            }
        }
        return ancs;
    };

    /**
     * Closets
     * Examples:
     *   Remueve el ancestro mas cercano del div
     *   if: click, on: li, do: $remove, to: $closest
     *   Remueve el ancestro mas cercano del li
     *   if: click, on: li, do: $remove, to: $closest target
     *   Remueve el ancestro mas cercano de div con clase .primary
     *   if: click, on: li, do: $remove, to: $closest .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.closest = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            selector = parsedInput.selector,
            i = elements.length,
            closestList = [],
            closestNode;
        while(i-- > 0) {
            closestNode = closest(elements[i].parentNode, selector);
            if(closestNode && !isContains(closestList, closestNode)) {
                closestList.push(closestNode);
            }
        }
        return closestList;
    };

    /**
     * Find
     * Examples:
     *
     *  Elimina todos los elemntos hijos del elemento actual
     *   if: click, on: li, do: $find, to: $find
     *  Elimina todos los elemntos hijos del elemento li
     *   if: click, on: li, do: $find, to: $find target
     *  Elimina todos los elemntos hijos del elemento actual que contengan la clase css .primary
     *   if: click, on: li, do: $find, to: $find .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.find = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            selector = parsedInput.selector,
            i = elements.length,
            foundedList = [];
        while(i-- > 0) {
            tempFoundedNodeList = findNodes(elements[i], selector);
            foundedList = mergeArray(tempFoundedNodeList, foundedList);
        }
        return foundedList;
    };
    /**
     * Children
     * Examples:
     *
     *   if: click, on: li, do: $remove, to: $children
     *
     *   if: click, on: li, do: $remove, to: $children target & h1
     *
     *   if: click, on: li, do: $remove, to: $children .primary
     *
     * @author Dariel Noel <darielnoel@gmail.com>
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     * @param  {object}   e                The event handler
     * @param  {object}   ctx              AniJS Animation Context Object
     * @param  {[string]} params           [description]
     */
    AniJSDefaultHelper.children = function(e, ctx, params) {
        var parsedInput = parseSelectorFunctionInput(e, ctx, params),
            elements = parsedInput.elements,
            selector = parsedInput.selector,
            i = elements.length, j = 0,
            foundedList = [], tmpItems = null;

        while(i-- > 0) {
            tmpItems = elements[i].children;
            for (; j < tmpItems.length; j++) {
                if(matchesSelector(tmpItems[j], selector)) {
                    mergeArray([ tmpItems[j] ], foundedList);
                }
            }
        }
        return foundedList;
    };

    /**
     * Clone HTML element
     * @method removeChild
     * @param {} element
     * @param {} parentNode
     */
    AniJSDefaultHelper.cloneNodeHelper = function(element, parentNode) {
        if(parentNode === null) return;
        var clone = element.cloneNode(true);
        AniJS.purgeEventTarget(clone);
        clone.removeAttribute("id");
        parentNode.appendChild(clone);
    };



    //-----------------------------------------------------------
    //           AUXILIARY FUCTIONS
    //-----------------------------------------------------------

    function matchesSelector(elem, selector) {
        var ms = elem.matches ||
                  elem.webkitMatchesSelector ||
                  elem.mozMatchesSelector ||
                  elem.msMatchesSelector;
        return ms.call(elem, selector);
    }

    /**
     * Return all nodes that match witch selector
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function queryAll(selector){
        return document.querySelectorAll(selector);
    }

    /**
     * Function for erease elements form html
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     */
    function wipeOff(elements) {
        var i = elements.length;
        while (i-- > 0) {
            AniJS.EventSystem.purgeAllNodes(elements[i]);
            elements[i].parentNode.removeChild(elements[i]);
        }
    }

    /**
     * Return all nodes that match witch selector
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function isContains(array, el) {
        var found = false;
        for (var i = 0; i < array.length && !found; i++) {
            found = (array[i] === el);
        }
        return found;
    }

    /**
     * Function to clone element
     * @author Yolier Galan Tasse <gallegogt@gmail.com>
     * @since  2014-09-14
     */
    function cloneNode(el, parent, repeats, fnCloneNode) {
        var i = 0;
        while(repeats > i++) {
            if(parent === el) {                             //Whitout to
                fnCloneNode(parent, parent.parentNode);
            } else {                                        //With to
                fnCloneNode(el, parent);
            }
        }
    }

    //http://stackoverflow.com/questions/15329167/closest-ancestor-matching-selector-using-native-dom
    //by Paul Irish
    function closest(elem, selector) {
        var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
        while (elem) {
            if (matchesSelector.call(elem, selector)) {
                return elem;
            } else {
                elem = elem.parentElement;
            }
        }
        return false;
    }

    /**
     * Ancestor
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function ancestor(elem, selector) {
        var ancestorList = [];
        if(selector === null) { selector = '*'; }
        while (elem && elem.tagName !== 'html') {
            if (matchesSelector(elem, selector)) {
                ancestorList.push(elem);
            }
            elem = elem.parentElement;
        }
        return ancestorList;
    }
    /**
     * Parse selector function input
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function parseSelectorFunctionInput(e, ctx, params) {
        var elements = [],
            selector = '*';

        if(params.length === 0) {
            elements = [ctx.dataAniJSOwner];
        }
        else {
            elements = ( params[0] === 'target' ) ? [e.currentTarget] : queryAll(params[0]);
        }
        if(params.length > 1) {
            selector = params[1];
        }

        return { elements: elements,  selector: selector };
    }
    /**
     * Find nodes
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function findNodes(root, selector){
        return root.querySelectorAll(selector);
    }
    /**
     * Merge array
     * @author Dariel Noel <darielnoel@gmail.com>
     * @since  2014-09-14
     * @return {[type]}   [description]
     */
    function mergeArray(from, receiver){
        var j = from.length,
            tempItem;
        while(j-- > 0) {
            tempItem = from[j];
            if(tempItem && !isContains(receiver, tempItem)) {
                receiver.push(tempItem);
            }
        }
        return receiver;
    }
}(window));

/*!
AniJS - http://anijs.github.io
Licensed under the MIT license

Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * AniJS ScrollReview Helper
 */
(function() {

    //Obtaining  the default helper
    var AniJSDefaultHelper = AniJS.getHelper();

    /**
     * Creating a testing scroll before function
     * @method scrollReveal
     * @param {} e
     * @param {} animationContext
     * @return
     */
    AniJSDefaultHelper.scrollReveal = function(e, animationContext, params) {
        var viewportRatio = 0.07;
        //Current elements that will be animated
        animationContextBehaviorTargetList = animationContext.behaviorTargetList;

        // The revealed function will be executed just one time
        if(params.length < 2 && params[0] !== 'repeat' && animationContext.after.length < 1){
            animationContext.after = [AniJS.getHelper().fireOnce];
        }

        if(!isNaN(parseFloat(params[0]))){
            viewportRatio = params[0];
        }

        for (var i = 0; i < animationContextBehaviorTargetList.length; i++) {
            element = animationContextBehaviorTargetList[i];

            //Check if the element is visible
            if (ScrollRevealHelper.isElementInViewport(element, viewportRatio)) {

                //The element is not animated again if it's visible
                if (!element.isRevealed) {
                    element.isRevealed = 1;
                    animationContext.run();
                }

            } else {
                element.isRevealed = 0;
            }
        }
    };

    /**
     * Helper the custom EventTarget
     * ! scrollReveal.js v0.1.2 (c) 2014 Julian Lloyd
     * MIT License
     * https://github.com/julianlloyd/scrollReveal.js
     * @class ScrollRevealHelper
     */
    var ScrollRevealHelper = {

        //ATTRS

        //TODO: This attrs should be customizable
        viewportFactor: 1,
        docElem: window.document.documentElement,

        /**
         * Return true if the element if visible in a viewport zone
         * @method isElementInViewport
         * @param {} el
         * @param {} h
         * @return LogicalExpression
         */
        isElementInViewport: function(el, h) {
            var scrolled = window.pageYOffset,
                viewed = scrolled + this._getViewportH(),
                elH = el.offsetHeight,
                elTop = this._getOffset(el).top,
                elBottom = elTop + elH,
                h = h || 0;

            return (elTop + elH * h) <= viewed && (elBottom) >= scrolled || (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).position == 'fixed';
        },

        /**
         * Obtaining the viewport height
         * @method _getViewportH
         * @return ConditionalExpression
         */
        _getViewportH: function() {
            var client = this.docElem.clientHeight,
                inner = window.innerHeight;

            return (client < inner) ? inner : client;
        },

        /**
         * The offset of the element
         * @method _getOffset
         * @param {} el
         * @return ObjectExpression
         */
        _getOffset: function(el) {
            var offsetTop = 0,
                offsetLeft = 0;

            do {
                if (!isNaN(el.offsetTop)) {
                    offsetTop += el.offsetTop;
                }
                if (!isNaN(el.offsetLeft)) {
                    offsetLeft += el.offsetLeft;
                }
            } while (el = el.offsetParent)

            return {
                top: offsetTop,
                left: offsetLeft
            }
        }
    };
    window.scroll(window.scrollX, window.scrollY+1);

}(window));

/*
YUI 3.17.2 (build 9c3c78e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

typeof YUI!="undefined"&&(YUI._YUI=YUI);var YUI=function(){var e=0,t=this,n=arguments,r=n.length,i=function(e,t){return e&&e.hasOwnProperty&&e instanceof t},s=typeof YUI_config!="undefined"&&YUI_config;i(t,YUI)?(t._init(),YUI.GlobalConfig&&t.applyConfig(YUI.GlobalConfig),s&&t.applyConfig(s),r||t._setup()):t=new YUI;if(r){for(;e<r;e++)t.applyConfig(n[e]);t._setup()}return t.instanceOf=i,t};(function(){var e,t,n="3.17.2",r=".",i="http://yui.yahooapis.com/",s="yui3-js-enabled",o="yui3-css-stamp",u=function(){},a=Array.prototype.slice,f={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},l=typeof window!="undefined",c=l?window:null,h=l?c.document:null,p=h&&h.documentElement,d=p&&p.className,v={},m=(new Date).getTime(),g=function(e,t,n,r){e&&e.addEventListener?e.addEventListener(t,n,r):e&&e.attachEvent&&e.attachEvent("on"+t,n)},y=function(e,t,n,r){if(e&&e.removeEventListener)try{e.removeEventListener(t,n,r)}catch(i){}else e&&e.detachEvent&&e.detachEvent("on"+t,n)},b=function(){YUI.Env.DOMReady=!0,l&&y(h,"DOMContentLoaded",b)},w=function(){YUI.Env.windowLoaded=!0,YUI.Env.DOMReady=!0,l&&y(window,"load",w)},E=function(e,t){var n=e.Env._loader,r=["loader-base"],i=YUI.Env,s=i.mods;return n?(n.ignoreRegistered=!1,n.onEnd=null,n.data=null,n.required=[],n.loadType=null):(n=new e.Loader(e.config),e.Env._loader=n),s&&s.loader&&(r=[].concat(r,YUI.Env.loaderExtras)),YUI.Env.core=e.Array.dedupe([].concat(YUI.Env.core,r)),n},S=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},x={success:!0};p&&d.indexOf(s)==-1&&(d&&(d+=" "),d+=s,p.className=d),n.indexOf("@")>-1&&(n="3.5.0"),e={applyConfig:function(e){e=e||u;var t,n,r=this.config,i=r.modules,s=r.groups,o=r.aliases,a=this.Env._loader;for(n in e)e.hasOwnProperty(n)&&(t=e[n],i&&n=="modules"?S(i,t):o&&n=="aliases"?S(o,t):s&&n=="groups"?S(s,t):n=="win"?(r[n]=t&&t.contentWindow||t,r.doc=r[n]?r[n].document:null):n!="_yuid"&&(r[n]=t));a&&a._config(e)},_config:function(e){this.applyConfig(e)},_init:function(){var e,t,r=this,s=YUI.Env,u=r.Env,a;r.version=n;if(!u){r.Env={core:["get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:i,cdn:i+n+"/build/",_idx:0,_used:{},_attached:{},_exported:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(e,t){var n=e.match(t),r,i;return n&&(r=RegExp.leftContext||e.slice(0,e.indexOf(n[0])),i=n[3],n[1]&&(r+="?"+n[1]),r={filter:i,path:r}),r},getBase:s&&s.getBase||function(t){var n=h&&h.getElementsByTagName("script")||[],i=u.cdn,s,o,a,f;for(o=0,a=n.length;o<a;++o){f=n[o].src;if(f){s=r.Env.parseBasePath(f,t);if(s){e=s.filter,i=s.path;break}}}return i}},u=r.Env,u._loaded[n]={};if(s&&r!==YUI)u._yidx=++s._yidx,u._guidp=("yui_"+n+"_"+u._yidx+"_"+m).replace(/[^a-z0-9_]+/g,"_");else if(YUI._YUI){s=YUI._YUI.Env,u._yidx+=s._yidx,u._uidx+=s._uidx;for(a in s)a in u||(u[a]=s[a]);delete YUI._YUI}r.id=r.stamp(r),v[r.id]=r}r.constructor=YUI,r.config=r.config||{bootstrap:!0,cacheUse:!0,debug:!0,doc:h,fetchCSS:!0,throwFail:!0,useBrowserConsole:!0,useNativeES5:!0,win:c,global:Function("return this")()},h&&!h.getElementById(o)?(t=h.createElement("div"),t.innerHTML='<div id="'+o+'" style="position: absolute !important; visibility: hidden !important"></div>',YUI.Env.cssStampEl=t.firstChild,h.body?h.body.appendChild(YUI.Env.cssStampEl):p.insertBefore(YUI.Env.cssStampEl,p.firstChild)):h&&h.getElementById(o)&&!YUI.Env.cssStampEl&&(YUI.Env.cssStampEl=h.getElementById(o)),r.config.lang=r.config.lang||"en-US",r.config.base=YUI.config.base||r.Env.getBase(r.Env._BASE_RE);if(!e||!"mindebug".indexOf(e))e="min";e=e?"-"+e:e,r.config.loaderPath=YUI.config.loaderPath||"loader/loader"+e+".js"},_setup:function(){var e,t=this,n=[],r=YUI.Env.mods,i=t.config.core||[].concat(YUI.Env.core);for(e=0;e<i.length;e++)r[i[e]]&&n.push(i[e]);t._attach(["yui-base"]),t._attach(n),t.Loader&&E(t)},applyTo:function(e,t,n){if(t in f){var r=v[e],i,s,o;if(r){i=t.split("."),s=r;for(o=0;o<i.length;o+=1)s=s[i[o]],s||this.log("applyTo not found: "+t,"warn","yui");return s&&s.apply(r,n)}return null}return this.log(t+": applyTo not allowed","warn","yui"),null},add:function(e,t,n,r){r=r||{};var i=YUI.Env,s={name:e,fn:t,version:n,details:r},o={},u,a,f,l,c=i.versions;i.mods[e]=s,c[n]=c[n]||{},c[n][e]=s;for(l in v)v.hasOwnProperty(l)&&(a=v[l],o[a.id]||(o[a.id]=!0,u=a.Env._loader,u&&(f=u.getModuleInfo(e),(!f||f.temp)&&u.addModule(r,e))));return this},_attach:function(e,t){var n,r,i,s,o,u,a,f=YUI.Env.mods,l=YUI.Env.aliases,c=this,h,p=YUI.Env._renderedMods,d=c.Env._loader,v=c.Env._attached,m=c.Env._exported,g=e.length,d,y,b,w=[],E,S,x,T,N,C,k;for(n=0;n<g;n++){r=e[n],i=f[r],w.push(r);if(d&&d.conditions[r])for(h in d.conditions[r])d.conditions[r].hasOwnProperty(h)&&(y=d.conditions[r][h],b=y&&(y.ua&&c.UA[y.ua]||y.test&&y.test(c)),b&&w.push(y.name))}e=w,g=e.length;for(n=0;n<g;n++)if(!v[e[n]]){r=e[n],i=f[r];if(l&&l[r]&&!i){c._attach(l[r]);continue}if(!i)T=d&&d.getModuleInfo(r),T&&(i=T,t=!0),!t&&r&&r.indexOf("skin-")===-1&&r.indexOf("css")===-1&&(c.Env._missed.push(r),c.Env._missed=c.Array.dedupe(c.Env._missed),c.message("NOT loaded: "+r,"warn","yui"));else{v[r]=!0;for(h=0;h<c.Env._missed.length;h++)c.Env._missed[h]===r&&(c.message("Found: "+r+" (was reported as missing earlier)","warn","yui"),c.Env._missed.splice(h,1));if(d&&!d._canBeAttached(r))return!0;if(d&&p&&p[r]&&p[r].temp){d.getRequires(p[r]),o=[],T=d.getModuleInfo(r);for(h in T.expanded_map)T.expanded_map.hasOwnProperty(h)&&o.push(h);c._attach(o)}s=i.details,o=s.requires,S=s.es,u=s.use,a=s.after,s.lang&&(o=o||[],o.unshift("intl"));if(o){x=o.length;for(h=0;h<x;h++)if(!v[o[h]]){if(!c._attach(o))return!1;break}}if(a)for(h=0;h<a.length;h++)if(!v[a[h]]){if(!c._attach(a,!0))return!1;break}if(i.fn){E=[c,r];if(S){k={},C={},E.push(k,C);if(o){x=o.length;for(h=0;h<x;h++)k[o[h]]=m.hasOwnProperty(o[h])?m[o[h]]:c}}if(c.config.throwFail)C=i.fn
.apply(S?undefined:i,E);else try{C=i.fn.apply(S?undefined:i,E)}catch(L){return c.error("Attach error: "+r,L,r),!1}S&&(m[r]=C,N=i.details.condition,N&&N.when==="instead"&&(m[N.trigger]=C))}if(u)for(h=0;h<u.length;h++)if(!v[u[h]]){if(!c._attach(u))return!1;break}}}return!0},_delayCallback:function(e,t){var n=this,r=["event-base"];return t=n.Lang.isObject(t)?t:{event:t},t.event==="load"&&r.push("event-synthetic"),function(){var i=arguments;n._use(r,function(){n.on(t.event,function(){i[1].delayUntil=t.event,e.apply(n,i)},t.args)})}},use:function(){var e=a.call(arguments,0),t=e[e.length-1],n=this,r=0,i,s=n.Env,o=!0;n.Lang.isFunction(t)?(e.pop(),n.config.delayUntil&&(t=n._delayCallback(t,n.config.delayUntil))):t=null,n.Lang.isArray(e[0])&&(e=e[0]);if(n.config.cacheUse){while(i=e[r++])if(!s._attached[i]){o=!1;break}if(o)return e.length,n._notify(t,x,e),n}return n._loading?(n._useQueue=n._useQueue||new n.Queue,n._useQueue.add([e,t])):n._use(e,function(n,r){n._notify(t,r,e)}),n},require:function(){var e=a.call(arguments),t;typeof e[e.length-1]=="function"&&(t=e.pop(),e.push(function(n){var r,i=e.length,s=n.Env._exported,o={};for(r=0;r<i;r++)s.hasOwnProperty(e[r])&&(o[e[r]]=s[e[r]]);t.call(undefined,n,o)})),this.use.apply(this,e)},_notify:function(e,t,n){if(!t.success&&this.config.loadErrorFn)this.config.loadErrorFn.call(this,this,e,t,n);else if(e){this.Env._missed&&this.Env._missed.length&&(t.msg="Missing modules: "+this.Env._missed.join(),t.success=!1);if(this.config.throwFail)e(this,t);else try{e(this,t)}catch(r){this.error("use callback error",r,n)}}},_use:function(e,t){this.Array||this._attach(["yui-base"]);var r,i,s,o=this,u=YUI.Env,a=u.mods,f=o.Env,l=f._used,c=u.aliases,h=u._loaderQueue,p=e[0],d=o.Array,v=o.config,m=v.bootstrap,g=[],y,b=[],w=!0,S=v.fetchCSS,x=function(e,t){var r=0,i=[],s,o,f,h,p;if(!e.length)return;if(c){o=e.length;for(r=0;r<o;r++)c[e[r]]&&!a[e[r]]?i=[].concat(i,c[e[r]]):i.push(e[r]);e=i}o=e.length;for(r=0;r<o;r++){s=e[r],t||b.push(s);if(l[s])continue;f=a[s],h=null,p=null,f?(l[s]=!0,h=f.details.requires,p=f.details.use):u._loaded[n][s]?l[s]=!0:g.push(s),h&&h.length&&x(h),p&&p.length&&x(p,1)}},T=function(n){var r=n||{success:!0,msg:"not dynamic"},i,s,u=!0,a=r.data;o._loading=!1,a&&(s=g,g=[],b=[],x(a),i=g.length,i&&[].concat(g).sort().join()==s.sort().join()&&(i=!1)),i&&a?(o._loading=!0,o._use(g,function(){o._attach(a)&&o._notify(t,r,a)})):(a&&(u=o._attach(a)),u&&o._notify(t,r,e)),o._useQueue&&o._useQueue.size()&&!o._loading&&o._use.apply(o,o._useQueue.next())};if(p==="*"){e=[];for(y in a)a.hasOwnProperty(y)&&e.push(y);return w=o._attach(e),w&&T(),o}return(a.loader||a["loader-base"])&&!o.Loader&&o._attach(["loader"+(a.loader?"":"-base")]),m&&o.Loader&&e.length&&(i=E(o),i.require(e),i.ignoreRegistered=!0,i._boot=!0,i.calculate(null,S?null:"js"),e=i.sorted,i._boot=!1),x(e),r=g.length,r&&(g=d.dedupe(g),r=g.length),m&&r&&o.Loader?(o._loading=!0,i=E(o),i.onEnd=T,i.context=o,i.data=e,i.ignoreRegistered=!1,i.require(g),i.insert(null,S?null:"js")):m&&r&&o.Get&&!f.bootstrapped?(o._loading=!0,s=function(){o._loading=!1,h.running=!1,f.bootstrapped=!0,u._bootstrapping=!1,o._attach(["loader"])&&o._use(e,t)},u._bootstrapping?h.add(s):(u._bootstrapping=!0,o.Get.script(v.base+v.loaderPath,{onEnd:s}))):(w=o._attach(e),w&&T()),o},namespace:function(){var e=arguments,t,n=0,i,s,o;for(;n<e.length;n++){t=this,o=e[n];if(o.indexOf(r)>-1){s=o.split(r);for(i=s[0]=="YAHOO"?1:0;i<s.length;i++)t[s[i]]=t[s[i]]||{},t=t[s[i]]}else t[o]=t[o]||{},t=t[o]}return t},log:u,message:u,dump:function(e){return""+e},error:function(e,t,n){var r=this,i;r.config.errorFn&&(i=r.config.errorFn.apply(r,arguments));if(!i)throw t||new Error(e);return r.message(e,"error",""+n),r},guid:function(e){var t=this.Env._guidp+"_"+ ++this.Env._uidx;return e?e+t:t},stamp:function(e,t){var n;if(!e)return e;e.uniqueID&&e.nodeType&&e.nodeType!==9?n=e.uniqueID:n=typeof e=="string"?e:e._yuid;if(!n){n=this.guid();if(!t)try{e._yuid=n}catch(r){n=null}}return n},destroy:function(){var e=this;e.Event&&e.Event._unload(),delete v[e.id],delete e.Env,delete e.config}},YUI.prototype=e;for(t in e)e.hasOwnProperty(t)&&(YUI[t]=e[t]);YUI.applyConfig=function(e){if(!e)return;YUI.GlobalConfig&&this.prototype.applyConfig.call(this,YUI.GlobalConfig),this.prototype.applyConfig.call(this,e),YUI.GlobalConfig=this.config},YUI._init(),l?(g(h,"DOMContentLoaded",b),g(window,"load",w)):(b(),w()),YUI.Env.add=g,YUI.Env.remove=y,typeof exports=="object"&&(exports.YUI=YUI,YUI.setLoadHook=function(e){YUI._getLoadHook=e},YUI._getLoadHook=null),YUI.Env[n]={}})(),YUI.add("yui-base",function(e,t){function m(e,t,n){var r,i;t||(t=0);if(n||m.test(e))try{return d.slice.call(e,t)}catch(s){i=[];for(r=e.length;t<r;++t)i.push(e[t]);return i}return[e]}function g(){this._init(),this.add.apply(this,arguments)}var n=e.Lang||(e.Lang={}),r=String.prototype,i=Object.prototype.toString,s={"undefined":"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},o=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,u="	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",a="[	-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+",f=new RegExp("^"+a),l=new RegExp(a+"$"),c=new RegExp(f.source+"|"+l.source,"g"),h=/\{\s*\[(?:native code|function)\]\s*\}/i;n._isNative=function(t){return!!(e.config.useNativeES5&&t&&h.test(t))},n.isArray=n._isNative(Array.isArray)?Array.isArray:function(e){return n.type(e)==="array"},n.isBoolean=function(e){return typeof e=="boolean"},n.isDate=function(e){return n.type(e)==="date"&&e.toString()!=="Invalid Date"&&!isNaN(e)},n.isFunction=function(e){return n.type(e)==="function"},n.isNull=function(e){return e===null},n.isNumber=function(e){return typeof e=="number"&&isFinite(e)},n.isObject=function(e,t){var r=typeof e;return e&&(r==="object"||!t&&(r==="function"||
n.isFunction(e)))||!1},n.isRegExp=function(e){return n.type(e)==="regexp"},n.isString=function(e){return typeof e=="string"},n.isUndefined=function(e){return typeof e=="undefined"},n.isValue=function(e){var t=n.type(e);switch(t){case"number":return isFinite(e);case"null":case"undefined":return!1;default:return!!t}},n.now=Date.now||function(){return(new Date).getTime()},n.sub=function(e,t){return e.replace?e.replace(o,function(e,r){return n.isUndefined(t[r])?e:t[r]}):e},n.trim=n._isNative(r.trim)&&!u.trim()?function(e){return e&&e.trim?e.trim():e}:function(e){try{return e.replace(c,"")}catch(t){return e}},n.trimLeft=n._isNative(r.trimLeft)&&!u.trimLeft()?function(e){return e.trimLeft()}:function(e){return e.replace(f,"")},n.trimRight=n._isNative(r.trimRight)&&!u.trimRight()?function(e){return e.trimRight()}:function(e){return e.replace(l,"")},n.type=function(e){return s[typeof e]||s[i.call(e)]||(e?"object":"null")};var p=e.Lang,d=Array.prototype,v=Object.prototype.hasOwnProperty;e.Array=m,m.dedupe=p._isNative(Object.create)?function(e){var t=Object.create(null),n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],t[i]||(t[i]=1,n.push(i));return n}:function(e){var t={},n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],v.call(t,i)||(t[i]=1,n.push(i));return n},m.each=m.forEach=p._isNative(d.forEach)?function(t,n,r){return d.forEach.call(t||[],n,r||e),e}:function(t,n,r){for(var i=0,s=t&&t.length||0;i<s;++i)i in t&&n.call(r||e,t[i],i,t);return e},m.hash=function(e,t){var n={},r=t&&t.length||0,i,s;for(i=0,s=e.length;i<s;++i)i in e&&(n[e[i]]=r>i&&i in t?t[i]:!0);return n},m.indexOf=p._isNative(d.indexOf)?function(e,t,n){return d.indexOf.call(e,t,n)}:function(e,t,n){var r=e.length;n=+n||0,n=(n>0||-1)*Math.floor(Math.abs(n)),n<0&&(n+=r,n<0&&(n=0));for(;n<r;++n)if(n in e&&e[n]===t)return n;return-1},m.numericSort=function(e,t){return e-t},m.some=p._isNative(d.some)?function(e,t,n){return d.some.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&t.call(n,e[r],r,e))return!0;return!1},m.test=function(e){var t=0;if(p.isArray(e))t=1;else if(p.isObject(e))try{"length"in e&&!e.tagName&&(!e.scrollTo||!e.document)&&!e.apply&&(t=2)}catch(n){}return t},g.prototype={_init:function(){this._q=[]},next:function(){return this._q.shift()},last:function(){return this._q.pop()},add:function(){return this._q.push.apply(this._q,arguments),this},size:function(){return this._q.length}},e.Queue=g,YUI.Env._loaderQueue=YUI.Env._loaderQueue||new g;var y="__",v=Object.prototype.hasOwnProperty,b=e.Lang.isObject;e.cached=function(e,t,n){return t||(t={}),function(r){var i=arguments.length>1?Array.prototype.join.call(arguments,y):String(r);if(!(i in t)||n&&t[i]==n)t[i]=e.apply(e,arguments);return t[i]}},e.getLocation=function(){var t=e.config.win;return t&&t.location},e.merge=function(){var e=0,t=arguments.length,n={},r,i;for(;e<t;++e){i=arguments[e];for(r in i)v.call(i,r)&&(n[r]=i[r])}return n},e.mix=function(t,n,r,i,s,o){var u,a,f,l,c,h,p;if(!t||!n)return t||e;if(s){s===2&&e.mix(t.prototype,n.prototype,r,i,0,o),f=s===1||s===3?n.prototype:n,p=s===1||s===4?t.prototype:t;if(!f||!p)return t}else f=n,p=t;u=r&&!o;if(i)for(l=0,h=i.length;l<h;++l){c=i[l];if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}else{for(c in f){if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}e.Object._hasEnumBug&&e.mix(p,f,r,e.Object._forceEnum,s,o)}return t};var p=e.Lang,v=Object.prototype.hasOwnProperty,w,E=e.Object=p._isNative(Object.create)?function(e){return Object.create(e)}:function(){function e(){}return function(t){return e.prototype=t,new e}}(),S=E._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],x=E._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),T=E._hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),N=E.owns=function(e,t){return!!e&&v.call(e,t)};E.hasKey=N,E.keys=p._isNative(Object.keys)&&!T?Object.keys:function(e){if(!p.isObject(e))throw new TypeError("Object.keys called on a non-object");var t=[],n,r,i;if(T&&typeof e=="function")for(r in e)N(e,r)&&r!=="prototype"&&t.push(r);else for(r in e)N(e,r)&&t.push(r);if(x)for(n=0,i=S.length;n<i;++n)r=S[n],N(e,r)&&t.push(r);return t},E.values=function(e){var t=E.keys(e),n=0,r=t.length,i=[];for(;n<r;++n)i.push(e[t[n]]);return i},E.size=function(e){try{return E.keys(e).length}catch(t){return 0}},E.hasValue=function(t,n){return e.Array.indexOf(E.values(t),n)>-1},E.each=function(t,n,r,i){var s;for(s in t)(i||N(t,s))&&n.call(r||e,t[s],s,t);return e},E.some=function(t,n,r,i){var s;for(s in t)if(i||N(t,s))if(n.call(r||e,t[s],s,t))return!0;return!1},E.getValue=function(t,n){if(!p.isObject(t))return w;var r,i=e.Array(n),s=i.length;for(r=0;t!==w&&r<s;r++)t=t[i[r]];return t},E.setValue=function(t,n,r){var i,s=e.Array(n),o=s.length-1,u=t;if(o>=0){for(i=0;u!==w&&i<o;i++)u=u[s[i]];if(u===w)return w;u[s[i]]=r}return t},E.isEmpty=function(e){return!E.keys(Object(e)).length},YUI.Env.parseUA=function(t){var n=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===1?"":"."}))},r=e.config.win,i=r&&r.navigator,s={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,ubuntu:0,accel:!1,webos:0,caja:i&&i.cajaVersion,secure:!1,os:null,nodejs:0,winjs:typeof Windows!="undefined"&&!!Windows.System,touchEnabled:!1},o=t||i&&i.userAgent,u=r&&r.location,a=u&&u.href,f;return s.userAgent=o,s.secure=a&&a.toLowerCase().indexOf("https")===0,o&&(/windows|win32/i.test(o)?s.os="windows":/macintosh|mac_powerpc/i.test(o)?s.os="macintosh":/android/i.test(o)?s.os="android":/symbos/i.test(o)?s.os="symbos":/linux/i.test(o)?s.os="linux":/rhino/i.test(o)&&(s.os="rhino"),/KHTML/.test(o)&&(s.webkit=1),/IEMobile|XBLWP7/.test(o)&&(s.mobile="windows"),/Fennec/.test(o)&&(s.mobile="gecko"),f=o.match(/AppleWebKit\/([^\s]*)/),f&&f[1]&&(s.
webkit=n(f[1]),s.safari=s.webkit,/PhantomJS/.test(o)&&(f=o.match(/PhantomJS\/([^\s]*)/),f&&f[1]&&(s.phantomjs=n(f[1]))),/ Mobile\//.test(o)||/iPad|iPod|iPhone/.test(o)?(s.mobile="Apple",f=o.match(/OS ([^\s]*)/),f&&f[1]&&(f=n(f[1].replace("_","."))),s.ios=f,s.os="ios",s.ipad=s.ipod=s.iphone=0,f=o.match(/iPad|iPod|iPhone/),f&&f[0]&&(s[f[0].toLowerCase()]=s.ios)):(f=o.match(/NokiaN[^\/]*|webOS\/\d\.\d/),f&&(s.mobile=f[0]),/webOS/.test(o)&&(s.mobile="WebOS",f=o.match(/webOS\/([^\s]*);/),f&&f[1]&&(s.webos=n(f[1]))),/ Android/.test(o)&&(/Mobile/.test(o)&&(s.mobile="Android"),f=o.match(/Android ([^\s]*);/),f&&f[1]&&(s.android=n(f[1]))),/Silk/.test(o)&&(f=o.match(/Silk\/([^\s]*)/),f&&f[1]&&(s.silk=n(f[1])),s.android||(s.android=2.34,s.os="Android"),/Accelerated=true/.test(o)&&(s.accel=!0))),f=o.match(/OPR\/(\d+\.\d+)/),f&&f[1]?s.opera=n(f[1]):(f=o.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),f&&f[1]&&f[2]?(s.chrome=n(f[2]),s.safari=0,f[1]==="CrMo"&&(s.mobile="chrome")):(f=o.match(/AdobeAIR\/([^\s]*)/),f&&(s.air=f[0])))),f=o.match(/Ubuntu\ (\d+\.\d+)/),f&&f[1]&&(s.os="linux",s.ubuntu=n(f[1]),f=o.match(/\ WebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1])),f=o.match(/\ Chromium\/([^\s]*)/),f&&f[1]&&(s.chrome=n(f[1])),/ Mobile$/.test(o)&&(s.mobile="Ubuntu")),s.webkit||(/Opera/.test(o)?(f=o.match(/Opera[\s\/]([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),f=o.match(/Version\/([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),/Opera Mobi/.test(o)&&(s.mobile="opera",f=o.replace("Opera Mobi","").match(/Opera ([^\s]*)/),f&&f[1]&&(s.opera=n(f[1]))),f=o.match(/Opera Mini[^;]*/),f&&(s.mobile=f[0])):(f=o.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/),f&&(f[1]||f[2])?s.ie=n(f[1]||f[2]):(f=o.match(/Gecko\/([^\s]*)/),f&&(s.gecko=1,f=o.match(/rv:([^\s\)]*)/),f&&f[1]&&(s.gecko=n(f[1]),/Mobile|Tablet/.test(o)&&(s.mobile="ffos"))))))),r&&i&&!(s.chrome&&s.chrome<6)&&(s.touchEnabled="ontouchstart"in r||"msMaxTouchPoints"in i&&i.msMaxTouchPoints>0),t||(typeof process=="object"&&process.versions&&process.versions.node&&(s.os=process.platform,s.nodejs=n(process.versions.node)),YUI.Env.UA=s),s},e.UA=YUI.Env.UA||YUI.Env.parseUA(),e.UA.compareVersions=function(e,t){var n,r,i,s,o,u;if(e===t)return 0;r=(e+"").split("."),s=(t+"").split(".");for(o=0,u=Math.max(r.length,s.length);o<u;++o){n=parseInt(r[o],10),i=parseInt(s[o],10),isNaN(n)&&(n=0),isNaN(i)&&(i=0);if(n<i)return-1;if(n>i)return 1}return 0},YUI.Env.aliases={anim:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"anim-shape-transform":["anim-shape"],app:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"],attribute:["attribute-base","attribute-complex"],"attribute-events":["attribute-observable"],autocomplete:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],axes:["axis-numeric","axis-category","axis-time","axis-stacked"],"axes-base":["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"],base:["base-base","base-pluginhost","base-build"],cache:["cache-base","cache-offline","cache-plugin"],charts:["charts-base"],collection:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],color:["color-base","color-hsl","color-harmony"],controller:["router"],dataschema:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],datasource:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],datatable:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],datatype:["datatype-date","datatype-number","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format","datatype-date-math"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],dd:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],dom:["dom-base","dom-screen","dom-style","selector-native","selector"],editor:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],event:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],handlebars:["handlebars-compiler"],highlight:["highlight-base","highlight-accentfold"],history:["history-base","history-hash","history-html5"],io:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],json:["json-parse","json-stringify"],loader:["loader-base","loader-rollup","loader-yui3"],node:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],pluginhost:["pluginhost-base","pluginhost-config"],querystring:["querystring-parse","querystring-stringify"],recordset:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],resize:["resize-base","resize-proxy","resize-constrain"],slider:["slider-base","slider-value-range","clickable-rail","range-slider"],template:["template-base","template-micro"],text:["text-accentfold","text-wordbreak"],widget:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]}},"3.17.2",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]}),YUI.add("get",function(e,t){var n=e.Lang,r,i,s;e.Get=i={cssOptions:{attributes:{rel:"stylesheet"},doc:e.config.linkDoc||e.config.doc,pollInterval:50},jsOptions:{autopurge:!0,doc:e.config.scriptDoc||e.config.doc},options
:{attributes:{charset:"utf-8"},purgethreshold:20},REGEX_CSS:/\.css(?:[?;].*)?$/i,REGEX_JS:/\.js(?:[?;].*)?$/i,_insertCache:{},_pending:null,_purgeNodes:[],_queue:[],abort:function(e){var t,n,r,i,s;if(!e.abort){n=e,s=this._pending,e=null;if(s&&s.transaction.id===n)e=s.transaction,this._pending=null;else for(t=0,i=this._queue.length;t<i;++t){r=this._queue[t].transaction;if(r.id===n){e=r,this._queue.splice(t,1);break}}}e&&e.abort()},css:function(e,t,n){return this._load("css",e,t,n)},js:function(e,t,n){return this._load("js",e,t,n)},load:function(e,t,n){return this._load(null,e,t,n)},_autoPurge:function(e){e&&this._purgeNodes.length>=e&&this._purge(this._purgeNodes)},_getEnv:function(){var t=e.config.doc,n=e.UA;return this._env={async:t&&t.createElement("script").async===!0||n.ie>=10,cssFail:n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0,cssLoad:(!n.gecko&&!n.webkit||n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0)&&!(n.chrome&&n.chrome<=18),preservesScriptOrder:!!(n.gecko||n.opera||n.ie&&n.ie>=10)}},_getTransaction:function(t,r){var i=[],o,u,a,f;n.isArray(t)||(t=[t]),r=e.merge(this.options,r),r.attributes=e.merge(this.options.attributes,r.attributes);for(o=0,u=t.length;o<u;++o){f=t[o],a={attributes:{}};if(typeof f=="string")a.url=f;else{if(!f.url)continue;e.mix(a,f,!1,null,0,!0),f=f.url}e.mix(a,r,!1,null,0,!0),a.type||(this.REGEX_CSS.test(f)?a.type="css":(!this.REGEX_JS.test(f),a.type="js")),e.mix(a,a.type==="js"?this.jsOptions:this.cssOptions,!1,null,0,!0),a.attributes.id||(a.attributes.id=e.guid()),a.win?a.doc=a.win.document:a.win=a.doc.defaultView||a.doc.parentWindow,a.charset&&(a.attributes.charset=a.charset),i.push(a)}return new s(i,r)},_load:function(e,t,n,r){var s;return typeof n=="function"&&(r=n,n={}),n||(n={}),n.type=e,n._onFinish=i._onTransactionFinish,this._env||this._getEnv(),s=this._getTransaction(t,n),this._queue.push({callback:r,transaction:s}),this._next(),s},_onTransactionFinish:function(){i._pending=null,i._next()},_next:function(){var e;if(this._pending)return;e=this._queue.shift(),e&&(this._pending=e,e.transaction.execute(e.callback))},_purge:function(t){var n=this._purgeNodes,r=t!==n,i,s;while(s=t.pop()){if(!s._yuiget_finished)continue;s.parentNode&&s.parentNode.removeChild(s),r&&(i=e.Array.indexOf(n,s),i>-1&&n.splice(i,1))}}},i.script=i.js,i.Transaction=s=function(t,n){var r=this;r.id=s._lastId+=1,r.data=n.data,r.errors=[],r.nodes=[],r.options=n,r.requests=t,r._callbacks=[],r._queue=[],r._reqsWaiting=0,r.tId=r.id,r.win=n.win||e.config.win},s._lastId=0,s.prototype={_state:"new",abort:function(e){this._pending=null,this._pendingCSS=null,this._pollTimer=clearTimeout(this._pollTimer),this._queue=[],this._reqsWaiting=0,this.errors.push({error:e||"Aborted"}),this._finish()},execute:function(e){var t=this,n=t.requests,r=t._state,i,s,o,u;if(r==="done"){e&&e(t.errors.length?t.errors:null,t);return}e&&t._callbacks.push(e);if(r==="executing")return;t._state="executing",t._queue=o=[],t.options.timeout&&(t._timeout=setTimeout(function(){t.abort("Timeout")},t.options.timeout)),t._reqsWaiting=n.length;for(i=0,s=n.length;i<s;++i)u=n[i],u.async||u.type==="css"?t._insert(u):o.push(u);t._next()},purge:function(){i._purge(this.nodes)},_createNode:function(e,t,n){var i=n.createElement(e),s,o;r||(o=n.createElement("div"),o.setAttribute("class","a"),r=o.className==="a"?{}:{"for":"htmlFor","class":"className"});for(s in t)t.hasOwnProperty(s)&&i.setAttribute(r[s]||s,t[s]);return i},_finish:function(){var e=this.errors.length?this.errors:null,t=this.options,n=t.context||this,r,i,s;if(this._state==="done")return;this._state="done";for(i=0,s=this._callbacks.length;i<s;++i)this._callbacks[i].call(n,e,this);r=this._getEventData(),e?(t.onTimeout&&e[e.length-1].error==="Timeout"&&t.onTimeout.call(n,r),t.onFailure&&t.onFailure.call(n,r)):t.onSuccess&&t.onSuccess.call(n,r),t.onEnd&&t.onEnd.call(n,r),t._onFinish&&t._onFinish()},_getEventData:function(t){return t?e.merge(this,{abort:this.abort,purge:this.purge,request:t,url:t.url,win:t.win}):this},_getInsertBefore:function(t){var n=t.doc,r=t.insertBefore,s,o;return r?typeof r=="string"?n.getElementById(r):r:(s=i._insertCache,o=e.stamp(n),(r=s[o])?r:(r=n.getElementsByTagName("base")[0])?s[o]=r:(r=n.head||n.getElementsByTagName("head")[0],r?(r.appendChild(n.createTextNode("")),s[o]=r.lastChild):s[o]=n.getElementsByTagName("script")[0]))},_insert:function(t){function c(){u._progress("Failed to load "+t.url,t)}function h(){f&&clearTimeout(f),u._progress(null,t)}var n=i._env,r=this._getInsertBefore(t),s=t.type==="js",o=t.node,u=this,a=e.UA,f,l;o||(s?l="script":!n.cssLoad&&a.gecko?l="style":l="link",o=t.node=this._createNode(l,t.attributes,t.doc)),s?(o.setAttribute("src",t.url),t.async?o.async=!0:(n.async&&(o.async=!1),n.preservesScriptOrder||(this._pending=t))):!n.cssLoad&&a.gecko?o.innerHTML=(t.attributes.charset?'@charset "'+t.attributes.charset+'";':"")+'@import "'+t.url+'";':o.setAttribute("href",t.url),s&&a.ie&&(a.ie<9||document.documentMode&&document.documentMode<9)?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,h())}:!s&&!n.cssLoad?this._poll(t):(a.ie>=10?(o.onerror=function(){setTimeout(c,0)},o.onload=function(){setTimeout(h,0)}):(o.onerror=c,o.onload=h),!n.cssFail&&!s&&(f=setTimeout(c,t.timeout||3e3))),this.nodes.push(o),r.parentNode.insertBefore(o,r)},_next:function(){if(this._pending)return;this._queue.length?this._insert(this._queue.shift()):this._reqsWaiting||this._finish()},_poll:function(t){var n=this,r=n._pendingCSS,i=e.UA.webkit,s,o,u,a,f,l;if(t){r||(r=n._pendingCSS=[]),r.push(t);if(n._pollTimer)return}n._pollTimer=null;for(s=0;s<r.length;++s){f=r[s];if(i){l=f.doc.styleSheets,u=l.length,a=f.node.href;while(--u>=0)if(l[u].href===a){r.splice(s,1),s-=1,n._progress(null,f);break}}else try{o=!!f.node.sheet.cssRules,r.splice(s,1),s-=1,n._progress(null,f)}catch(c){}}r.length&&(n._pollTimer=setTimeout(function(){n._poll.call(n)},n.options.pollInterval))},_progress:function(e,t){var n=this.options
;e&&(t.error=e,this.errors.push({error:e,request:t})),t.node._yuiget_finished=t.finished=!0,n.onProgress&&n.onProgress.call(n.context||this,this._getEventData(t)),t.autopurge&&(i._autoPurge(this.options.purgethreshold),i._purgeNodes.push(t.node)),this._pending===t&&(this._pending=null),this._reqsWaiting-=1,this._next()}}},"3.17.2",{requires:["yui-base"]}),YUI.add("features",function(e,t){var n={};e.mix(e.namespace("Features"),{tests:n,add:function(e,t,r){n[e]=n[e]||{},n[e][t]=r},all:function(t,r){var i=n[t],s=[];return i&&e.Object.each(i,function(n,i){s.push(i+":"+(e.Features.test(t,i,r)?1:0))}),s.length?s.join(";"):""},test:function(t,r,i){i=i||[];var s,o,u,a=n[t],f=a&&a[r];return!f||(s=f.result,e.Lang.isUndefined(s)&&(o=f.ua,o&&(s=e.UA[o]),u=f.test,u&&(!o||s)&&(s=u.apply(e,i)),f.result=s)),s}});var r=e.Features.add;r("load","0",{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"}),r("load","1",{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"}),r("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),r("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"}),r("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),r("load","5",{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"}),r("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","10",{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","11",{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),r("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),r("load","14",{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"}),r("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"}),r("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),r("load","17",{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"}),r("load","18",{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"}),r("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),r("load","20",{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"}),r("load","21",{name:"yql-nodejs",trigger:"yql",ua:"nodejs"}),r("load","22",{name:"yql-winjs",trigger:"yql",ua:"winjs"})},"3.17.2",{requires:["yui-base"]}),YUI.add("intl-base",function(e,t){var n=/[, ]/;e.mix(e.namespace("Intl"),{lookupBestLang:function(t,r){function a(e){var t;for(t=0;t<r.length;t+=1)if(e.toLowerCase()===r[t].toLowerCase())return r[t]}var i,s,o,u;e.Lang.isString(t)&&(t=t.split(n));for(i=0;i<t.length;i+=1){s=t[i];if(!s||s==="*")continue;while(s.length>0){o=a(s);if(o)return o;u=s.lastIndexOf("-");if(!(u>=0))break;s=s.substring(0,u),u>=2&&s.charAt(u-2)==="-"&&(s=s.substring(0,u-2))}}return""}})},"3.17.2",{requires:["yui-base"]}),YUI.add("yui-log",function(e,t){var n=e,r="yui:log",i="undefined",s={debug:1,info:2,warn:4,error:8};n.log=function(e,t,o,u){var a,f,l,c,h,p,d=n,v=d.config,m=d.fire?d:YUI.Env
.globalEvents;return v.debug&&(o=o||"",typeof o!="undefined"&&(f=v.logExclude,l=v.logInclude,!l||o in l?l&&o in l?a=!l[o]:f&&o in f&&(a=f[o]):a=1,typeof t=="undefined"&&(t="info"),d.config.logLevel=d.config.logLevel||"debug",p=s[d.config.logLevel.toLowerCase()],t in s&&s[t]<p&&(a=1)),a||(v.useBrowserConsole&&(c=o?o+": "+e:e,d.Lang.isFunction(v.logFn)?v.logFn.call(d,e,t,o):typeof console!==i&&console.log?(h=t&&console[t]&&t in s?t:"log",console[h](c)):typeof opera!==i&&opera.postError(c)),m&&!u&&(m===d&&!m.getEvent(r)&&m.publish(r,{broadcast:2}),m.fire(r,{msg:e,cat:t,src:o})))),d},n.message=function(){return n.log.apply(n,arguments)}},"3.17.2",{requires:["yui-base"]}),YUI.add("yui-later",function(e,t){var n=[];e.later=function(t,r,i,s,o){t=t||0,s=e.Lang.isUndefined(s)?n:e.Array(s),r=r||e.config.win||e;var u=!1,a=r&&e.Lang.isString(i)?r[i]:i,f=function(){u||(a.apply?a.apply(r,s||n):a(s[0],s[1],s[2],s[3]))},l=o?setInterval(f,t):setTimeout(f,t);return{id:l,interval:o,cancel:function(){u=!0,this.interval?clearInterval(l):clearTimeout(l)}}},e.Lang.later=e.later},"3.17.2",{requires:["yui-base"]}),YUI.add("loader-base",function(e,t){(function(){var t=e.version,n="/build/",r=t+"/",i=e.Env.base,s="gallery-2014.05.29-15-46",o="2in3",u="4",a="2.9.0",f=i+"combo?",l={version:t,root:r,base:e.Env.base,comboBase:f,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},c=l.groups,h=function(e,t,r){var s=o+"."+(e||u)+"/"+(t||a)+n,l=r&&r.base?r.base:i,h=r&&r.comboBase?r.comboBase:f;c.yui2.base=l+s,c.yui2.root=s,c.yui2.comboBase=h},p=function(e,t){var r=(e||s)+n,o=t&&t.base?t.base:i,u=t&&t.comboBase?t.comboBase:f;c.gallery.base=o+r,c.gallery.root=r,c.gallery.comboBase=u};c[t]={},c.gallery={ext:!1,combine:!0,comboBase:f,update:p,patterns:{"gallery-":{},"lang/gallery-":{},"gallerycss-":{type:"css"}}},c.yui2={combine:!0,ext:!1,comboBase:f,update:h,patterns:{"yui2-":{configFn:function(e){/-skin|reset|fonts|grids|base/.test(e.name)&&(e.type="css",e.path=e.path.replace(/\.js/,".css"),e.path=e.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin"))}}}},p(),h(),YUI.Env[t]&&e.mix(l,YUI.Env[t],!1,["modules","groups","skin"],0,!0),YUI.Env[t]=l})();var n={},r=[],i=1024,s=YUI.Env,o=s._loaded,u="css",a="js",f="intl",l="sam",c=e.version,h="",p=e.Object,d=p.each,v=e.Array,m=s._loaderQueue,g=s[c],y="skin-",b=e.Lang,w=s.mods,E,S=function(e,t,n,r){var i=e+"/"+t;return r||(i+="-min"),i+="."+(n||u),i};YUI.Env._cssLoaded||(YUI.Env._cssLoaded={}),e.Env.meta=g,e.Loader=function(t){var n=this;t=t||{},E=g.md5,n.context=e,t.doBeforeLoader&&t.doBeforeLoader.apply(n,arguments),n.base=e.Env.meta.base+e.Env.meta.root,n.comboBase=e.Env.meta.comboBase,n.combine=t.base&&t.base.indexOf(n.comboBase.substr(0,20))>-1,n.comboSep="&",n.maxURLLength=i,n.ignoreRegistered=t.ignoreRegistered,n.root=e.Env.meta.root,n.timeout=0,n.forceMap={},n.allowRollup=!1,n.filters={},n.required={},n.patterns={},n.moduleInfo={},n.groups=e.merge(e.Env.meta.groups),n.skin=e.merge(e.Env.meta.skin),n.conditions={},n.config=t,n._internal=!0,n._populateConditionsCache(),n.loaded=o[c],n.async=!0,n._inspectPage(),n._internal=!1,n._config(t),n.forceMap=n.force?e.Array.hash(n.force):{},n.testresults=null,e.config.tests&&(n.testresults=e.config.tests),n.sorted=[],n.dirty=!0,n.inserted={},n.skipped={},n.tested={},n.ignoreRegistered&&n._resetModules()},e.Loader.prototype={getModuleInfo:function(t){var n=this.moduleInfo[t],r,i,o,a;return n?n:(r=g.modules,i=s._renderedMods,o=this._internal,i&&i.hasOwnProperty(t)&&!this.ignoreRegistered?this.moduleInfo[t]=e.merge(i[t]):r.hasOwnProperty(t)&&(this._internal=!0,a=this.addModule(r[t],t),a&&a.type===u&&this.isCSSLoaded(a.name,!0)&&(this.loaded[a.name]=!0),this._internal=o),this.moduleInfo[t])},_expandAliases:function(t){var n=[],r=YUI.Env.aliases,i,s;t=e.Array(t);for(i=0;i<t.length;i+=1)s=t[i],n.push.apply(n,r[s]?r[s]:[s]);return n},_populateConditionsCache:function(){var t=g.modules,n=s._conditions,r,i,o,u;if(n&&!this.ignoreRegistered)for(r in n)n.hasOwnProperty(r)&&(this.conditions[r]=e.merge(n[r]));else{for(r in t)if(t.hasOwnProperty(r)&&t[r].condition){o=this._expandAliases(t[r].condition.trigger);for(i=0;i<o.length;i+=1)u=o[i],this.conditions[u]=this.conditions[u]||{},this.conditions[u][t[r].name||r]=t[r].condition}s._conditions=this.conditions}},_resetModules:function(){var e=this,t,n,r,i,s;for(t in e.moduleInfo)if(e.moduleInfo.hasOwnProperty(t)&&e.moduleInfo[t]){r=e.moduleInfo[t],i=r.name,s=YUI.Env.mods[i]?YUI.Env.mods[i].details:null,s&&(e.moduleInfo[i]._reset=!0,e.moduleInfo[i].requires=s.requires||[],e.moduleInfo[i].optional=s.optional||[],e.moduleInfo[i].supersedes=s.supercedes||[]);if(r.defaults)for(n in r.defaults)r.defaults.hasOwnProperty(n)&&r[n]&&(r[n]=r.defaults[n]);r.langCache=undefined,r.skinCache=undefined,r.skinnable&&e._addSkin(e.skin.defaultSkin,r.name)}},REGEX_CSS:/\.css(?:[?;].*)?$/i,FILTER_DEFS:{RAW:{searchExp:"-min\\.js",replaceStr:".js"},DEBUG:{searchExp:"-min\\.js",replaceStr:"-debug.js"},COVERAGE:{searchExp:"-min\\.js",replaceStr:"-coverage.js"}},_inspectPage:function(){var e=this,t,n,r,i,s;for(s in w)w.hasOwnProperty(s)&&(t=w[s],t.details&&(n=e.getModuleInfo(t.name),r=t.details.requires,i=n&&n.requires,n?!n._inspected&&r&&i.length!==r.length&&delete n.expanded:n=e.addModule(t.details,s),n._inspected=!0))},_requires:function(e,t){var n,r,i,s,o=this.getModuleInfo(e),a=this.getModuleInfo(t);if(!o||!a)return!1;r=o.expanded_map,i=o.after_map;if(i&&t in i)return!0;i=a.after_map;if(i&&e in i)return!1;s=a.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(e,s[n]))return!0;s=o.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(t,s[n]))return!1;return r&&t in r?!0:o.ext&&o.type===u&&!a.ext&&a.type===u?!0:!1},_config:function(t){var n,r,i,s,o,u,a,f=this,l=[],c,h;if(t)for(n in t)if(t.hasOwnProperty(n)){i=t[n];if(n==="require")f.require(i);else if(n==="skin")typeof i=="string"&&(f.skin.defaultSkin=
t.skin,i={defaultSkin:i}),e.mix(f.skin,i,!0);else if(n==="groups"){for(r in i)if(i.hasOwnProperty(r)){a=r,u=i[r],f.addGroup(u,a);if(u.aliases)for(s in u.aliases)u.aliases.hasOwnProperty(s)&&f.addAlias(u.aliases[s],s)}}else if(n==="modules")for(r in i)i.hasOwnProperty(r)&&f.addModule(i[r],r);else if(n==="aliases")for(r in i)i.hasOwnProperty(r)&&f.addAlias(i[r],r);else n==="gallery"?this.groups.gallery.update&&this.groups.gallery.update(i,t):n==="yui2"||n==="2in3"?this.groups.yui2.update&&this.groups.yui2.update(t["2in3"],t.yui2,t):f[n]=i}o=f.filter,b.isString(o)&&(o=o.toUpperCase(),f.filterName=o,f.filter=f.FILTER_DEFS[o],o==="DEBUG"&&f.require("yui-log","dump"));if(f.filterName&&f.coverage&&f.filterName==="COVERAGE"&&b.isArray(f.coverage)&&f.coverage.length){for(n=0;n<f.coverage.length;n++)c=f.coverage[n],h=f.getModuleInfo(c),h&&h.use?l=l.concat(h.use):l.push(c);f.filters=f.filters||{},e.Array.each(l,function(e){f.filters[e]=f.FILTER_DEFS.COVERAGE}),f.filterName="RAW",f.filter=f.FILTER_DEFS[f.filterName]}},formatSkin:function(e,t){var n=y+e;return t&&(n=n+"-"+t),n},_addSkin:function(e,t,n){var r,i,s,o=this.skin,u=t&&this.getModuleInfo(t),a=u&&u.ext;return t&&(i=this.formatSkin(e,t),this.getModuleInfo(i)||(r=u.pkg||t,s={skin:!0,name:i,group:u.group,type:"css",after:o.after,path:(n||r)+"/"+o.base+e+"/"+t+".css",ext:a},u.base&&(s.base=u.base),u.configFn&&(s.configFn=u.configFn),this.addModule(s,i))),i},addAlias:function(e,t){YUI.Env.aliases[t]=e,this.addModule({name:t,use:e})},addGroup:function(e,t){var n=e.modules,r=this,i,s;t=t||e.name,e.name=t,r.groups[t]=e;if(e.patterns)for(i in e.patterns)e.patterns.hasOwnProperty(i)&&(e.patterns[i].group=t,r.patterns[i]=e.patterns[i]);if(n)for(i in n)n.hasOwnProperty(i)&&(s=n[i],typeof s=="string"&&(s={name:i,fullpath:s}),s.group=t,r.addModule(s,i))},addModule:function(t,n){n=n||t.name,typeof t=="string"&&(t={name:n,fullpath:t});var r,i,o,f,l,c,p,d,m,g,y,b,w,E,x,T,N,C,k,L,A,O,M=this.moduleInfo[n],_=this.conditions,D;M&&M.temp&&(t=e.merge(M,t)),t.name=n;if(!t||!t.name)return null;t.type||(t.type=a,O=t.path||t.fullpath,O&&this.REGEX_CSS.test(O)&&(t.type=u)),!t.path&&!t.fullpath&&(t.path=S(n,n,t.type)),t.supersedes=t.supersedes||t.use,t.ext="ext"in t?t.ext:this._internal?!1:!0,r=t.submodules,this.moduleInfo[n]=t,t.requires=t.requires||[];if(this.requires)for(i=0;i<this.requires.length;i++)t.requires.push(this.requires[i]);if(t.group&&this.groups&&this.groups[t.group]){A=this.groups[t.group];if(A.requires)for(i=0;i<A.requires.length;i++)t.requires.push(A.requires[i])}t.defaults||(t.defaults={requires:t.requires?[].concat(t.requires):null,supersedes:t.supersedes?[].concat(t.supersedes):null,optional:t.optional?[].concat(t.optional):null}),t.skinnable&&t.ext&&t.temp&&(k=this._addSkin(this.skin.defaultSkin,n),t.requires.unshift(k)),t.requires.length&&(t.requires=this.filterRequires(t.requires)||[]);if(!t.langPack&&t.lang){y=v(t.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b))}if(r){l=t.supersedes||[],o=0;for(i in r)if(r.hasOwnProperty(i)){c=r[i],c.path=c.path||S(n,i,t.type),c.pkg=n,c.group=t.group,c.supersedes&&(l=l.concat(c.supersedes)),p=this.addModule(c,i),l.push(i);if(p.skinnable){t.skinnable=!0,C=this.skin.overrides;if(C&&C[i])for(g=0;g<C[i].length;g++)k=this._addSkin(C[i][g],i,n),l.push(k);k=this._addSkin(this.skin.defaultSkin,i,n),l.push(k)}if(c.lang&&c.lang.length){y=v(c.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),w=this.getLangPackName(T,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),E=E||v.hash(p.supersedes),w in E||p.supersedes.push(w),t.lang=t.lang||[],x=x||v.hash(t.lang),T in x||t.lang.push(T),b=this.getLangPackName(h,n),w=this.getLangPackName(h,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),w in E||p.supersedes.push(w)}o++}t.supersedes=v.dedupe(l),this.allowRollup&&(t.rollup=o<4?o:Math.min(o-1,4))}d=t.plugins;if(d)for(i in d)d.hasOwnProperty(i)&&(m=d[i],m.pkg=n,m.path=m.path||S(n,i,t.type),m.requires=m.requires||[],m.group=t.group,this.addModule(m,i),t.skinnable&&this._addSkin(this.skin.defaultSkin,i,n));if(t.condition){f=this._expandAliases(t.condition.trigger);for(i=0;i<f.length;i++)D=f[i],L=t.condition.when,_[D]=_[D]||{},_[D][n]=t.condition,L&&L!=="after"?L==="instead"&&(t.supersedes=t.supersedes||[],t.supersedes.push(D)):(t.after=t.after||[],t.after.push(D))}return t.supersedes&&(t.supersedes=this.filterRequires(t.supersedes)),t.after&&(t.after=this.filterRequires(t.after),t.after_map=v.hash(t.after)),t.configFn&&(N=t.configFn(t),N===!1&&(delete this.moduleInfo[n],delete s._renderedMods[n],t=null)),t&&(s._renderedMods||(s._renderedMods={}),s._renderedMods[n]=e.mix(s._renderedMods[n]||{},t),s._conditions=_),t},require:function(t){var n=typeof t=="string"?v(arguments):t;this.dirty=!0,this.required=e.merge(this.required,v.hash(this.filterRequires(n))),this._explodeRollups()},_explodeRollups:function(){var e=this,t,n,r,i,s,o,u,a=e.required;if(!e.allowRollup){for(r in a)if(a.hasOwnProperty(r)){t=e.getModule(r);if(t&&t.use){o=t.use.length;for(i=0;i<o;i++){n=e.getModule(t.use[i]);if(n&&n.use){u=n.use.length;for(s=0;s<u;s++)a[n.use[s]]=!0}else a[t.use[i]]=!0}}}e.required=a}},filterRequires:function(t){if(t){e.Lang.isArray(t)||(t=[t]),t=e.Array(t);var n=[],r,i,s,o;for(r=0;r<t.length;r++){i=this.getModule(t[r]);if(i&&i.use)for(s=0;s<i.use.length;s++)o=this.getModule(i.use[s]),o&&o.use&&o.name!==i.name?n=e.Array.dedupe([].concat(n,this.filterRequires(o.use))):n.push(i.use[s]);else n.push(t[r])}t=n}return t},_canBeAttached:function(t){return t=this.getModule(t),t&&t.test?(t.hasOwnProperty("_testResult")||(t._testResult=t.test(e)),t._testResult):!0},getRequires:function(t){if(!t)return r;if(t._parsed)return t.expanded||r;var n,i,s,o,u,a,l,c=this.testresults,m=t.name,g,y=w[m]&&w[m].details,b=t.optionalRequires,E,S,x,T,N,C,k,L,A,O,M=t.lang||t.intl,_=e.Features&&e.Features.tests.load,D,P;t.temp&&y&&(N=t,t=this.addModule(y,m),t.group=N.group,t.pkg=
N.pkg,delete t.expanded),P=!!this.lang&&t.langCache!==this.lang||t.skinCache!==this.skin.defaultSkin;if(t.expanded&&!P)return t.expanded;if(b)for(n=0,o=b.length;n<o;n++)this._canBeAttached(b[n])&&t.requires.push(b[n]);E=[],D={},T=this.filterRequires(t.requires),t.lang&&(E.unshift("intl"),T.unshift("intl"),M=!0),C=this.filterRequires(t.optional),t._parsed=!0,t.langCache=this.lang,t.skinCache=this.skin.defaultSkin;for(n=0;n<T.length;n++)if(!D[T[n]]){E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}T=this.filterRequires(t.supersedes);if(T)for(n=0;n<T.length;n++)if(!D[T[n]]){t.submodules&&E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}if(C&&this.loadOptional)for(n=0;n<C.length;n++)if(!D[C[n]]){E.push(C[n]),D[C[n]]=!0,i=this.getModuleInfo(C[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}g=this.conditions[m];if(g){t._parsed=!1;if(c&&_)d(c,function(e,t){var n=_[t].name;!D[n]&&_[t].trigger===m&&e&&_[t]&&(D[n]=!0,E.push(n))});else for(n in g)if(g.hasOwnProperty(n)&&!D[n]){x=g[n],S=x&&(!x.ua&&!x.test||x.ua&&e.UA[x.ua]||x.test&&x.test(e,T));if(S){D[n]=!0,E.push(n),i=this.getModule(n);if(i){u=this.getRequires(i);for(s=0;s<u.length;s++)E.push(u[s])}}}}if(t.skinnable){L=this.skin.overrides;for(n in YUI.Env.aliases)YUI.Env.aliases.hasOwnProperty(n)&&e.Array.indexOf(YUI.Env.aliases[n],m)>-1&&(A=n);if(L&&(L[m]||A&&L[A])){O=m,L[A]&&(O=A);for(n=0;n<L[O].length;n++)k=this._addSkin(L[O][n],m),this.isCSSLoaded(k,this._boot)||E.push(k)}else k=this._addSkin(this.skin.defaultSkin,m),this.isCSSLoaded(k,this._boot)||E.push(k)}return t._parsed=!1,M&&(t.lang&&!t.langPack&&e.Intl&&(l=e.Intl.lookupBestLang(this.lang||h,t.lang),a=this.getLangPackName(l,m),a&&E.unshift(a)),E.unshift(f)),t.expanded_map=v.hash(E),t.expanded=p.keys(t.expanded_map),t.expanded},isCSSLoaded:function(t,n){if(!t||!YUI.Env.cssStampEl||!n&&this.ignoreRegistered)return!1;var r=YUI.Env.cssStampEl,i=!1,s=YUI.Env._cssLoaded[t],o=r.currentStyle;return s!==undefined?s:(r.className=t,o||(o=e.config.doc.defaultView.getComputedStyle(r,null)),o&&o.display==="none"&&(i=!0),r.className="",YUI.Env._cssLoaded[t]=i,i)},getProvides:function(t){var r=this.getModule(t),i,s;return r?(r&&!r.provides&&(i={},s=r.supersedes,s&&v.each(s,function(t){e.mix(i,this.getProvides(t))},this),i[t]=!0,r.provides=i),r.provides):n},calculate:function(e,t){if(e||t||this.dirty)e&&this._config(e),this._init||this._setup(),this._explode(),this.allowRollup?this._rollup():this._explodeRollups(),this._reduce(),this._sort()},_addLangPack:function(t,n,r){var i=n.name,s,o,u=this.getModuleInfo(r);return u||(s=S(n.pkg||i,r,a,!0),o={path:s,intl:!0,langPack:!0,ext:n.ext,group:n.group,supersedes:[]},n.root&&(o.root=n.root),n.base&&(o.base=n.base),n.configFn&&(o.configFn=n.configFn),this.addModule(o,r),t&&(e.Env.lang=e.Env.lang||{},e.Env.lang[t]=e.Env.lang[t]||{},e.Env.lang[t][i]=!0)),this.getModuleInfo(r)},_setup:function(){var t=this.moduleInfo,n,r,i,o,u,a;for(n in t)t.hasOwnProperty(n)&&(o=t[n],o&&(o.requires=v.dedupe(o.requires),o.lang&&(a=this.getLangPackName(h,n),this._addLangPack(null,o,a))));u={},this.ignoreRegistered||e.mix(u,s.mods),this.ignore&&e.mix(u,v.hash(this.ignore));for(i in u)u.hasOwnProperty(i)&&e.mix(u,this.getProvides(i));if(this.force)for(r=0;r<this.force.length;r++)this.force[r]in u&&delete u[this.force[r]];e.mix(this.loaded,u),this._init=!0},getLangPackName:function(e,t){return"lang/"+t+(e?"_"+e:"")},_explode:function(){var t=this.required,n,r,i={},s=this,o,u;s.dirty=!1,s._explodeRollups(),t=s.required;for(o in t)t.hasOwnProperty(o)&&(i[o]||(i[o]=!0,n=s.getModule(o),n&&(u=n.expound,u&&(t[u]=s.getModule(u),r=s.getRequires(t[u]),e.mix(t,v.hash(r))),r=s.getRequires(n),e.mix(t,v.hash(r)))))},_patternTest:function(e,t){return e.indexOf(t)>-1},getModule:function(t){if(!t)return null;var n,r,i,s=this.getModuleInfo(t),o=this.patterns;if(!s||s&&s.ext)for(i in o)if(o.hasOwnProperty(i)){n=o[i],n.test||(n.test=this._patternTest);if(n.test(t,i)){r=n;break}}return s?r&&s&&r.configFn&&!s.configFn&&(s.configFn=r.configFn,s.configFn(s)):r&&(n.action?n.action.call(this,t,i):(s=this.addModule(e.merge(r,{test:void 0,temp:!0}),t),r.configFn&&(s.configFn=r.configFn))),s},_rollup:function(){},_reduce:function(e){e=e||this.required;var t,n,r,i,s=this.loadType,o=this.ignore?v.hash(this.ignore):!1;for(t in e)if(e.hasOwnProperty(t)){i=this.getModule(t),((this.loaded[t]||w[t])&&!this.forceMap[t]&&!this.ignoreRegistered||s&&i&&i.type!==s)&&delete e[t],o&&o[t]&&delete e[t],r=i&&i.supersedes;if(r)for(n=0;n<r.length;n++)r[n]in e&&delete e[r[n]]}return e},_finish:function(e,t){m.running=!1;var n=this.onEnd;n&&n.call(this.context,{msg:e,data:this.data,success:t}),this._continue()},_onSuccess:function(){var t=this,n=e.merge(t.skipped),r,i=[],s=t.requireRegistration,o,u,f,l;for(f in n)n.hasOwnProperty(f)&&delete t.inserted[f];t.skipped={};for(f in t.inserted)t.inserted.hasOwnProperty(f)&&(l=t.getModule(f),!l||!s||l.type!==a||f in YUI.Env.mods?e.mix(t.loaded,t.getProvides(f)):i.push(f));r=t.onSuccess,u=i.length?"notregistered":"success",o=!i.length,r&&r.call(t.context,{msg:u,data:t.data,success:o,failed:i,skipped:n}),t._finish(u,o)},_onProgress:function(e){var t=this,n;if(e.data&&e.data.length)for(n=0;n<e.data.length;n++)e.data[n]=t.getModule(e.data[n].name);t.onProgress&&t.onProgress.call(t.context,{name:e.url,data:e.data})},_onFailure:function(e){var t=this.onFailure,n=[],r=0,i=e.errors.length;for(r;r<i;r++)n.push(e.errors[r].error);n=n.join(","),t&&t.call(this.context,{msg:n,data:this.data,success:!1}),this._finish(n,!1)},_onTimeout:function(e){var t=this.onTimeout;t&&t.call(this.context,{msg:"timeout",data:this.data,success:!1,transaction:e})},_sort:function(){var e,t=this.required,n={};this.sorted=[];for(e in t)!n[e]&&t.hasOwnProperty(e)&&
this._visit(e,n)},_visit:function(e,t){var n,r,i,s,o,u,a,f,l;t[e]=!0,n=this.required,i=this.moduleInfo[e],r=this.conditions[e]||{};if(i){o=i.expanded||i.requires;for(f=0,l=o.length;f<l;++f)s=o[f],u=r[s],a=u&&(!u.when||u.when==="after"),n[s]&&!t[s]&&!a&&this._visit(s,t)}this.sorted.push(e)},_insert:function(t,n,r,i){t&&this._config(t);var s=this.resolve(!i),o=this,f=0,l=0,c={},h,p;o._refetch=[],r&&(s[r===a?u:a]=[]),o.fetchCSS||(s.css=[]),s.js.length&&f++,s.css.length&&f++,p=function(t){l++;var n={},r=0,i=0,s="",u,a,p;if(t&&t.errors)for(r=0;r<t.errors.length;r++)t.errors[r].request?s=t.errors[r].request.url:s=t.errors[r],n[s]=s;if(t&&t.data&&t.data.length&&t.type==="success")for(r=0;r<t.data.length;r++){o.inserted[t.data[r].name]=!0;if(t.data[r].lang||t.data[r].skinnable)delete o.inserted[t.data[r].name],o._refetch.push(t.data[r].name)}if(l===f){o._loading=null;if(o._refetch.length){for(r=0;r<o._refetch.length;r++){h=o.getRequires(o.getModule(o._refetch[r]));for(i=0;i<h.length;i++)o.inserted[h[i]]||(c[h[i]]=h[i])}c=e.Object.keys(c);if(c.length){o.require(c),p=o.resolve(!0);if(p.cssMods.length){for(r=0;r<p.cssMods.length;r++)a=p.cssMods[r].name,delete YUI.Env._cssLoaded[a],o.isCSSLoaded(a)&&(o.inserted[a]=!0,delete o.required[a]);o.sorted=[],o._sort()}t=null,o._insert()}}t&&t.fn&&(u=t.fn,delete t.fn,u.call(o,t))}},this._loading=!0;if(!s.js.length&&!s.css.length){l=-1,p({fn:o._onSuccess});return}s.css.length&&e.Get.css(s.css,{data:s.cssMods,attributes:o.cssAttributes,insertBefore:o.insertBefore,charset:o.charset,timeout:o.timeout,context:o,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}}),s.js.length&&e.Get.js(s.js,{data:s.jsMods,insertBefore:o.insertBefore,attributes:o.jsAttributes,charset:o.charset,timeout:o.timeout,autopurge:!1,context:o,async:o.async,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}})},_continue:function(){!m.running&&m.size()>0&&(m.running=!0,m.next()())},insert:function(t,n,r){var i=this,s=e.merge(this);delete s.require,delete s.dirty,m.add(function(){i._insert(s,t,n,r)}),this._continue()},loadNext:function(){return},_filter:function(e,t,n){var r=this.filter,i=t&&t in this.filters,s=i&&this.filters[t],o=n||(this.getModuleInfo(t)||{}).group||null;return o&&this.groups[o]&&this.groups[o].filter&&(s=this.groups[o].filter,i=!0),e&&(i&&(r=b.isString(s)?this.FILTER_DEFS[s.toUpperCase()]||null:s),r&&(e=e.replace(new RegExp(r.searchExp,"g"),r.replaceStr))),e},_url:function(e,t,n){return this._filter((n||this.base||"")+e,t)},resolve:function(e,t){var r=this,s={js:[],jsMods:[],css:[],cssMods:[]},o;(r.skin.overrides||r.skin.defaultSkin!==l||r.ignoreRegistered)&&r._resetModules(),e&&r.calculate(),t=t||r.sorted,o=function(e){if(e){var t=e.group&&r.groups[e.group]||n,i;t.async===!1&&(e.async=t.async),i=e.fullpath?r._filter(e.fullpath,e.name):r._url(e.path,e.name,t.base||e.base);if(e.attributes||e.async===!1)i={url:i,async:e.async},e.attributes&&(i.attributes=e.attributes);s[e.type].push(i),s[e.type+"Mods"].push(e)}};var f=r.ignoreRegistered?{}:r.inserted,c={},h,p,d,v,m,g,y,b;for(b=0,y=t.length;b<y;b++){g=r.getModule(t[b]);if(!g||f[g.name])continue;m=r.groups[g.group],d=r.comboBase;if(m){if(!m.combine||g.fullpath){o(g);continue}g.combine=!0,typeof m.root=="string"&&(g.root=m.root),d=m.comboBase||d,v=m.comboSep,h=m.maxURLLength}else if(!r.combine){o(g);continue}if(!g.combine&&g.ext){o(g);continue}c[d]=c[d]||{js:[],jsMods:[],css:[],cssMods:[]},p=c[d],p.group=g.group,p.comboSep=v||r.comboSep,p.maxURLLength=h||r.maxURLLength,p[g.type+"Mods"].push(g)}var w,E,S,x,T,N,C;for(d in c)if(c.hasOwnProperty(d)){p=c[d],v=p.comboSep,h=p.maxURLLength;for(C in p)if(C===a||C===u){E=p[C+"Mods"],T=[];for(b=0,y=E.length;b<y;b+=1)g=E[b],N=(typeof g.root=="string"?g.root:r.root)+(g.path||g.fullpath),T.push(r._filter(N,g.name));S=d+T.join(v),x=S.length,h<=d.length&&(h=i);if(T.length)if(x>h){w=[];for(b=0,y=T.length;b<y;b++)w.push(T[b]),S=d+w.join(v),S.length>h&&(N=w.pop(),S=d+w.join(v),s[C].push(r._filter(S,null,p.group)),w=[],N&&w.push(N));w.length&&(S=d+w.join(v),s[C].push(r._filter(S,null,p.group)))}else s[C].push(r._filter(S,null,p.group));s[C+"Mods"]=s[C+"Mods"].concat(E)}}return s},load:function(e){if(!e)return;var t=this,n=t.resolve(!0);t.data=n,t.onEnd=function(){e.apply(t.context||t,arguments)},t.insert()}}},"3.17.2",{requires:["get","features"]}),YUI.add("loader-rollup",function(e,t){e.Loader.prototype._rollup=function(){var e,t,n,r,i=this.required,s,o=this.moduleInfo,u,a,f;if(this.dirty||!this.rollups){this.rollups={};for(e in o)o.hasOwnProperty(e)&&(n=this.getModule(e),n&&n.rollup&&(this.rollups[e]=n))}for(;;){u=!1;for(e in this.rollups)if(this.rollups.hasOwnProperty(e)&&!i[e]&&(!this.loaded[e]||this.forceMap[e])){n=this.getModule(e),r=n.supersedes||[],s=!1;if(!n.rollup)continue;a=0;for(t=0;t<r.length;t++){f=o[r[t]];if(this.loaded[r[t]]&&!this.forceMap[r[t]]){s=!1;break}if(i[r[t]]&&n.type===f.type){a++,s=a>=n.rollup;if(s)break}}s&&(i[e]=!0,u=!0,this.getRequires(n))}if(!u)break}}},"3.17.2",{requires:["loader-base"]}),YUI.add("loader-yui3",function(e,t){YUI.Env[e.version].modules=YUI.Env[e.version].modules||{},e.mix(YUI.Env[e.version].modules,{"align-plugin":{requires:["node-screen","node-pluginhost"]},anim:{use:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"]},"anim-base":{requires:["base-base","node-style","color-base"]},"anim-color":{requires:["anim-base"]},"anim-curve":{requires:["anim-xy"]},"anim-easing":{requires:["anim-base"]},"anim-node-plugin":{requires:["node-pluginhost","anim-base"]},"anim-scroll":{requires:["anim-base"]},"anim-shape":{requires:["anim-base","anim-easing","anim-color"
,"matrix"]},"anim-shape-transform":{use:["anim-shape"]},"anim-xy":{requires:["anim-base","node-screen"]},app:{use:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"]},"app-base":{requires:["classnamemanager","pjax-base","router","view"]},"app-content":{requires:["app-base","pjax-content"]},"app-transitions":{requires:["app-base"]},"app-transitions-css":{type:"css"},"app-transitions-native":{condition:{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"},requires:["app-transitions","app-transitions-css","parallel","transition"]},"array-extras":{requires:["yui-base"]},"array-invoke":{requires:["yui-base"]},arraylist:{requires:["yui-base"]},"arraylist-add":{requires:["arraylist"]},"arraylist-filter":{requires:["arraylist"]},arraysort:{requires:["yui-base"]},"async-queue":{requires:["event-custom"]},attribute:{use:["attribute-base","attribute-complex"]},"attribute-base":{requires:["attribute-core","attribute-observable","attribute-extras"]},"attribute-complex":{requires:["attribute-base"]},"attribute-core":{requires:["oop"]},"attribute-events":{use:["attribute-observable"]},"attribute-extras":{requires:["oop"]},"attribute-observable":{requires:["event-custom"]},autocomplete:{use:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"]},"autocomplete-base":{optional:["autocomplete-sources"],requires:["array-extras","base-build","escape","event-valuechange","node-base"]},"autocomplete-filters":{requires:["array-extras","text-wordbreak"]},"autocomplete-filters-accentfold":{requires:["array-extras","text-accentfold","text-wordbreak"]},"autocomplete-highlighters":{requires:["array-extras","highlight-base"]},"autocomplete-highlighters-accentfold":{requires:["array-extras","highlight-accentfold"]},"autocomplete-list":{after:["autocomplete-sources"],lang:["en","es","hu","it"],requires:["autocomplete-base","event-resize","node-screen","selector-css3","shim-plugin","widget","widget-position","widget-position-align"],skinnable:!0},"autocomplete-list-keys":{condition:{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"},requires:["autocomplete-list","base-build"]},"autocomplete-plugin":{requires:["autocomplete-list","node-pluginhost"]},"autocomplete-sources":{optional:["io-base","json-parse","jsonp","yql"],requires:["autocomplete-base"]},axes:{use:["axis-numeric","axis-category","axis-time","axis-stacked"]},"axes-base":{use:["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"]},axis:{requires:["dom","widget","widget-position","widget-stack","graphics","axis-base"]},"axis-base":{requires:["classnamemanager","datatype-number","datatype-date","base","event-custom"]},"axis-category":{requires:["axis","axis-category-base"]},"axis-category-base":{requires:["axis-base"]},"axis-numeric":{requires:["axis","axis-numeric-base"]},"axis-numeric-base":{requires:["axis-base"]},"axis-stacked":{requires:["axis-numeric","axis-stacked-base"]},"axis-stacked-base":{requires:["axis-numeric-base"]},"axis-time":{requires:["axis","axis-time-base"]},"axis-time-base":{requires:["axis-base"]},base:{use:["base-base","base-pluginhost","base-build"]},"base-base":{requires:["attribute-base","base-core","base-observable"]},"base-build":{requires:["base-base"]},"base-core":{requires:["attribute-core"]},"base-observable":{requires:["attribute-observable","base-core"]},"base-pluginhost":{requires:["base-base","pluginhost"]},button:{requires:["button-core","cssbutton","widget"]},"button-core":{requires:["attribute-core","classnamemanager","node-base","escape"]},"button-group":{requires:["button-plugin","cssbutton","widget"]},"button-plugin":{requires:["button-core","cssbutton","node-pluginhost"]},cache:{use:["cache-base","cache-offline","cache-plugin"]},"cache-base":{requires:["base"]},"cache-offline":{requires:["cache-base","json"]},"cache-plugin":{requires:["plugin","cache-base"]},calendar:{requires:["calendar-base","calendarnavigator"],skinnable:!0},"calendar-base":{lang:["de","en","es","es-AR","fr","hu","it","ja","nb-NO","nl","pt-BR","ru","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-HANT-TW"],requires:["widget","datatype-date","datatype-date-math","cssgrids"],skinnable:!0},calendarnavigator:{requires:["plugin","classnamemanager","datatype-date","node"],skinnable:!0},charts:{use:["charts-base"]},"charts-base":{requires:["dom","event-mouseenter","event-touch","graphics-group","axes","series-pie","series-line","series-marker","series-area","series-spline","series-column","series-bar","series-areaspline","series-combo","series-combospline","series-line-stacked","series-marker-stacked","series-area-stacked","series-spline-stacked","series-column-stacked","series-bar-stacked","series-areaspline-stacked","series-combo-stacked","series-combospline-stacked"]},"charts-legend":{requires:["charts-base"]},classnamemanager:{requires:["yui-base"]},"clickable-rail":{requires:["slider-base"]},collection:{use:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"]},color:{use:["color-base","color-hsl","color-harmony"]},"color-base":{requires:["yui-base"]},"color-harmony":{requires:["color-hsl"]},"color-hsl":{requires:["color-base"]},"color-hsv":{requires:["color-base"]},console:{lang:["en","es","hu","it","ja"],requires:["yui-log","widget"],skinnable:!0},"console-filters":{requires:["plugin","console"],skinnable:!0},"content-editable":{requires:["node-base","editor-selection","stylesheet","plugin"]},controller:{use:["router"]},cookie:{requires:["yui-base"]},"createlink-base":{requires:["editor-base"]},cssbase:{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},"cssbase-context":{after:["cssreset"
,"cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},cssbutton:{type:"css"},cssfonts:{type:"css"},"cssfonts-context":{type:"css"},cssgrids:{optional:["cssnormalize"],type:"css"},"cssgrids-base":{optional:["cssnormalize"],type:"css"},"cssgrids-responsive":{optional:["cssnormalize"],requires:["cssgrids","cssgrids-responsive-base"],type:"css"},"cssgrids-units":{optional:["cssnormalize"],requires:["cssgrids-base"],type:"css"},cssnormalize:{type:"css"},"cssnormalize-context":{type:"css"},cssreset:{type:"css"},"cssreset-context":{type:"css"},dataschema:{use:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"]},"dataschema-array":{requires:["dataschema-base"]},"dataschema-base":{requires:["base"]},"dataschema-json":{requires:["dataschema-base","json"]},"dataschema-text":{requires:["dataschema-base"]},"dataschema-xml":{requires:["dataschema-base"]},datasource:{use:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"]},"datasource-arrayschema":{requires:["datasource-local","plugin","dataschema-array"]},"datasource-cache":{requires:["datasource-local","plugin","cache-base"]},"datasource-function":{requires:["datasource-local"]},"datasource-get":{requires:["datasource-local","get"]},"datasource-io":{requires:["datasource-local","io-base"]},"datasource-jsonschema":{requires:["datasource-local","plugin","dataschema-json"]},"datasource-local":{requires:["base"]},"datasource-polling":{requires:["datasource-local"]},"datasource-textschema":{requires:["datasource-local","plugin","dataschema-text"]},"datasource-xmlschema":{requires:["datasource-local","plugin","datatype-xml","dataschema-xml"]},datatable:{use:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"]},"datatable-base":{requires:["datatable-core","datatable-table","datatable-head","datatable-body","base-build","widget"],skinnable:!0},"datatable-body":{requires:["datatable-core","view","classnamemanager"]},"datatable-column-widths":{requires:["datatable-base"]},"datatable-core":{requires:["escape","model-list","node-event-delegate"]},"datatable-datasource":{requires:["datatable-base","plugin","datasource-local"]},"datatable-foot":{requires:["datatable-core","view"]},"datatable-formatters":{requires:["datatable-body","datatype-number-format","datatype-date-format","escape"]},"datatable-head":{requires:["datatable-core","view","classnamemanager"]},"datatable-highlight":{requires:["datatable-base","event-hover"],skinnable:!0},"datatable-keynav":{requires:["datatable-base"]},"datatable-message":{lang:["en","fr","es","hu","it"],requires:["datatable-base"],skinnable:!0},"datatable-mutable":{requires:["datatable-base"]},"datatable-paginator":{lang:["en","fr"],requires:["model","view","paginator-core","datatable-foot","datatable-paginator-templates"],skinnable:!0},"datatable-paginator-templates":{requires:["template"]},"datatable-scroll":{requires:["datatable-base","datatable-column-widths","dom-screen"],skinnable:!0},"datatable-sort":{lang:["en","fr","es","hu"],requires:["datatable-base"],skinnable:!0},"datatable-table":{requires:["datatable-core","datatable-head","datatable-body","view","classnamemanager"]},datatype:{use:["datatype-date","datatype-number","datatype-xml"]},"datatype-date":{use:["datatype-date-parse","datatype-date-format","datatype-date-math"]},"datatype-date-format":{lang:["ar","ar-JO","ca","ca-ES","da","da-DK","de","de-AT","de-DE","el","el-GR","en","en-AU","en-CA","en-GB","en-IE","en-IN","en-JO","en-MY","en-NZ","en-PH","en-SG","en-US","es","es-AR","es-BO","es-CL","es-CO","es-EC","es-ES","es-MX","es-PE","es-PY","es-US","es-UY","es-VE","fi","fi-FI","fr","fr-BE","fr-CA","fr-FR","hi","hi-IN","hu","id","id-ID","it","it-IT","ja","ja-JP","ko","ko-KR","ms","ms-MY","nb","nb-NO","nl","nl-BE","nl-NL","pl","pl-PL","pt","pt-BR","ro","ro-RO","ru","ru-RU","sv","sv-SE","th","th-TH","tr","tr-TR","vi","vi-VN","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-Hant-TW"]},"datatype-date-math":{requires:["yui-base"]},"datatype-date-parse":{},"datatype-number":{use:["datatype-number-parse","datatype-number-format"]},"datatype-number-format":{},"datatype-number-parse":{requires:["escape"]},"datatype-xml":{use:["datatype-xml-parse","datatype-xml-format"]},"datatype-xml-format":{},"datatype-xml-parse":{},dd:{use:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"]},"dd-constrain":{requires:["dd-drag"]},"dd-ddm":{requires:["dd-ddm-base","event-resize"]},"dd-ddm-base":{requires:["node","base","yui-throttle","classnamemanager"]},"dd-ddm-drop":{requires:["dd-ddm"]},"dd-delegate":{requires:["dd-drag","dd-drop-plugin","event-mouseenter"]},"dd-drag":{requires:["dd-ddm-base"]},"dd-drop":{requires:["dd-drag","dd-ddm-drop"]},"dd-drop-plugin":{requires:["dd-drop"]},"dd-gestures":{condition:{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"},requires:["dd-drag","event-synthetic","event-gestures"]},"dd-plugin":{optional:["dd-constrain","dd-proxy"],requires:["dd-drag"]},"dd-proxy":{requires:["dd-drag"]},"dd-scroll":{requires:["dd-drag"]},dial:{lang:["en","es","hu"],requires:["widget","dd-drag","event-mouseenter","event-move","event-key","transition","intl"],skinnable:!0},dom:{use:["dom-base","dom-screen","dom-style","selector-native","selector"]},"dom-base":{requires:["dom-core"]},"dom-core":{requires:["oop","features"]},"dom-screen":{requires:["dom-base","dom-style"]},"dom-style":{requires:["dom-base"]},"dom-style-ie":{condition:{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}})
,n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"},requires:["dom-style","color-base"]},dump:{requires:["yui-base"]},editor:{use:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"]},"editor-base":{requires:["base","frame","node","exec-command","editor-selection"]},"editor-bidi":{requires:["editor-base"]},"editor-br":{requires:["editor-base"]},"editor-inline":{requires:["editor-base","content-editable"]},"editor-lists":{requires:["editor-base"]},"editor-para":{requires:["editor-para-base"]},"editor-para-base":{requires:["editor-base"]},"editor-para-ie":{condition:{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"},requires:["editor-para-base"]},"editor-selection":{requires:["node"]},"editor-tab":{requires:["editor-base"]},escape:{requires:["yui-base"]},event:{after:["node-base"],use:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"]},"event-base":{after:["node-base"],requires:["event-custom-base"]},"event-base-ie":{after:["event-base"],condition:{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"},requires:["node-base"]},"event-contextmenu":{requires:["event-synthetic","dom-screen"]},"event-custom":{use:["event-custom-base","event-custom-complex"]},"event-custom-base":{requires:["oop"]},"event-custom-complex":{requires:["event-custom-base"]},"event-delegate":{requires:["node-base"]},"event-flick":{requires:["node-base","event-touch","event-synthetic"]},"event-focus":{requires:["event-synthetic"]},"event-gestures":{use:["event-flick","event-move"]},"event-hover":{requires:["event-mouseenter"]},"event-key":{requires:["event-synthetic"]},"event-mouseenter":{requires:["event-synthetic"]},"event-mousewheel":{requires:["node-base"]},"event-move":{requires:["node-base","event-touch","event-synthetic"]},"event-outside":{requires:["event-synthetic"]},"event-resize":{requires:["node-base","event-synthetic"]},"event-simulate":{requires:["event-base"]},"event-synthetic":{requires:["node-base","event-custom-complex"]},"event-tap":{requires:["node-base","event-base","event-touch","event-synthetic"]},"event-touch":{requires:["node-base"]},"event-valuechange":{requires:["event-focus","event-synthetic"]},"exec-command":{requires:["frame"]},features:{requires:["yui-base"]},file:{requires:["file-flash","file-html5"]},"file-flash":{requires:["base"]},"file-html5":{requires:["base"]},frame:{requires:["base","node","plugin","selector-css3","yui-throttle"]},"gesture-simulate":{requires:["async-queue","event-simulate","node-screen"]},get:{requires:["yui-base"]},graphics:{requires:["node","event-custom","pluginhost","matrix","classnamemanager"]},"graphics-canvas":{condition:{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-canvas-default":{condition:{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}},"graphics-group":{requires:["graphics"]},"graphics-svg":{condition:{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"},requires:["graphics"]},"graphics-svg-default":{condition:{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}},"graphics-vml":{condition:{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-vml-default":{condition:{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}},handlebars:{use:["handlebars-compiler"]},"handlebars-base":{requires:[]},"handlebars-compiler":{requires:["handlebars-base"]},highlight:{use:["highlight-base","highlight-accentfold"]},"highlight-accentfold":{requires:["highlight-base","text-accentfold"]},"highlight-base":{requires:["array-extras","classnamemanager","escape","text-wordbreak"]},history:{use:["history-base","history-hash","history-html5"]},"history-base":{requires:["event-custom-complex"]},"history-hash":{after:["history-html5"],requires:["event-synthetic","history-base","yui-later"]},"history-hash-ie":{condition:{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"},requires:["history-hash","node-base"]},"history-html5":{optional:["json"],requires:["event-base","history-base","node-base"
]},imageloader:{requires:["base-base","node-style","node-screen"]},intl:{requires:["intl-base","event-custom"]},"intl-base":{requires:["yui-base"]},io:{use:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"]},"io-base":{requires:["event-custom-base","querystring-stringify-simple"]},"io-form":{requires:["io-base","node-base"]},"io-nodejs":{condition:{name:"io-nodejs",trigger:"io-base",ua:"nodejs"},requires:["io-base"]},"io-queue":{requires:["io-base","queue-promote"]},"io-upload-iframe":{requires:["io-base","node-base"]},"io-xdr":{requires:["io-base","datatype-xml-parse"]},json:{use:["json-parse","json-stringify"]},"json-parse":{requires:["yui-base"]},"json-parse-shim":{condition:{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"},requires:["json-parse"]},"json-stringify":{requires:["yui-base"]},"json-stringify-shim":{condition:{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"},requires:["json-stringify"]},jsonp:{requires:["get","oop"]},"jsonp-url":{requires:["jsonp"]},"lazy-model-list":{requires:["model-list"]},loader:{use:["loader-base","loader-rollup","loader-yui3"]},"loader-base":{requires:["get","features"]},"loader-rollup":{requires:["loader-base"]},"loader-yui3":{requires:["loader-base"]},matrix:{requires:["yui-base"]},model:{requires:["base-build","escape","json-parse"]},"model-list":{requires:["array-extras","array-invoke","arraylist","base-build","escape","json-parse","model"]},"model-sync-local":{requires:["model","json-stringify"]},"model-sync-rest":{requires:["model","io-base","json-stringify"]},node:{use:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"]},"node-base":{requires:["event-base","node-core","dom-base","dom-style"]},"node-core":{requires:["dom-core","selector"]},"node-event-delegate":{requires:["node-base","event-delegate"]},"node-event-html5":{requires:["node-base"]},"node-event-simulate":{requires:["node-base","event-simulate","gesture-simulate"]},"node-flick":{requires:["classnamemanager","transition","event-flick","plugin"],skinnable:!0},"node-focusmanager":{requires:["attribute","node","plugin","node-event-simulate","event-key","event-focus"]},"node-load":{requires:["node-base","io-base"]},"node-menunav":{requires:["node","classnamemanager","plugin","node-focusmanager"],skinnable:!0},"node-pluginhost":{requires:["node-base","pluginhost"]},"node-screen":{requires:["dom-screen","node-base"]},"node-scroll-info":{requires:["array-extras","base-build","event-resize","node-pluginhost","plugin","selector"]},"node-style":{requires:["dom-style","node-base"]},oop:{requires:["yui-base"]},overlay:{requires:["widget","widget-stdmod","widget-position","widget-position-align","widget-stack","widget-position-constrain"],skinnable:!0},paginator:{requires:["paginator-core"]},"paginator-core":{requires:["base"]},"paginator-url":{requires:["paginator"]},panel:{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:!0},parallel:{requires:["yui-base"]},pjax:{requires:["pjax-base","pjax-content"]},"pjax-base":{requires:["classnamemanager","node-event-delegate","router"]},"pjax-content":{requires:["io-base","node-base","router"]},"pjax-plugin":{requires:["node-pluginhost","pjax","plugin"]},plugin:{requires:["base-base"]},pluginhost:{use:["pluginhost-base","pluginhost-config"]},"pluginhost-base":{requires:["yui-base"]},"pluginhost-config":{requires:["pluginhost-base"]},promise:{requires:["timers"]},querystring:{use:["querystring-parse","querystring-stringify"]},"querystring-parse":{requires:["yui-base","array-extras"]},"querystring-parse-simple":{requires:["yui-base"]},"querystring-stringify":{requires:["yui-base"]},"querystring-stringify-simple":{requires:["yui-base"]},"queue-promote":{requires:["yui-base"]},"range-slider":{requires:["slider-base","slider-value-range","clickable-rail"]},recordset:{use:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"]},"recordset-base":{requires:["base","arraylist"]},"recordset-filter":{requires:["recordset-base","array-extras","plugin"]},"recordset-indexer":{requires:["recordset-base","plugin"]},"recordset-sort":{requires:["arraysort","recordset-base","plugin"]},resize:{use:["resize-base","resize-proxy","resize-constrain"]},"resize-base":{requires:["base","widget","event","oop","dd-drag","dd-delegate","dd-drop"],skinnable:!0},"resize-constrain":{requires:["plugin","resize-base"]},"resize-plugin":{optional:["resize-constrain"],requires:["resize-base","plugin"]},"resize-proxy":{requires:["plugin","resize-base"]},router:{optional:["querystring-parse"],requires:["array-extras","base-build","history"]},scrollview:{requires:["scrollview-base","scrollview-scrollbars"]},"scrollview-base":{requires:["widget","event-gestures","event-mousewheel","transition"],skinnable:!0},"scrollview-base-ie":{condition:{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"},requires:["scrollview-base"]},"scrollview-list":{requires:["plugin","classnamemanager"],skinnable:!0},"scrollview-paginator":{requires:["plugin","classnamemanager"]},"scrollview-scrollbars":{requires:["classnamemanager","transition","plugin"],skinnable:!0},selector:{requires:["selector-native"]},"selector-css2":{condition:{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"},requires:["selector-native"]},"selector-css3":{requires:["selector-native","selector-css2"]},"selector-native":{requires:["dom-base"]},"series-area"
:{requires:["series-cartesian","series-fill-util"]},"series-area-stacked":{requires:["series-stacked","series-area"]},"series-areaspline":{requires:["series-area","series-curve-util"]},"series-areaspline-stacked":{requires:["series-stacked","series-areaspline"]},"series-bar":{requires:["series-marker","series-histogram-base"]},"series-bar-stacked":{requires:["series-stacked","series-bar"]},"series-base":{requires:["graphics","axis-base"]},"series-candlestick":{requires:["series-range"]},"series-cartesian":{requires:["series-base"]},"series-column":{requires:["series-marker","series-histogram-base"]},"series-column-stacked":{requires:["series-stacked","series-column"]},"series-combo":{requires:["series-cartesian","series-line-util","series-plot-util","series-fill-util"]},"series-combo-stacked":{requires:["series-stacked","series-combo"]},"series-combospline":{requires:["series-combo","series-curve-util"]},"series-combospline-stacked":{requires:["series-combo-stacked","series-curve-util"]},"series-curve-util":{},"series-fill-util":{},"series-histogram-base":{requires:["series-cartesian","series-plot-util"]},"series-line":{requires:["series-cartesian","series-line-util"]},"series-line-stacked":{requires:["series-stacked","series-line"]},"series-line-util":{},"series-marker":{requires:["series-cartesian","series-plot-util"]},"series-marker-stacked":{requires:["series-stacked","series-marker"]},"series-ohlc":{requires:["series-range"]},"series-pie":{requires:["series-base","series-plot-util"]},"series-plot-util":{},"series-range":{requires:["series-cartesian"]},"series-spline":{requires:["series-line","series-curve-util"]},"series-spline-stacked":{requires:["series-stacked","series-spline"]},"series-stacked":{requires:["axis-stacked"]},"shim-plugin":{requires:["node-style","node-pluginhost"]},slider:{use:["slider-base","slider-value-range","clickable-rail","range-slider"]},"slider-base":{requires:["widget","dd-constrain","event-key"],skinnable:!0},"slider-value-range":{requires:["slider-base"]},sortable:{requires:["dd-delegate","dd-drop-plugin","dd-proxy"]},"sortable-scroll":{requires:["dd-scroll","sortable"]},stylesheet:{requires:["yui-base"]},substitute:{optional:["dump"],requires:["yui-base"]},swf:{requires:["event-custom","node","swfdetect","escape"]},swfdetect:{requires:["yui-base"]},tabview:{requires:["widget","widget-parent","widget-child","tabview-base","node-pluginhost","node-focusmanager"],skinnable:!0},"tabview-base":{requires:["node-event-delegate","classnamemanager"]},"tabview-plugin":{requires:["tabview-base"]},template:{use:["template-base","template-micro"]},"template-base":{requires:["yui-base"]},"template-micro":{requires:["escape"]},test:{requires:["event-simulate","event-custom","json-stringify"]},"test-console":{requires:["console-filters","test","array-extras"],skinnable:!0},text:{use:["text-accentfold","text-wordbreak"]},"text-accentfold":{requires:["array-extras","text-data-accentfold"]},"text-data-accentfold":{requires:["yui-base"]},"text-data-wordbreak":{requires:["yui-base"]},"text-wordbreak":{requires:["array-extras","text-data-wordbreak"]},timers:{requires:["yui-base"]},transition:{requires:["node-style"]},"transition-timer":{condition:{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"},requires:["transition"]},tree:{requires:["base-build","tree-node"]},"tree-labelable":{requires:["tree"]},"tree-lazy":{requires:["base-pluginhost","plugin","tree"]},"tree-node":{},"tree-openable":{requires:["tree"]},"tree-selectable":{requires:["tree"]},"tree-sortable":{requires:["tree"]},uploader:{requires:["uploader-html5","uploader-flash"]},"uploader-flash":{requires:["swfdetect","escape","widget","base","cssbutton","node","event-custom","uploader-queue"]},"uploader-html5":{requires:["widget","node-event-simulate","file-html5","uploader-queue"]},"uploader-queue":{requires:["base"]},view:{requires:["base-build","node-event-delegate"]},"view-node-map":{requires:["view"]},widget:{use:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]},"widget-anim":{requires:["anim-base","plugin","widget"]},"widget-autohide":{requires:["base-build","event-key","event-outside","widget"]},"widget-base":{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0},"widget-base-ie":{condition:{name:"widget-base-ie",trigger:"widget-base",ua:"ie"},requires:["widget-base"]},"widget-buttons":{requires:["button-plugin","cssbutton","widget-stdmod"]},"widget-child":{requires:["base-build","widget"]},"widget-htmlparser":{requires:["widget-base"]},"widget-modality":{requires:["base-build","event-outside","widget"],skinnable:!0},"widget-parent":{requires:["arraylist","base-build","widget"]},"widget-position":{requires:["base-build","node-screen","widget"]},"widget-position-align":{requires:["widget-position"]},"widget-position-constrain":{requires:["widget-position"]},"widget-skin":{requires:["widget-base"]},"widget-stack":{requires:["base-build","widget"],skinnable:!0},"widget-stdmod":{requires:["base-build","widget"]},"widget-uievents":{requires:["node-event-delegate","widget-base"]},yql:{requires:["oop"]},"yql-jsonp":{condition:{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"},requires:["yql","jsonp","jsonp-url"]},"yql-nodejs":{condition:{name:"yql-nodejs",trigger:"yql",ua:"nodejs"},requires:["yql"]},"yql-winjs":{condition:{name:"yql-winjs",trigger:"yql",ua:"winjs"},requires:["yql"]},yui:{},"yui-base":{},"yui-later":{requires:["yui-base"]},"yui-log":{requires:["yui-base"]},"yui-throttle":{requires:["yui-base"]}}),YUI.Env[e.version].md5="45357bb11eddf7fd0a89c0b756599df2"},"3.17.2",{requires:["loader-base"]}),YUI.add("yui",function(e,t){},"3.17.2",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup"
,"loader-yui3"]});

YUI().use('node', 'node-event-simulate', function (Y) {
    var AniJSTest = {
        Utils:{}
    };
    describe("AniJS", function() {

        //Aqui se pueden poner variables para tener acceso globalmente


        //Funcion que se ejecuta antes de empezar
        beforeEach(function() {

        });

        afterEach(function() {

        });

        //---------------------------------------------------------------------
        // Define a trigger event for the animation
        //---------------------------------------------------------------------
        describe("Define a trigger event for the animation", function() {
            afterEach(function() {
                Y.one('#testzone .test').remove();
            });

            describe('y no se pone la sentencia (if) en la definicion', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'do: bounce, to: body',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //corremos AniJS
                    AniJS.run();
                });

                it("entonces NO es registrado al manejador de eventos", function() {
                    expect(AniJS.EventSystem.eventIdCounter).toBe(0);
                });
            });

            describe('la sentencia (if) en la definicion se pone con un evento vacio', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: ,do: bounce, to: body',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //corremos AniJS
                    AniJS.run();
                });

                it("entonces NO es registrado al manejador de eventos", function() {
                    expect(AniJS.EventSystem.eventIdCounter).toBe(0);
                });
            });

            describe('la sentencia (if) en la definicion se pone con un evento que no existe de acuerdo al standar', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: notExist, do: bounce, to: body',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //corremos AniJS
                    AniJS.run();
                });

                it("entonces SI es registrado al manejador de eventos", function() {
                    expect(AniJS.EventSystem.eventIdCounter).toBe(1);
                });
            });

            describe('la sentencia (if) en la definicion se pone con un evento real', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //corremos AniJS
                    AniJS.run();
                });

                it("entonces SI es registrado al manejador de eventos", function() {
                    expect(AniJS.EventSystem.eventIdCounter).toBe(2);
                });
            });
        });

        //---------------------------------------------------------------------
        // Define the event emiter element
        //---------------------------------------------------------------------
        describe("Define the event emiter element", function() {
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
            });

            describe('y no se pone la sentencia (on) en la definicion', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated, to: body, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion es ejecutada cuando cuando el evento es disparado por el propio nodo", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });

            describe('y se pone la sentencia (on) con un selector vacio', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: ,do: bounce animated, to: body, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion es ejecutada cuando cuando el evento es disparado por el propio nodo", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });

            describe('y se pone la sentencia (on) con selectores que no existan', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: .ghostnode, do: bounce animated, to: body, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy();

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion NO ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction.calls.count()).toEqual(0);
                });
            });

            describe('y se pone la sentencia (on) con selectores Uglys', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: $/03wew, do: bounce animated, to: body, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy();

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion NO ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction.calls.count()).toEqual(0);
                });
            });

            describe('y se pone la sentencia (on) con selectores Reales', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: .test, do: bounce animated, to: body, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion SI es ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });
        });

        // //---------------------------------------------------------------------
        // // Animation behavior definition
        // //---------------------------------------------------------------------
        describe("Animation behavior definition", function() {
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
            });

            describe('y se pone la sentencia (do) con un comportamiento vacio', function(){
                beforeEach(function() {
                //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: , do: , to: body',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy();

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion No es ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction.calls.count()).toEqual(0);
                    expect(Y.one('body').hasClass('bounce')).toBeFalsy();
                });
            });

            describe('y se pone la sentencia (do) con un comportamiento que esta definido', function(){
                beforeEach(function(done) {
                //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated, to: body, after:$afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion SI es ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction.calls.count()).toEqual(1);
                });
            });
        });

        // //---------------------------------------------------------------------
        // // Animation elements target definition
        // //---------------------------------------------------------------------
        describe("Animation elements target definition", function() {
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
            });

            describe('y no se pone la sentencia (to) en la definicion', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion es ejecutada sobre el propio nodo que dispara el evento", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                    //TODO: Falta chequear que verdaderamente se haga sobre ese nodo
                });
            });
            describe('y se pone la sentencia (to) con un selector vacio', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated, to: , after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion es ejecutada sobre el propio nodo que dispara el evento", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });

            describe('y se pone la sentencia (to) con selectores que no existan', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated, to: unkonowk, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy();

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion NO ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction.calls.count()).toEqual(0);
                });
            });

            describe('y se pone la sentencia (to) con selectores Uglys', function(){
                beforeEach(function() {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated, to: $/03wew, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy();

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion NO ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction.calls.count()).toEqual(0);
                });
            });

            describe('y se pone la sentencia (to) con selectores Reales', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: .test, do: bounce animated, to: body, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces la interaccion SI es ejecutada", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });
            describe('y se pone la sentencia (to) con una funcion ayudante de tipo parent', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, on: .test, do: bounce animated, to: $testFunction .test, after: $afterFunction',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    AniJSDefaultHelper = AniJS.getHelper();
                    AniJSDefaultHelper.testFunction = function(e, animationContext, params) {
                        return [e.target];
                    };


                    AniJSTest.Utils.settingAfterFunctionSpy(done);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.simulate("click");
                });

                it("entonces los nodos incluidos en behaviorTarget list son los devueltos por dicha funcion", function() {
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });
        });
    });

    AniJSTest.Utils.settingEnviroment = function(dataAnijJS){
        var htmlNode = '<div class="test">Test</div>',
            targetNode;

        //Ponemos el nodo en la zona de pruebas
        Y.one('#testzone').appendChild(htmlNode);
        targetNode = Y.one('#testzone .test');
        targetNode.setAttribute('data-anijs', dataAnijJS);
        return targetNode;
    };

    AniJSTest.Utils.settingAfterFunctionSpy = function(callback){
        //Se obtiene el helper por defecto
        AniJSDefaultHelper = AniJS.getHelper();

        //Se agrega una funcion before
        AniJSDefaultHelper.afterFunction = function(e, animationContext){
            //Permite seguir con las pruebas
            if(callback){
                callback();
            }
        };

        // Ponemos un spy a dicha funcion para saber cuando se ejecuta la animacion
        spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();
    };
});





YUI().use('node', 'node-event-simulate', function (Y) {


    describe("AniJS Advanced", function() {

        //Aqui se pueden poner variables para tener acceso globalmente
        var timerCallback = null;

        //Funcion que se ejecuta antes de empezar
        beforeEach(function() {

        });

        afterEach(function() {

        });

        //---------------------------------------------------------------------
        // Change the root DOM scope.
        //---------------------------------------------------------------------
        describe("Change the root DOM scope.", function() {
            beforeEach(function() {
                //Aqui creo el nodo
                var htmlNode = '<div class="test">Test</div>';
                Y.one('#testzone').appendChild(htmlNode);
            });

            afterEach(function() {
                Y.one('#testzone .test').remove();
            });

            it("dont existed DOM Scope", function() {
                AniJS.setDOMRootTravelScope('.dontExisted');
                expect(AniJS.rootDOMTravelScope == document).toBeTruthy();
            });

            it("empty DOM selector Scope", function() {
                AniJS.setDOMRootTravelScope('');
                expect(AniJS.rootDOMTravelScope == document).toBeTruthy();
            });

            it("new DOM selector Scope", function() {
                AniJS.setDOMRootTravelScope('.test');
                expect(AniJS.rootDOMTravelScope == document).toBeFalsy();

                Y.one('body').appendChild('<div class="outsideselector">Outside Selector</div>');
                var dataAnijJS = 'do: bounce, to: body',
                    targetNode;

                targetNode = Y.one('.outsideselector');
                targetNode.setAttribute('data-anijs', dataAnijJS);

                   targetNode.on('click', function(e){
                    expect(Y.one('body').hasClass('bounce')).toBeFalsy();
                    AniJS.setDOMRootTravelScope('document');
                },this, true);

                targetNode.simulate("click");
            });
        });

        //---------------------------------------------------------------------
        // Running AniJS repeatedly.
        //---------------------------------------------------------------------
        describe("Running AniJS repeatedly.", function() {
            beforeEach(function() {
                //Aqui creo el nodo
                var htmlNode = '<div class="test">Test</div>';
                Y.one('#testzone').appendChild(htmlNode);
            });

            afterEach(function() {
                Y.one('#testzone .test').remove();
            });

            it("ten times", function() {
                for (var i = 1; i < 10; i++) {
                    var dataAnijJS = 'if: click, do: bounce, to: body',
                        targetNode;

                    targetNode = Y.one('#testzone .test');
                    targetNode.setAttribute('data-anijs', dataAnijJS);
                    AniJS.run();

                    expect(AniJS.EventSystem.eventCollection[i]).not.toBeNull();
                }
            });
            //TODO: Memory leaks here
            it("hundred times", function() {
                for (var i = 1; i < 100; i++) {
                    var dataAnijJS = 'if: click, do: bounce, to: body',
                        targetNode;

                    targetNode = Y.one('#testzone .test');

                    targetNode.setAttribute('data-anijs', dataAnijJS);

                     AniJS.run();

                    expect(AniJS.EventSystem.eventCollection[i]).not.toBeNull();
                }
            });
        });

        //---------------------------------------------------------------------
        // animationEnd and transitionEnd normalization.
        //---------------------------------------------------------------------
        describe("animationEnd and transitionEnd normalization", function() {
            beforeEach(function() {
                //Aqui creo el nodo
                var htmlNode = '<div class="test">Test</div>';
                Y.one('#testzone').appendChild(htmlNode);
            });

            afterEach(function() {
                Y.one('#testzone .test').remove();
            });
        });

        //---------------------------------------------------------------------
        // Attach events from window and document objects
        //---------------------------------------------------------------------
        describe("Attach events from window and document objects", function() {
            beforeEach(function() {
                //Aqui creo el nodo
                var htmlNode = '<div class="test">Test</div>';
                Y.one('#testzone').appendChild(htmlNode);
            });

            afterEach(function() {
                Y.one('#testzone .test').remove();
            });
        });

        //---------------------------------------------------------------------
        // Listen for custom events
        //---------------------------------------------------------------------
        describe("Listen for custom events", function() {
            beforeEach(function() {
                //Aqui creo el nodo
                var htmlNode = '<div class="test">Test</div>';
                Y.one('#testzone').appendChild(htmlNode);

                jasmine.clock().install();

            });

            afterEach(function() {
                Y.one('#testzone .test').remove();
                //Hay que unregister todos los eventsProvides sino hay test que van a fallar
                jasmine.clock().uninstall();
            });
            it("Simple Custom Event Creation", function() {
                var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                    targetNode;

                targetNode = Y.one('#testzone .test');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                AniJS.run();

                expect(AniJS.getNotifier('customEventProvider') !== undefined).toBeTruthy();

                var customEventProvider = AniJS.getNotifier('customEventProvider');
                customEventProvider.dispatchEvent('customevent');

                jasmine.clock().tick(101);
                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
            });

            it("Unregister Event", function() {
                var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                    targetNode;

                targetNode = Y.one('#testzone .test');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                AniJS.run();


                expect(AniJS.getNotifier('customEventProvider') !== undefined).toBeTruthy();

                var customEventProvider = AniJS.getNotifier('customEventProvider');

                customEventProvider.dispatchEvent('customevent');

                expect(Y.one('body').hasClass('bounce')).toBeTruthy();

                Y.one('body').removeClass('bounce');

                customEventProvider.removeEventListener('customevent');

                AniJS.purgeEventTarget(customEventProvider);

                customEventProvider.dispatchEvent('customevent');

                expect(Y.one('body').hasClass('bounce')).toBeFalsy();


            });

            describe("Two Custom Event Creation", function() {
                beforeEach(function() {
                    //Aqui creo el nodo
                    var htmlNode = '<div class="test">Test</div>';
                    Y.one('#testzone').appendChild(htmlNode);

                    //Creating the second element
                    var htmlNode = '<div class="test2">Test2</div>';
                    Y.one('#testzone').appendChild(htmlNode);

                    jasmine.clock().install();
                });

                afterEach(function() {
                    Y.one('#testzone .test').remove();

                    Y.one('#testzone .test2').remove();

                    Y.one('body').removeClass('bounce');
                    Y.one('body').removeClass('hinge');
                    jasmine.clock().uninstall();

                    //Hay que unregister todos los eventsProvides sino hay test que van a fallar
                });

                it("with same notifier", function() {
                    var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                        targetNode;

                    //Setting the first node (It's created in beforeEach test function)
                    targetNode = Y.one('#testzone .test');
                    targetNode.setAttribute('data-anijs', dataAnijJS);

                    dataAnijJS = 'if: customevent, on: $customEventProvider, do: hinge, to: body';
                    targetNode = Y.one('#testzone .test2');
                    targetNode.setAttribute('data-anijs', dataAnijJS);

                    AniJS.run();

                    expect(AniJS.getNotifier('customEventProvider') !== undefined).toBeTruthy();

                    var customEventProvider = AniJS.getNotifier('customEventProvider');

                    customEventProvider.dispatchEvent('customevent');

                    jasmine.clock().tick(101);
                    expect(Y.one('body').hasClass('bounce')).toBeTruthy();
                    expect(Y.one('body').hasClass('hinge')).toBeTruthy();
                });

                it("with same notifier differents events", function() {
                    var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                        targetNode;

                    //Setting the first node (It's created in beforeEach test function)
                    targetNode = Y.one('#testzone .test');
                    targetNode.setAttribute('data-anijs', dataAnijJS);


                    //Creating the second element
                    var htmlNode = '<div class="test2">Test2</div>';
                    Y.one('#testzone').appendChild(htmlNode);

                    dataAnijJS = 'if: customevent2, on: $customEventProvider, do: hinge, to: body';
                    targetNode = Y.one('#testzone .test2');
                    targetNode.setAttribute('data-anijs', dataAnijJS);

                    AniJS.run();

                    expect(AniJS.getNotifier('customEventProvider') !== undefined).toBeTruthy();

                    var customEventProvider = AniJS.getNotifier('customEventProvider');

                    customEventProvider.dispatchEvent('customevent');

                    jasmine.clock().tick(101);
                    expect(Y.one('body').hasClass('bounce')).toBeTruthy();
                    expect(Y.one('body').hasClass('hinge')).toBeFalsy();

                    // customEventProvider.dispatchEvent('customevent2');
                    // expect(Y.one('body').hasClass('bounce')).toBeTruthy();
                    // expect(Y.one('body').hasClass('hinge')).toBeTruthy();
                });

                it("with differents notifier", function() {
                    var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                        targetNode;

                    //Setting the first node (It's created in beforeEach test function)
                    targetNode = Y.one('#testzone .test');
                    targetNode.setAttribute('data-anijs', dataAnijJS);

                    dataAnijJS = 'if: customevent, on: $customEventProvider2, do: hinge, to: body';
                    targetNode = Y.one('#testzone .test2');
                    targetNode.setAttribute('data-anijs', dataAnijJS);

                    AniJS.run();

                    expect(AniJS.getNotifier('customEventProvider')).not.toBeUndefined();
                    expect(AniJS.getNotifier('customEventProvider2')).not.toBeUndefined();

                    var customEventProvider = AniJS.getNotifier('customEventProvider');

                    customEventProvider.dispatchEvent('customevent');

                    jasmine.clock().tick(101);
                    expect(Y.one('body').hasClass('bounce')).toBeTruthy();

                    var customEventProvider2 = AniJS.getNotifier('customEventProvider2');

                    customEventProvider2.dispatchEvent('customevent');

                    jasmine.clock().tick(101);
                    expect(Y.one('body').hasClass('hinge')).toBeTruthy();
                });
            });

            describe("Creating Event Provider Using Javascript", function() {
                beforeEach(function() {
                    jasmine.clock().install();
                });

                afterEach(function() {
                    Y.one('body').removeClass('bounce');
                    Y.one('body').removeClass('hinge');
                    AniJS.notifierCollection['customEventProvider'] = null;
                    delete AniJS.notifierCollection['customEventProvider'];
                    jasmine.clock().uninstall();
                });

                it("with string", function() {
                    var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                        targetNode;

                    AniJS.createAnimation([{
                        event: 'customevent',
                        eventTarget: '$customEventProvider',
                        behaviorTarget: 'body',
                        behavior: 'bounce',
                        before: function(e, animationContext){
                            if( 1 ){
                                //Run the animation
                                animationContext.run()
                            }
                        }
                    }]);

                    expect(AniJS.getNotifier('customEventProvider')).not.toBeUndefined();

                    var customEventProvider = AniJS.getNotifier('customEventProvider');

                    customEventProvider.dispatchEvent('customevent');
                    jasmine.clock().tick(101);
                    expect(Y.one('body').hasClass('bounce')).toBeTruthy();
                });

                it("with EventProviderObject", function() {
                    var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                        targetNode;

                    var notifier = {
                        id: 'customEventProvider',
                        value: AniJS.EventSystem.createEventTarget()
                    }

                    AniJS.createAnimation([{
                        event: 'customevent',
                        eventTarget: notifier,
                        behaviorTarget: 'body',
                        behavior: 'bounce',
                        before: function(e, animationContext){
                            if( 1 ){
                                //Run the animation
                                animationContext.run()
                            }
                        }
                    }]);

                    expect(AniJS.getNotifier('customEventProvider')).not.toBeUndefined();

                    var customEventProvider = AniJS.getNotifier('customEventProvider');

                    customEventProvider.dispatchEvent('customevent');

                    jasmine.clock().tick(101);

                    expect(Y.one('body').hasClass('bounce')).toBeTruthy();
                });

                it("with Non EventProviderObject", function() {
                    var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                        targetNode;

                    var notifier = {
                        id: 'customEventProvider',
                        value: {}
                    }

                    AniJS.createAnimation([{
                        event: 'customevent',
                        eventTarget: notifier,
                        behaviorTarget: 'body',
                        behavior: 'bounce',
                        before: function(e, animationContext){
                            if( 1 ){
                                //Run the animation
                                animationContext.run()
                            }
                        }
                    }]);

                    expect(AniJS.notifierCollection['customEventProvider']).toBeUndefined();

                    expect(AniJS.getNotifier('customEventProvider')).toBeUndefined();
                });
            });
        });
    });
});





YUI().use('node', 'node-event-simulate', function (Y) {
    var AniJSTest = {
        Utils:{}
    };

    AniJSTest.Utils.settingEnviroment = function(dataAnijJS){
        var htmlNode = '<div class="test">Test</div>',
            targetNode;

        //Ponemos el nodo en la zona de pruebas
        Y.one('#testzone').appendChild(htmlNode);
        targetNode = Y.one('#testzone .test');
        targetNode.setAttribute('data-anijs', dataAnijJS);
        return targetNode;
    };

    describe("AniJS", function() {

        //---------------------------------------------------------------------
        // Animation execution management before running it
        //---------------------------------------------------------------------
        describe("Animation execution management before running it.", function() {

            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
            });

            describe('when stop the animation execution', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });

                it("then the animation it's not executed", function() {
                    expect(Y.one('body').hasClass('bounce')).toBeFalsy();
                });
            });

            describe('when run the animation execution', function(){
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction, after: $afterFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext, params){
                        animationContext.run();
                    };

                    AniJSDefaultHelper.afterFunction = function(e, animationContext, params){
                        done();
                    };

                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });

                it("then the animation is executed", function() {
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });
        });

        //---------------------------------------------------------------------
        // Execute a function after animation run
        //---------------------------------------------------------------------
        describe("Execute a function after animation run", function() {
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
            });

            describe("and it's empty", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce animated, to: body, after: $afterFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.afterFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });

                it("then the function is executed", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                });
            });

            describe("and the function is non registered ", function() {
                beforeEach(function(done){
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce animated, to: body, after: $afterNonRegistered',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //corremos AniJS
                    AniJS.run();

                    targetNode.on('click', function(e){
                        done();
                    },this, true);

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                //Se espera que no cree la funcion
                it("then the function not to be created", function() {
                    expect(AniJS.getHelper['afterNonRegistered']).toBeFalsy();
                });
            });

        });

        //---------------------------------------------------------------------
        // Helpers instance definition.
        //---------------------------------------------------------------------
        describe("Helpers instance definition.", function() {
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
            });

            describe("when the helper it's empty", function() {
                beforeEach(function(done){
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction, helper: emptyHelper',
                        targetNode,
                        emptyHelper = '';

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Registramos un helper vacio
                    AniJS.registerHelper('emptyHelper', emptyHelper);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.on('click', function(e){
                        done();
                    },this, true);

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                //Se espera que no cree la funcion
                it("then a new helper could not be created", function() {
                    expect(AniJS.getHelper['emptyHelper']).toBeUndefined();
                });
            });

            describe("when the helper is a function", function() {
                beforeEach(function(done){
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction, helper: emptyHelper',
                        targetNode,
                        emptyHelper;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);


                    emptyHelper = function(){};

                    //Registramos un helper vacio
                    AniJS.registerHelper('emptyHelper', emptyHelper);

                    //corremos AniJS
                    AniJS.run();

                    targetNode.on('click', function(e){
                        done();
                    },this, true);

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                //Se espera que no cree la funcion
                it("then a new helper could not be created", function() {
                    expect(AniJS.getHelper['emptyHelper']).toBeUndefined();
                });
            });
        });
    });
});





YUI().use('node', 'node-event-simulate', function (Y) {
    var AniJSTest = {
        Utils: {
            settingCloneEnviroment: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='cloneNode' > CloneNode </div>");
                Y.one('#testzone').appendChild("<div id='holdCloned' class='classHoldCloned' > </div>");

                var targetNode = Y.one('#testzone .cloneNode');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            },
            settingCloneEnviromentWithParams: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='cloneNode' > CloneNode </div>");
                Y.one('#testzone').appendChild("<div id='foo' > III </div>");
                Y.one('#testzone').appendChild("<div id='holdCloned' class='classHoldCloned' > </div>");

                var targetNode = Y.one('#testzone .cloneNode');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            }
        }
    },
    AniJSDefaultHelper = null;

    describe("Execute the helper fuction clone", function() {
        afterEach(function() {
            Y.one('body').removeClass('bounce');
            if(Y.all('#testzone .cloneNode') !== null) {
                Y.all('#testzone .cloneNode').remove();
            }
            if(Y.one('#holdCloned') !== null) {
                Y.one('#holdCloned').remove();
            }
            if(Y.one('#foo') !== null) {
                Y.one('#foo').remove();
            }
        });

        describe("on do action without params I ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function cloneWrapper is created for execute the
                 * helper function clone on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $cloneWrapper',
                    targetNode = AniJSTest.Utils.settingCloneEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.cloneWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.clone(e, animationContext, params);
                    done();
                }

                spyOn(AniJSDefaultHelper, 'cloneWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("empty function", function() {
                expect(AniJSDefaultHelper.cloneWrapper).toHaveBeenCalled();
                expect(Y.all('#testzone .cloneNode')._nodes.length === 2).toBeTruthy();
            });
        });

        describe("on do action without params II ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function cloneWrapper is created for execute the
                 * helper function clone on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $cloneWrapper, to: #holdCloned',
                    targetNode = AniJSTest.Utils.settingCloneEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.cloneWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.clone(e, animationContext, params);
                    done();
                }

                spyOn(AniJSDefaultHelper, 'cloneWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });
            it("empty function and 'behavior target to'; html tag ID target", function() {
                expect(AniJSDefaultHelper.cloneWrapper).toHaveBeenCalled();
                expect(Y.all('#holdCloned .cloneNode')._nodes.length === 1).toBeTruthy();
            });
        });

        describe("on do action without params II ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function cloneWrapper is created for execute the
                 * helper function clone on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $cloneWrapper, to: .classHoldCloned',
                    targetNode = AniJSTest.Utils.settingCloneEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.cloneWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.clone(e, animationContext, params);
                    done();
                }

                spyOn(AniJSDefaultHelper, 'cloneWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });
            it("empty function and 'behavior target to'; css class target", function() {
                expect(AniJSDefaultHelper.cloneWrapper).toHaveBeenCalled();
                expect(Y.all('#holdCloned .cloneNode')._nodes.length === 1).toBeTruthy();
            });
        });

        describe("on do action with params I ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function cloneWrapper is created for execute the
                 * helper function clone on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $cloneWrapper #foo, to: #holdCloned',
                    targetNode = AniJSTest.Utils.settingCloneEnviromentWithParams(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.cloneWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.clone(e, animationContext, params);
                    done();
                }

                spyOn(AniJSDefaultHelper, 'cloneWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("one param without repetition", function() {
                expect(AniJSDefaultHelper.cloneWrapper).toHaveBeenCalled();
                expect(Y.one('#holdCloned')._node.children.length === 1).toBeTruthy();
            });
        });

        describe("on do action with params II ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function cloneWrapper is created for execute the
                 * helper function clone on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $cloneWrapper #foo | 1000, to: #holdCloned',
                    targetNode = AniJSTest.Utils.settingCloneEnviromentWithParams(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.cloneWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.clone(e, animationContext, params);
                    done();
                }
                spyOn(AniJSDefaultHelper, 'cloneWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("one param with repetition", function() {
                expect(AniJSDefaultHelper.cloneWrapper).toHaveBeenCalled();
                expect(Y.one('#holdCloned')._node.children.length === 1000).toBeTruthy();
            });
        });
    });
});
YUI().use('node', 'node-event-simulate', function (Y) {

        //---------------------------------------------------------------------
        // Listen for custom events
        //---------------------------------------------------------------------
        describe("JQuery Event System", function() {
            beforeEach(function() {
                //Aqui creo el nodo
                var htmlNode = '<div class="test">Test</div>';
                Y.one('#testzone').appendChild(htmlNode);
            });

            afterEach(function() {
                Y.one('#testzone .test').remove();

                //Hay que unregister todos los eventsProvides sino hay test que van a fallar
            });

            it("Simple Custom Event Creation JQuery", function() {
                var dataAnijJS = 'if: customevent, on: $customEventProvider, do: bounce, to: body',
                    targetNode;

                targetNode = Y.one('#testzone .test');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                AniJS.run();

                console.log(AniJS);

               

                expect(AniJS.getEventProvider('customEventProvider') !== undefined).toBeTruthy();

                var customEventProvider = AniJS.getEventProvider('customEventProvider');

                
                customEventProvider.trigger('customevent');

                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
            });
        });
});





YUI().use('node', 'node-event-simulate', function (Y) {
    var AniJSTest = {
        Utils:{}
    };

    AniJSTest.Utils.settingEnviroment = function(dataAnijJS){
        var htmlNode = '<div class="test">Test</div>',
            targetNode;

        //Ponemos el nodo en la zona de pruebas
        Y.one('#testzone').appendChild(htmlNode);
        targetNode = Y.one('#testzone .test');
        targetNode.setAttribute('data-anijs', dataAnijJS);
        return targetNode;
    };
    describe("when execute before or after functions with parameters", function() {
        //Aqui se pueden poner variables para tener acceso globalmente


        describe("and the type of function is (before)", function() {
            var paramsN, paramsArray = [];
            beforeEach(function() {
                var paramsLength = Math.round( Math.random(10) * 100 )
                paramsN = "";
                while(paramsLength-- > 1) {
                    paramsN += "test"+ paramsLength + " | ";
                }
                paramsN += "test"+ paramsLength;

                var paramsArrayTmp = paramsN.split("|");
                paramsLength = paramsArrayTmp.length;

                 while(paramsLength-- > 0) {
                    paramsArray[paramsLength] = paramsArrayTmp[paramsLength].trim();
                 }
            });
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
                Y.one('body').removeClass('animated');
                paramsN = "";
                paramsArray = [];
            });
            describe("when the before helper function no execute the context run", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("then the interaction will do not occours", function() {
                    expect(Y.one('body').hasClass('bounce') === false).toBeTruthy();
                });
            });
            describe("and the before function is setting without params", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion no recibe parametros al ser invocada", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();

                    //Permite chequear con que argumentos se ha llamado la funcion
                    //Es un array
                    expect(AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2].length).toEqual(0);
                });
            });
            describe("and the before function is setting with (1 param) cuyo valor es (test)", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction test',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con un parametro cuyo valor es test", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2].length).toEqual(1);

                    //Chequeamos que el argumento sea == test
                    expect(AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2][0]).toEqual("test");
                });
            });
            describe("and the before function is setting with (2 param) cuyos valores son (test) | (test2)", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction test | test2',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con (2) parametros cuyos valores son test y test2", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2].length).toEqual(2);

                    //Chequeamos que el argumento sea == test
                    expect(AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2][0]).toEqual("test");
                    expect(AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2][1]).toEqual("test2");
                });
            });
            describe("and the before function is setting with (N params)", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce, to: body, before: $beforeFunction ' + paramsN,
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion before
                    AniJSDefaultHelper.beforeFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con (n) parametros", function() {

                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();

                    var params = AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2];

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(params.length).toEqual(params.length);

                    expect(params.length == paramsArray.length).toBeTruthy();
                    var i = paramsArray.length;
                    while(i-- > 0) {
                        expect(params[i] ===  paramsArray[i]).toBeTruthy();
                    }
                });
            });
        });

        describe("and the type of function is (after)", function() {
            var paramsN, paramsArray = [];
            beforeEach(function() {
                var paramsLength = Math.round( Math.random(10) * 100 )
                paramsN = "";
                while(paramsLength-- > 1) {
                    paramsN += "test"+ paramsLength + " | ";
                }
                paramsN += "test"+ paramsLength;

                var paramsArrayTmp = paramsN.split("|");
                paramsLength = paramsArrayTmp.length;

                 while(paramsLength-- > 0) {
                    paramsArray[paramsLength] = paramsArrayTmp[paramsLength].trim();
                 }
            });
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
                Y.one('body').removeClass('animated');
                paramsN = "";
                paramsArray = [];
            });
            describe("and the after function is setting without params", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce animated 0param, to: body, after: $afterFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion after
                    AniJSDefaultHelper.afterFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion no recibe parametros al ser invocada", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();

                    //Permite chequear con que argumentos se ha llamado la funcion
                    //Es un array
                    expect(AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2].length).toEqual(0);
                });
            });
            describe("and the after function is setting with (1 param) cuyo valor es (test)", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce animated 1param, to: body, after: $afterFunction test',
                        targetNode,
                        AniJSDefaultHelper;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion after
                    AniJSDefaultHelper.afterFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    AniJS.run();


                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con un parametro cuyo valor es test", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2].length).toEqual(1);

                    //Chequeamos que el argumento sea == test
                    expect(AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2][0]).toEqual("test");
                });
            });
            describe("and the after function is setting with (2 param) cuyos valores son (test) | (test2)", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated 2param, to: body, after: $afterFunction test | test2',
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion after
                    AniJSDefaultHelper.afterFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con (2) parametros cuyos valores son test y test2", function() {
                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2].length).toEqual(2);

                    //Chequeamos que el argumento sea == test
                    expect(AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2][0]).toEqual("test");
                    expect(AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2][1]).toEqual("test2");
                });
            });
            describe("and the after function is setting with (N params)", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                var dataAnijJS = 'if: click, do: bounce animated, to: body, after: $afterFunction ' + paramsN,
                    targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    //Se agrega una funcion after
                    AniJSDefaultHelper.afterFunction = function(e, animationContext){
                        //Permite seguir con las pruebas
                        done();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con (n) parametros", function() {

                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();

                    var params = AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2];

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(params.length).toEqual(paramsArray.length);

                    var i = paramsArray.length;
                    while(i-- > 0) {
                        expect(params[i] ===  paramsArray[i]).toBeTruthy();
                    }
                });
            });
        });

        //---------------------------------------------------------------------
        // Execute a function after with params
        //---------------------------------------------------------------------
        describe("and are execute the (before) function and (after) function", function() {
            var paramsN, paramsArray = [];
            beforeEach(function() {
                var paramsLength = Math.round( Math.random(10) * 100 )
                paramsN = "";
                while(paramsLength-- > 1) {
                    paramsN += "test"+ paramsLength + " | ";
                }
                paramsN += "test"+ paramsLength;

                var paramsArrayTmp = paramsN.split("|");
                paramsLength = paramsArrayTmp.length;

                 while(paramsLength-- > 0) {
                    paramsArray[paramsLength] = paramsArrayTmp[paramsLength].trim();
                 }
            });
            afterEach(function() {
                Y.one('#testzone .test').remove();
                Y.one('body').removeClass('bounce');
                Y.one('body').removeClass('animated');
                paramsN = "";
                paramsArray = [];
            });

            describe("cuando las funciones son configuradas con (0) parametros", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce animated, to: body, after: $afterFunction, before: $beforeFunction',
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    AniJS.getHelper().afterFunction = function(e, animationContext, params) {
                        done();
                    };

                    AniJS.getHelper().beforeFunction = function(e, animationContext, params) {
                        animationContext.run();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con (0) parametros", function() {
                    var params;

                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();

                    params = AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2];
                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(params.length).toEqual(0);

                    params = AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2];
                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(params.length).toEqual(0);
                });
            });

            describe("cuando las funciones son configuradas con (n) parametros", function() {
                beforeEach(function(done) {
                    //Se configuran las precondiciones para la prueba
                    var dataAnijJS = 'if: click, do: bounce animated, to: body, after: $afterFunction '
                                        + paramsN + ', before: $beforeFunction ' + paramsN ,
                        targetNode;

                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                    //Se obtiene el helper por defecto
                    AniJSDefaultHelper = AniJS.getHelper();

                    AniJS.getHelper().afterFunction = function(e, animationContext, params) {
                        done();
                    };

                    AniJS.getHelper().beforeFunction = function(e, animationContext, params) {
                        animationContext.run();
                    };

                    // Ponemos un spy a dicha funcion para saber cuando se llama
                    // y con que parametros etc
                    // http://jasmine.github.io/2.0/introduction.html#section-Spies
                    // callThrough luego ejecuta el comportamiento por defecto
                    spyOn(AniJSDefaultHelper, 'beforeFunction').and.callThrough();
                    spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                    //corremos AniJS
                    AniJS.run();

                    //Simulamos el evento click
                    targetNode.simulate("click");
                });
                it("entonces la funcion es invocada con (n) parametros", function() {
                    var params;

                    //Permite comprobar que la funcion se ha llamado correctamente
                    expect(AniJSDefaultHelper.beforeFunction).toHaveBeenCalled();
                    expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();

                    params = AniJSDefaultHelper.beforeFunction.calls.argsFor(0)[2];

                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(params.length).toEqual(paramsArray.length);

                    var i = paramsArray.length;
                    while(i-- > 0) {
                        expect(params[i] ===  paramsArray[i]).toBeTruthy();
                    }

                    params = AniJSDefaultHelper.afterFunction.calls.argsFor(0)[2];
                    //Chequeamos con cuantos argumentos fue llamada la funcion
                    expect(params.length).toEqual(paramsArray.length);

                    i = paramsArray.length;
                    while(i-- > 0) {
                        expect(params[i] ===  paramsArray[i]).toBeTruthy();
                    }
                });
            });
        });

    });
});





YUI().use('node', 'node-event-simulate', function (Y) {

    var AniJSTest = {
        Utils: {
            settingEnviroment: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='testRemove' > Test Remove </div>");
                Y.one('#testzone').appendChild("<div class='classRemove' > Class to Remove </div>");
                Y.one('#testzone').appendChild("<div id='idRemove' > ID to Remove </div>");

                var targetNode = Y.one('#testzone .testRemove');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            },
            settingManyHtmlItems: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='testRemove'> Test Remove </div>");
                var i = 100;
                while(i-- > 0) {
                    Y.one('#testzone').appendChild("<div class='classRemove'> Class to Remove </div>");
                }
                Y.one('#testzone').appendChild("<div id='idRemove'> ID to Remove </div>");
                var targetNode = Y.one('#testzone .testRemove');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            }
        }
    },
    AniJSDefaultHelper = null;

    describe("Execute the helper fuction remove", function() {
        afterEach(function() {
            Y.one('body').removeClass('bounce');
            if(Y.one('#testzone .testRemove') !== null) {
                Y.one('#testzone .testRemove').remove();
            }
            if(Y.one('#testzone .classRemove') !== null) {
                Y.one('#testzone .classRemove').remove();
            }
            if(Y.one('#idRemove') !== null) {
                Y.one('#idRemove').remove();
            }
        });

        describe("on do action, without params ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.remove(e, animationContext, params);
                    done();
                };

                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("enotonces la funcion remove es llamada sin parametros y es eliminado el elemento target", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(AniJSDefaultHelper.removeWrapper.calls.argsFor(0)[2].length).toEqual(0);
                expect(Y.one('#testzone .testRemove')).toBeNull();
            });
        });

        describe("on do action, without params and 'to' behavior ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper, to: #idRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.remove(e, animationContext, params);
                    done();
                }

                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });
            it("and html tag ID target as selector", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('#idRemove')).toBeNull();
            });
        });

        describe("on do action with one param, ", function() {
            beforeEach(function(done) {
                  /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper .classRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.remove(e, animationContext, params);
                    done();
                }
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("css class param", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('#testzone .classRemove')).toBeNull();
            });
        });

        describe("on do action with one param tagID, ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper #idRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.remove(e, animationContext, params);
                    done();
                }
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("HTML tag id", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('#idRemove')).toBeNull();
            });
        });

        describe("on do action with many params I", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper .classRemove | #idRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.remove(e, animationContext, params);
                    done();
                }
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");

            });

            it("differents params types", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('#testzone .classRemove')).toBeNull();
                expect(Y.one('#idRemove')).toBeNull();
            });
        });

        describe("on do action with many params II", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper div.classRemove',
                    targetNode = AniJSTest.Utils.settingManyHtmlItems(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.remove(e, animationContext, params);
                    done();
                }
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("remove all elements that css class name are .classRemove ", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('#testzone div.classRemove')).toBeNull();
            });
        });
    });
});
YUI().use('node', 'node-event-simulate', function (Y) {

    var AniJSTest = {
        Utils: {
            settingEnviroment: function(dataAnijJS) {
                var parent = Y.Node.create('<div class="testRemoveParent" > Parent </div>');
                Y.one('#testzone').appendChild(parent);
                parent.appendChild("<div class='testRemove' > Test Remove </div>");
                parent.appendChild("<div class='classRemove' > Class to Remove </div>");
                parent.appendChild("<div id='idRemove' > ID to Remove </div>");

                var targetNode = Y.one('#testzone .testRemove');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            },
            settingManyHtmlItems: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='testRemove'> Test Remove </div>");
                var i = 100;
                while(i-- > 0) {
                    Y.one('#testzone').appendChild("<div class='classRemove'> Class to Remove </div>");
                }
                Y.one('#testzone').appendChild("<div id='idRemove'> ID to Remove </div>");
                var targetNode = Y.one('#testzone .testRemove');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            }
        }
    },
    AniJSDefaultHelper = null;

    describe("Execute the helper fuction removeParent", function() {
        afterEach(function() {
            Y.one('body').removeClass('bounce');
            if(Y.one('#testzone .testRemove') !== null) {
                Y.one('#testzone .testRemove').remove();
            }
            if(Y.one('#testzone .classRemove') !== null) {
                Y.one('#testzone .classRemove').remove();
            }
            if(Y.one('#idRemove') !== null) {
                Y.one('#idRemove').remove();
            }
        });

        describe("on do action, without params ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.removeParent(e, animationContext, params);
                    done();
                };

                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("enotonces la funcion remove es llamada sin parametros y es eliminado el elemento .testRemoveParent", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(AniJSDefaultHelper.removeWrapper.calls.argsFor(0)[2].length).toEqual(0);
                expect(Y.one('#testzone .testRemoveParent')).toBeNull();
            });
        });

        describe("on do action, without params and 'to' behavior ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper, to: #idRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.removeParent(e, animationContext, params);
                    done();
                };

                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });
            it("and html tag ID target as selector", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('.testRemoveParent')).toBeNull();
            });
        });

        describe("on do action with one param, ", function() {
            beforeEach(function(done) {
                  /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper .classRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.removeParent(e, animationContext, params);
                    done();
                };
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("css class param", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('.testRemoveParent')).toBeNull();
            });
        });

        describe("on do action with one param tagID, ", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper #idRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.removeParent(e, animationContext, params);
                    done();
                };
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("HTML tag id", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('.testRemoveParent')).toBeNull();
            });
        });

        describe("on do action with many params I", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper .classRemove | #idRemove',
                    targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.removeParent(e, animationContext, params);
                    done();
                };
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");

            });

            it("differents params types", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('.testRemoveParent')).toBeNull();
            });
        });

        describe("on do action with many params II", function() {
            beforeEach(function(done) {
                /**
                 * the wrapper function removeWrapper is created for execute the
                 * helper function remove on AniJSDefaultHelper object.
                 */
                var dataAnijJS = 'if: click, do: $removeWrapper div.classRemove',
                    targetNode = AniJSTest.Utils.settingManyHtmlItems(dataAnijJS);

                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.removeWrapper = function(e, animationContext, params) {
                    AniJSDefaultHelper.removeParent(e, animationContext, params);
                    done();
                };
                spyOn(AniJSDefaultHelper, 'removeWrapper').and.callThrough();
                AniJS.run();
                targetNode.simulate("click");
            });

            it("remove all the fathers elements that css class name are .classRemove ", function() {
                expect(AniJSDefaultHelper.removeWrapper).toHaveBeenCalled();
                expect(Y.one('.testRemoveParent')).toBeNull();
            });
        });
    });
});
YUI().use('node', 'node-event-simulate', function (Y) {

    var AniJSTest = {
        Utils: {
            settingEnviroment: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='ancestorsTest red-ancestors'> " +
                                                    "<div id='dv1' > </div> " +
                                                    "<ul class='ul1'> <li> <p></p> </li> <li> </li> <li> </li> </ul>" +
                                                    "<div id='dv2'> </div>" +
                                                "</div>");

                var targetNode = Y.one('#testzone .ul1');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            },
            settingHelper: function(dataAnijJS, done, count) {
                var targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);
                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.afterFunction = function(e, animationContext, params) {
                    count--;
                    if(count == 0)
                        done();
                };
                spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                AniJS.run();
                targetNode.simulate("click");
            }
        }
    },
    AniJSDefaultHelper = null;

    describe("Execute the selector fuction ancestor", function() {
        afterEach(function() {
            Y.all('.hidden').removeClass('hidden');
            if(Y.one('#testzone .ancestorsTest') !== null) {
                Y.one('#testzone .ancestorsTest').remove();
            }

        });

        describe("on do action, without params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hidden, to: $ancestors, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 3)
            });

            it("add hidden class to all ancestors that 'ul class=ul1' ", function() {
                expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                expect(Y.all('.hidden')._nodes.length).toEqual(3);
            });
        });
        describe("on do action, without params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hidden, to: $ancestors target | .red-ancestors, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 1)
            });

            it("add hidden class to all ancestors that css class is .red-ancestors", function() {
                expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                expect(Y.all('.hidden')._nodes.length).toEqual(1);
            });
        });

        describe("on do action, without params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hidden, to: $ancestors .red-ancestors, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 3)
            });

            it("add hidden css class to all ancestors of elements that  contains css class .red-ancestors", function() {
                expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                expect(Y.all('.hidden')._nodes.length).toEqual(3);
            });
        });
    });
});
YUI().use('node', 'node-event-simulate', function (Y) {

    var AniJSTest = {
        Utils: {
            settingEnviroment: function(dataAnijJS) {
                Y.one('#testzone').appendChild("<div class='childrenTest'> " +
                                                    "<div id='dv1' > </div> " +
                                                    "<ul id='ul1'> <li> <p></p> </li> <li> </li> <li> </li> </ul>" +
                                                    "<div id='dv2'> <div > </div>  </div>" +
                                                "</div>");

                var targetNode = Y.one('#testzone .childrenTest');
                targetNode.setAttribute('data-anijs', dataAnijJS);
                return targetNode;
            },
            settingHelper: function(dataAnijJS, done, count) {
                var targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);
                AniJSDefaultHelper = AniJS.getHelper();
                AniJSDefaultHelper.afterFunction = function(e, animationContext, params) {
                    count--;
                    if(count == 0)
                        done();
                };
                spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();

                AniJS.run();
                targetNode.simulate("click");
            }
        }
    },
    AniJSDefaultHelper = null;

    describe("Execute the selector fuction children", function() {
        afterEach(function() {
            Y.one('body').removeClass('bounce');
            if(Y.one('#testzone .childrenTest') !== null) {
                Y.one('#testzone .childrenTest').remove();
            }
        });

        describe("on do action, without params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hiden, to: $children, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 3)
            });

            it("add hiden class to all children that 'div class=childrenTest' ", function() {
                expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                expect(Y.all('#testzone .hiden')._nodes.length).toEqual(3);
            });
        });

        describe("on do action, with params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hiden, to: $children target, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 3)
            });

            it("add hiden class to all div class='childrenTest' children ", function() {
                expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                expect(Y.all('#testzone .hiden')._nodes.length).toEqual(3);
            });
        });

        describe("on do action, with params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hiden, to: $children target | li, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 0)
                done();
            });

            it("add hiden class to all div children that are li", function() {
                expect(AniJSDefaultHelper.afterFunction).not.toHaveBeenCalled();
                expect(Y.all('#testzone .hiden')._nodes.length).toEqual(0);
            });
        });

        describe("on do action, with params. ", function() {
            beforeEach(function(done) {
                var dataAnijJS = 'if: click, do: $addClass hiden, to: $children div, after: $afterFunction';
                AniJSTest.Utils.settingHelper(dataAnijJS, done, 3)
            });

            it("add hiden class to all div children ", function() {
                expect(AniJSDefaultHelper.afterFunction).toHaveBeenCalled();
                Y.all('#testzone .hiden');
                expect(Y.all('#testzone .hiden')._nodes.length).toEqual(3);
            });
        });


    });
});
YUI().use('node', 'node-event-simulate', function (Y) {
    var AniJSTest = {
        Utils:{}
    };
    AniJSTest.Utils.settingAfterFunctionSpy = function(callback, count){
        //Se obtiene el helper por defecto
        AniJSDefaultHelper = AniJS.getHelper();

        //Se agrega una funcion before
        AniJSDefaultHelper.afterFunction = function(e, animationContext){
            //Permite seguir con las pruebas
            if(count && count > 1){
                count--;
            } else{
                callback();
            }
        };

        // Ponemos un spy a dicha funcion para saber cuando se ejecuta la animacion
        spyOn(AniJSDefaultHelper, 'afterFunction').and.callThrough();
    };

    AniJSTest.Utils.settingHelperFunctionSpy = function(name){
        //Se obtiene el helper por defecto
        AniJSDefaultHelper = AniJS.getHelper();

        // Ponemos un spy a dicha funcion para saber cuando se ejecuta la animacion
        spyOn(AniJSDefaultHelper, name).and.callThrough();
    };



    AniJSTest.Utils.settingEnviroment = function(dataAnijJS, targetNodeSelector){
        var htmlNode = '<div class="test">' +
                            '<div class="a">' +
                                'a' +
                                '<div class="a-1" id="contenedor">' +
                                    'a-1' +
                                    '<ul id="a-1-2">' +
                                        '<li class="a-1-2-3">' +
                                            'a-1-2-3' +
                                        '</li>' +
                                    '</ul>' +
                                '</div>' +
                            '</div>' +
                        '</div>',
            targetNode,
            selector = targetNodeSelector || '.a-1-2-3';

        //Ponemos el nodo en la zona de pruebas
        Y.one('#testzone').appendChild(htmlNode);

        targetNode = Y.one('#testzone ' + selector);
        targetNode.setAttribute('data-anijs', dataAnijJS);
        return targetNode;
    };

    describe("AniJS", function() {
        afterEach(function() {
            AniJS.purgeAll();
            Y.one('#testzone .test').remove();
            Y.one('body').removeClass('bounce');
            Y.all(".testingBehavior").removeClass('testingBehavior');
        });
        describe('cuando se usan como selectores (to) [selectores CSS]', function(){
            beforeEach(function(done){
                var dataAnijJS = 'if: click, do: bounce animated, to: .a-1-2-3, after: $afterFunction',
                    targetNode;

                targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                AniJSTest.Utils.settingAfterFunctionSpy(done);

                //corremos AniJS
                AniJS.run();

                //Simulamos el evento click
                targetNode.simulate("click");
            });
            it('entonces son seleccionados los elementos que matcheen con dicho selector', function(){
                var animationContext = AniJSDefaultHelper.afterFunction.calls.argsFor(0)[1];
                expect(animationContext.behaviorTargetList.length).toEqual(1);
                expect(Y.one(animationContext.behaviorTargetList[0]).hasClass('a-1-2-3')).toBeTruthy();
            });
        });
        describe('cuando se usan como selectores (to) [funciones ayudante]', function(){
            describe('y esa funcion es de tipo $parent', function(){
                describe('cuando no recibe parametros', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, do: $addClass testingBehavior, to: $parent, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('parent');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        targetNode.simulate("click");
                    });
                    it('entonces se devuelve el padre del elemento que es propietario de la' +
                        'definicion data-anijs', function(){
                        expect(AniJSDefaultHelper.parent).toHaveBeenCalled();
                        expect(Y.one("#a-1-2").hasClass('testingBehavior')).toBeTruthy();

                    });
                });
                describe('cuando recibe 1 parametro cuyo valor es "target"', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: #contenedor,do: $addClass testingBehavior, to: $parent target, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('parent');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('#contenedor').simulate("click");
                    });
                    it('entonces se devuelve el padre del elemento que dispara el evento', function(){
                        expect(AniJSDefaultHelper.parent).toHaveBeenCalled();
                        expect(Y.one('div.a').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando recibe 1 parametro cuyo valor es algun "selector CSS"', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: #contenedor,do: $addClass testingBehavior, to: $parent #a-1-2, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                        AniJSTest.Utils.settingAfterFunctionSpy(done, 1);

                        AniJSTest.Utils.settingHelperFunctionSpy('parent');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('#contenedor').simulate("click");
                    });
                    it('entonces se devuelve los padres de todos los elementos que matchen con' +
                        'dicho selector', function(){
                        expect(AniJSDefaultHelper.parent).toHaveBeenCalled();
                        expect(Y.one('.a-1').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
            });
            describe('y esa funcion es de tipo $closest', function(){
                describe('cuando no recibe parametros', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, do: $addClass testingBehavior, to: $closest, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('closest');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        targetNode.simulate("click");
                    });
                    it('entonces se devuelve "el ancestro mas cercano" del elemento que es propietario de la' +
                        'definicion data-anijs', function(){
                        expect(AniJSDefaultHelper.closest).toHaveBeenCalled();
                        expect(Y.one('#a-1-2').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando recibe 1 parametro cuyo valor es un selector CSS', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on:#contenedor, do: $addClass testingBehavior, to: $closest .a, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS, '#contenedor');

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('closest');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('#contenedor').simulate("click");
                    });
                    it('entonces se devuelve "el ancestro mas cercano" de los elementos que matcheen con ' +
                        'dicho selector',
                    function(){
                        expect(AniJSDefaultHelper.closest).toHaveBeenCalled();
                        expect(Y.one('.test').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando se reciben 2 parametros cuyos valores son "target" | selector CSS',
                    function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: ul,do: $addClass testingBehavior, to: $closest target | .a, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('closest');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('ul').simulate("click");
                    });

                    it('entonces se devuelve "el ancestro mas cercano" que matchee con el selector" ' +
                       'del elemento que dispara el evento',
                    function(){
                        expect(AniJSDefaultHelper.closest).toHaveBeenCalled();
                        expect(Y.one('div.a').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando se reciben 2 parametros cuyos valores son "selector CSS" | selector CSS', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: ul,do: $addClass testingBehavior, to: $closest ul | .a, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS);

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('closest');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('ul').simulate("click");
                    });
                    it('entonces se devuelve "el ancestro mas cercano que matcheen con el selector" ' +
                       'de los elementos que matcheen con el selector CSS',
                    function(){
                        expect(AniJSDefaultHelper.closest).toHaveBeenCalled();
                        expect(Y.one('div.a').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
            });
            describe('y esa funcion es de tipo $find', function(){
                describe('cuando no recibe parametros', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, do: $addClass testingBehavior, to: $find, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS, '#a-1-2');

                        AniJSTest.Utils.settingAfterFunctionSpy(done, 1);

                        AniJSTest.Utils.settingHelperFunctionSpy('find');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        targetNode.simulate("click");
                    });
                    it('entonces se devuelve "TODOS los elementos descendientes" del elemento que es propietario de la' +
                        'definicion data-anijs', function(){
                        expect(AniJSDefaultHelper.find).toHaveBeenCalled();
                        expect(Y.one('li').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando recibe 1 parametro cuyo valor es "target"', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on:#a-1-2, do: $addClass testingBehavior, to: $find target, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS, '#a-1-2');

                        AniJSTest.Utils.settingAfterFunctionSpy(done, 1);

                        AniJSTest.Utils.settingHelperFunctionSpy('find');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('#a-1-2').simulate("click");
                    });
                    it('entonces se devuelve "los elementos descendientes" del elemento que dispara el evento',
                    function(){
                        expect(AniJSDefaultHelper.find).toHaveBeenCalled();
                        expect(Y.one('.a-1-2-3').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando recibe 1 parametro cuyo valor es algun "selector CSS"', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: #contenedor,do: $addClass testingBehavior, to: $find #a-1-2, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS, '.a');

                        AniJSTest.Utils.settingAfterFunctionSpy(done, 1);

                        AniJSTest.Utils.settingHelperFunctionSpy('find');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('#contenedor').simulate("click");
                    });
                    it('entonces se devuelve "los elementos descendientes" de los elementos ' +
                        'que matchen con dicho selector', function(){
                        expect(AniJSDefaultHelper.find).toHaveBeenCalled();
                        expect(Y.one('.a-1-2-3').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando se reciben 2 parametros cuyos valores son "target" | selector CSS',
                    function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: .test,do: $addClass testingBehavior, to: $find target | .a, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS, '.a');

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('find');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('.test').simulate("click");
                    });

                    it('entonces se devuelve "los elementos descendientes" que matchee con el selector" ' +
                       'del elemento que dispara el evento',
                    function(){
                        expect(AniJSDefaultHelper.find).toHaveBeenCalled();
                        expect(Y.one('div.a').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
                describe('cuando se reciben 2 parametros cuyos valores son "selector CSS" | selector CSS', function(){
                    beforeEach(function(done){
                        var dataAnijJS = 'if: click, on: ul,do: $addClass testingBehavior, to: $find .a | ul, after: $afterFunction',
                            targetNode;

                        targetNode = AniJSTest.Utils.settingEnviroment(dataAnijJS, '.a');

                        AniJSTest.Utils.settingAfterFunctionSpy(done);

                        AniJSTest.Utils.settingHelperFunctionSpy('find');

                        //corremos AniJS
                        AniJS.run();

                        //Simulamos el evento click
                        Y.one('ul').simulate("click");
                    });
                    it('entonces se devuelve "los elementos descendientes que matcheen con el selector" ' +
                       'de los elementos que matcheen con el selector CSS',
                    function(){
                        expect(AniJSDefaultHelper.find).toHaveBeenCalled();
                        expect(Y.one('ul').hasClass('testingBehavior')).toBeTruthy();
                    });
                });
            });
        });
    });
});





/**
 Starting with version 2.0, this file "boots" Jasmine, performing all of the necessary initialization before executing the loaded environment and all of a project's specs. This file should be loaded after `jasmine.js`, but before any project source files or spec files are loaded. Thus this file can also be used to customize Jasmine for a project.

 If a project is using Jasmine via the standalone distribution, this file can be customized directly. If a project is using Jasmine via the [Ruby gem][jasmine-gem], this file can be copied into the support directory via `jasmine copy_boot_js`. Other environments (e.g., Python) will have different mechanisms.

 The location of `boot.js` can be specified and/or overridden in `jasmine.yml`.

 [jasmine-gem]: http://github.com/pivotal/jasmine-gem
 */

(function() {

  /**
   * ## Require &amp; Instantiate
   *
   * Require Jasmine's core files. Specifically, this requires and attaches all of Jasmine's code to the `jasmine` reference.
   */
  window.jasmine = jasmineRequire.core(jasmineRequire);

  /**
   * Since this is being run in a browser and the results should populate to an HTML page, require the HTML-specific Jasmine code, injecting the same reference.
   */
  jasmineRequire.html(jasmine);

  /**
   * Create the Jasmine environment. This is used to run all specs in a project.
   */
  var env = jasmine.getEnv();

  /**
   * ## The Global Interface
   *
   * Build up the functions that will be exposed as the Jasmine public interface. A project can customize, rename or alias any of these functions as desired, provided the implementation remains unchanged.
   */
  var jasmineInterface = {
    describe: function(description, specDefinitions) {
      return env.describe(description, specDefinitions);
    },

    xdescribe: function(description, specDefinitions) {
      return env.xdescribe(description, specDefinitions);
    },

    it: function(desc, func) {
      return env.it(desc, func);
    },

    xit: function(desc, func) {
      return env.xit(desc, func);
    },

    beforeEach: function(beforeEachFunction) {
      return env.beforeEach(beforeEachFunction);
    },

    afterEach: function(afterEachFunction) {
      return env.afterEach(afterEachFunction);
    },

    expect: function(actual) {
      return env.expect(actual);
    },

    pending: function() {
      return env.pending();
    },

    spyOn: function(obj, methodName) {
      return env.spyOn(obj, methodName);
    },

    jsApiReporter: new jasmine.JsApiReporter({
      timer: new jasmine.Timer()
    })
  };

  /**
   * Add all of the Jasmine global/public interface to the proper global, so a project can use the public interface directly. For example, calling `describe` in specs instead of `jasmine.getEnv().describe`.
   */
  if (typeof window == "undefined" && typeof exports == "object") {
    extend(exports, jasmineInterface);
  } else {
    extend(window, jasmineInterface);
  }

  /**
   * Expose the interface for adding custom equality testers.
   */
  jasmine.addCustomEqualityTester = function(tester) {
    env.addCustomEqualityTester(tester);
  };

  /**
   * Expose the interface for adding custom expectation matchers
   */
  jasmine.addMatchers = function(matchers) {
    return env.addMatchers(matchers);
  };

  /**
   * Expose the mock interface for the JavaScript timeout functions
   */
  jasmine.clock = function() {
    return env.clock;
  };

  /**
   * ## Runner Parameters
   *
   * More browser specific code - wrap the query string in an object and to allow for getting/setting parameters from the runner user interface.
   */

  var queryString = new jasmine.QueryString({
    getWindowLocation: function() { return window.location; }
  });

  var catchingExceptions = queryString.getParam("catch");
  env.catchExceptions(typeof catchingExceptions === "undefined" ? true : catchingExceptions);

  /**
   * ## Reporters
   * The `HtmlReporter` builds all of the HTML UI for the runner page. This reporter paints the dots, stars, and x's for specs, as well as all spec names and all failures (if any).
   */
  var htmlReporter = new jasmine.HtmlReporter({
    env: env,
    onRaiseExceptionsClick: function() { queryString.setParam("catch", !env.catchingExceptions()); },
    getContainer: function() { return document.body; },
    createElement: function() { return document.createElement.apply(document, arguments); },
    createTextNode: function() { return document.createTextNode.apply(document, arguments); },
    timer: new jasmine.Timer()
  });

  /**
   * The `jsApiReporter` also receives spec results, and is used by any environment that needs to extract the results  from JavaScript.
   */
  env.addReporter(jasmineInterface.jsApiReporter);
  env.addReporter(htmlReporter);

  /**
   * Filter which specs will be run by matching the start of the full name against the `spec` query param.
   */
  var specFilter = new jasmine.HtmlSpecFilter({
    filterString: function() { return queryString.getParam("spec"); }
  });

  env.specFilter = function(spec) {
    return specFilter.matches(spec.getFullName());
  };

  /**
   * Setting up timing functions to be able to be overridden. Certain browsers (Safari, IE 8, phantomjs) require this hack.
   */
  window.setTimeout = window.setTimeout;
  window.setInterval = window.setInterval;
  window.clearTimeout = window.clearTimeout;
  window.clearInterval = window.clearInterval;

  /**
   * ## Execution
   *
   * Replace the browser window's `onload`, ensure it's called, and then run all of the loaded specs. This includes initializing the `HtmlReporter` instance and then executing the loaded Jasmine environment. All of this will happen after all of the specs are loaded.
   */
  var currentWindowOnload = window.onload;

  window.onload = function() {
    if (currentWindowOnload) {
      currentWindowOnload();
    }
    htmlReporter.initialize();
    env.execute();
  };

  /**
   * Helper function for readability above.
   */
  function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
  }

}());

/*
Copyright (c) 2008-2013 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function getJasmineRequireObj() {
  if (typeof module !== "undefined" && module.exports) {
    return exports;
  } else {
    window.jasmineRequire = window.jasmineRequire || {};
    return window.jasmineRequire;
  }
}

getJasmineRequireObj().console = function(jRequire, j$) {
  j$.ConsoleReporter = jRequire.ConsoleReporter();
};

getJasmineRequireObj().ConsoleReporter = function() {

  var noopTimer = {
    start: function(){},
    elapsed: function(){ return 0; }
  };

  function ConsoleReporter(options) {
    var print = options.print,
      showColors = options.showColors || false,
      onComplete = options.onComplete || function() {},
      timer = options.timer || noopTimer,
      specCount,
      failureCount,
      failedSpecs = [],
      pendingCount,
      ansi = {
        green: '\x1B[32m',
        red: '\x1B[31m',
        yellow: '\x1B[33m',
        none: '\x1B[0m'
      };

    this.jasmineStarted = function() {
      specCount = 0;
      failureCount = 0;
      pendingCount = 0;
      print("Started");
      printNewline();
      timer.start();
    };

    this.jasmineDone = function() {
      printNewline();
      for (var i = 0; i < failedSpecs.length; i++) {
        specFailureDetails(failedSpecs[i]);
      }

      printNewline();
      var specCounts = specCount + " " + plural("spec", specCount) + ", " +
        failureCount + " " + plural("failure", failureCount);

      if (pendingCount) {
        specCounts += ", " + pendingCount + " pending " + plural("spec", pendingCount);
      }

      print(specCounts);

      printNewline();
      var seconds = timer.elapsed() / 1000;
      print("Finished in " + seconds + " " + plural("second", seconds));

      printNewline();

      onComplete(failureCount === 0);
    };

    this.specDone = function(result) {
      specCount++;

      if (result.status == "pending") {
        pendingCount++;
        print(colored("yellow", "*"));
        return;
      }

      if (result.status == "passed") {
        print(colored("green", '.'));
        return;
      }

      if (result.status == "failed") {
        failureCount++;
        failedSpecs.push(result);
        print(colored("red", 'F'));
      }
    };

    return this;

    function printNewline() {
      print("\n");
    }

    function colored(color, str) {
      return showColors ? (ansi[color] + str + ansi.none) : str;
    }

    function plural(str, count) {
      return count == 1 ? str : str + "s";
    }

    function repeat(thing, times) {
      var arr = [];
      for (var i = 0; i < times; i++) {
        arr.push(thing);
      }
      return arr;
    }

    function indent(str, spaces) {
      var lines = (str || '').split("\n");
      var newArr = [];
      for (var i = 0; i < lines.length; i++) {
        newArr.push(repeat(" ", spaces).join("") + lines[i]);
      }
      return newArr.join("\n");
    }

    function specFailureDetails(result) {
      printNewline();
      print(result.fullName);

      for (var i = 0; i < result.failedExpectations.length; i++) {
        var failedExpectation = result.failedExpectations[i];
        printNewline();
        print(indent(failedExpectation.stack, 2));
      }

      printNewline();
    }
  }

  return ConsoleReporter;
};

/*
Copyright (c) 2008-2013 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
jasmineRequire.html = function(j$) {
  j$.ResultsNode = jasmineRequire.ResultsNode();
  j$.HtmlReporter = jasmineRequire.HtmlReporter(j$);
  j$.QueryString = jasmineRequire.QueryString();
  j$.HtmlSpecFilter = jasmineRequire.HtmlSpecFilter();
};

jasmineRequire.HtmlReporter = function(j$) {

  var noopTimer = {
    start: function() {},
    elapsed: function() { return 0; }
  };

  function HtmlReporter(options) {
    var env = options.env || {},
      getContainer = options.getContainer,
      createElement = options.createElement,
      createTextNode = options.createTextNode,
      onRaiseExceptionsClick = options.onRaiseExceptionsClick || function() {},
      timer = options.timer || noopTimer,
      results = [],
      specsExecuted = 0,
      failureCount = 0,
      pendingSpecCount = 0,
      htmlReporterMain,
      symbols;

    this.initialize = function() {
      htmlReporterMain = createDom("div", {className: "html-reporter"},
        createDom("div", {className: "banner"},
          createDom("span", {className: "title"}, "Jasmine"),
          createDom("span", {className: "version"}, j$.version)
        ),
        createDom("ul", {className: "symbol-summary"}),
        createDom("div", {className: "alert"}),
        createDom("div", {className: "results"},
          createDom("div", {className: "failures"})
        )
      );
      getContainer().appendChild(htmlReporterMain);

      symbols = find(".symbol-summary");
    };

    var totalSpecsDefined;
    this.jasmineStarted = function(options) {
      totalSpecsDefined = options.totalSpecsDefined || 0;
      timer.start();
    };

    var summary = createDom("div", {className: "summary"});

    var topResults = new j$.ResultsNode({}, "", null),
      currentParent = topResults;

    this.suiteStarted = function(result) {
      currentParent.addChild(result, "suite");
      currentParent = currentParent.last();
    };

    this.suiteDone = function(result) {
      if (currentParent == topResults) {
        return;
      }

      currentParent = currentParent.parent;
    };

    this.specStarted = function(result) {
      currentParent.addChild(result, "spec");
    };

    var failures = [];
    this.specDone = function(result) {
      if (result.status != "disabled") {
        specsExecuted++;
      }

      symbols.appendChild(createDom("li", {
          className: result.status,
          id: "spec_" + result.id,
          title: result.fullName
        }
      ));

      if (result.status == "failed") {
        failureCount++;

        var failure =
          createDom("div", {className: "spec-detail failed"},
            createDom("div", {className: "description"},
              createDom("a", {title: result.fullName, href: specHref(result)}, result.fullName)
            ),
            createDom("div", {className: "messages"})
          );
        var messages = failure.childNodes[1];

        for (var i = 0; i < result.failedExpectations.length; i++) {
          var expectation = result.failedExpectations[i];
          messages.appendChild(createDom("div", {className: "result-message"}, expectation.message));
          messages.appendChild(createDom("div", {className: "stack-trace"}, expectation.stack));
        }

        failures.push(failure);
      }

      if (result.status == "pending") {
        pendingSpecCount++;
      }
    };

    this.jasmineDone = function() {
      var banner = find(".banner");
      banner.appendChild(createDom("span", {className: "duration"}, "finished in " + timer.elapsed() / 1000 + "s"));

      var alert = find(".alert");

      alert.appendChild(createDom("span", { className: "exceptions" },
        createDom("label", { className: "label", 'for': "raise-exceptions" }, "raise exceptions"),
        createDom("input", {
          className: "raise",
          id: "raise-exceptions",
          type: "checkbox"
        })
      ));
      var checkbox = find("input");

      checkbox.checked = !env.catchingExceptions();
      checkbox.onclick = onRaiseExceptionsClick;

      if (specsExecuted < totalSpecsDefined) {
        var skippedMessage = "Ran " + specsExecuted + " of " + totalSpecsDefined + " specs - run all";
        alert.appendChild(
          createDom("span", {className: "bar skipped"},
            createDom("a", {href: "?", title: "Run all specs"}, skippedMessage)
          )
        );
      }
      var statusBarMessage = "" + pluralize("spec", specsExecuted) + ", " + pluralize("failure", failureCount);
      if (pendingSpecCount) { statusBarMessage += ", " + pluralize("pending spec", pendingSpecCount); }

      var statusBarClassName = "bar " + ((failureCount > 0) ? "failed" : "passed");
      alert.appendChild(createDom("span", {className: statusBarClassName}, statusBarMessage));

      var results = find(".results");
      results.appendChild(summary);

      summaryList(topResults, summary);

      function summaryList(resultsTree, domParent) {
        var specListNode;
        for (var i = 0; i < resultsTree.children.length; i++) {
          var resultNode = resultsTree.children[i];
          if (resultNode.type == "suite") {
            var suiteListNode = createDom("ul", {className: "suite", id: "suite-" + resultNode.result.id},
              createDom("li", {className: "suite-detail"},
                createDom("a", {href: specHref(resultNode.result)}, resultNode.result.description)
              )
            );

            summaryList(resultNode, suiteListNode);
            domParent.appendChild(suiteListNode);
          }
          if (resultNode.type == "spec") {
            if (domParent.getAttribute("class") != "specs") {
              specListNode = createDom("ul", {className: "specs"});
              domParent.appendChild(specListNode);
            }
            specListNode.appendChild(
              createDom("li", {
                  className: resultNode.result.status,
                  id: "spec-" + resultNode.result.id
                },
                createDom("a", {href: specHref(resultNode.result)}, resultNode.result.description)
              )
            );
          }
        }
      }

      if (failures.length) {
        alert.appendChild(
          createDom('span', {className: "menu bar spec-list"},
            createDom("span", {}, "Spec List | "),
            createDom('a', {className: "failures-menu", href: "#"}, "Failures")));
        alert.appendChild(
          createDom('span', {className: "menu bar failure-list"},
            createDom('a', {className: "spec-list-menu", href: "#"}, "Spec List"),
            createDom("span", {}, " | Failures ")));

        find(".failures-menu").onclick = function() {
          setMenuModeTo('failure-list');
        };
        find(".spec-list-menu").onclick = function() {
          setMenuModeTo('spec-list');
        };

        setMenuModeTo('failure-list');

        var failureNode = find(".failures");
        for (var i = 0; i < failures.length; i++) {
          failureNode.appendChild(failures[i]);
        }
      }
    };

    return this;

    function find(selector) {
      return getContainer().querySelector(selector);
    }

    function createDom(type, attrs, childrenVarArgs) {
      var el = createElement(type);

      for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];

        if (typeof child === 'string') {
          el.appendChild(createTextNode(child));
        } else {
          if (child) {
            el.appendChild(child);
          }
        }
      }

      for (var attr in attrs) {
        if (attr == "className") {
          el[attr] = attrs[attr];
        } else {
          el.setAttribute(attr, attrs[attr]);
        }
      }

      return el;
    }

    function pluralize(singular, count) {
      var word = (count == 1 ? singular : singular + "s");

      return "" + count + " " + word;
    }

    function specHref(result) {
      return "?spec=" + encodeURIComponent(result.fullName);
    }

    function setMenuModeTo(mode) {
      htmlReporterMain.setAttribute("class", "html-reporter " + mode);
    }
  }

  return HtmlReporter;
};

jasmineRequire.HtmlSpecFilter = function() {
  function HtmlSpecFilter(options) {
    var filterString = options && options.filterString() && options.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    var filterPattern = new RegExp(filterString);

    this.matches = function(specName) {
      return filterPattern.test(specName);
    };
  }

  return HtmlSpecFilter;
};

jasmineRequire.ResultsNode = function() {
  function ResultsNode(result, type, parent) {
    this.result = result;
    this.type = type;
    this.parent = parent;

    this.children = [];

    this.addChild = function(result, type) {
      this.children.push(new ResultsNode(result, type, this));
    };

    this.last = function() {
      return this.children[this.children.length - 1];
    };
  }

  return ResultsNode;
};

jasmineRequire.QueryString = function() {
  function QueryString(options) {

    this.setParam = function(key, value) {
      var paramMap = queryStringToParamMap();
      paramMap[key] = value;
      options.getWindowLocation().search = toQueryString(paramMap);
    };

    this.getParam = function(key) {
      return queryStringToParamMap()[key];
    };

    return this;

    function toQueryString(paramMap) {
      var qStrPairs = [];
      for (var prop in paramMap) {
        qStrPairs.push(encodeURIComponent(prop) + "=" + encodeURIComponent(paramMap[prop]));
      }
      return "?" + qStrPairs.join('&');
    }

    function queryStringToParamMap() {
      var paramStr = options.getWindowLocation().search.substring(1),
        params = [],
        paramMap = {};

      if (paramStr.length > 0) {
        params = paramStr.split('&');
        for (var i = 0; i < params.length; i++) {
          var p = params[i].split('=');
          var value = decodeURIComponent(p[1]);
          if (value === "true" || value === "false") {
            value = JSON.parse(value);
          }
          paramMap[decodeURIComponent(p[0])] = value;
        }
      }

      return paramMap;
    }

  }

  return QueryString;
};

/*
Copyright (c) 2008-2013 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function getJasmineRequireObj() {
  if (typeof module !== "undefined" && module.exports) {
    return exports;
  } else {
    window.jasmineRequire = window.jasmineRequire || {};
    return window.jasmineRequire;
  }
}

getJasmineRequireObj().core = function(jRequire) {
  var j$ = {};

  jRequire.base(j$);
  j$.util = jRequire.util();
  j$.Any = jRequire.Any();
  j$.CallTracker = jRequire.CallTracker();
  j$.Clock = jRequire.Clock();
  j$.DelayedFunctionScheduler = jRequire.DelayedFunctionScheduler();
  j$.Env = jRequire.Env(j$);
  j$.ExceptionFormatter = jRequire.ExceptionFormatter();
  j$.Expectation = jRequire.Expectation();
  j$.buildExpectationResult = jRequire.buildExpectationResult();
  j$.JsApiReporter = jRequire.JsApiReporter();
  j$.matchersUtil = jRequire.matchersUtil(j$);
  j$.ObjectContaining = jRequire.ObjectContaining(j$);
  j$.pp = jRequire.pp(j$);
  j$.QueueRunner = jRequire.QueueRunner();
  j$.ReportDispatcher = jRequire.ReportDispatcher();
  j$.Spec = jRequire.Spec(j$);
  j$.SpyStrategy = jRequire.SpyStrategy();
  j$.Suite = jRequire.Suite();
  j$.Timer = jRequire.Timer();
  j$.version = jRequire.version();

  j$.matchers = jRequire.requireMatchers(jRequire, j$);

  return j$;
};

getJasmineRequireObj().requireMatchers = function(jRequire, j$) {
  var availableMatchers = [
      "toBe",
      "toBeCloseTo",
      "toBeDefined",
      "toBeFalsy",
      "toBeGreaterThan",
      "toBeLessThan",
      "toBeNaN",
      "toBeNull",
      "toBeTruthy",
      "toBeUndefined",
      "toContain",
      "toEqual",
      "toHaveBeenCalled",
      "toHaveBeenCalledWith",
      "toMatch",
      "toThrow",
      "toThrowError"
    ],
    matchers = {};

  for (var i = 0; i < availableMatchers.length; i++) {
    var name = availableMatchers[i];
    matchers[name] = jRequire[name](j$);
  }

  return matchers;
};

getJasmineRequireObj().base = function(j$) {
  j$.unimplementedMethod_ = function() {
    throw new Error("unimplemented method");
  };

  j$.MAX_PRETTY_PRINT_DEPTH = 40;
  j$.DEFAULT_TIMEOUT_INTERVAL = 5000;

  j$.getGlobal = (function() {
    var jasmineGlobal = eval.call(null, "this");
    return function() {
      return jasmineGlobal;
    };
  })();

  j$.getEnv = function(options) {
    var env = j$.currentEnv_ = j$.currentEnv_ || new j$.Env(options);
    //jasmine. singletons in here (setTimeout blah blah).
    return env;
  };

  j$.isArray_ = function(value) {
    return j$.isA_("Array", value);
  };

  j$.isString_ = function(value) {
    return j$.isA_("String", value);
  };

  j$.isNumber_ = function(value) {
    return j$.isA_("Number", value);
  };

  j$.isA_ = function(typeName, value) {
    return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';
  };

  j$.isDomNode = function(obj) {
    return obj.nodeType > 0;
  };

  j$.any = function(clazz) {
    return new j$.Any(clazz);
  };

  j$.objectContaining = function(sample) {
    return new j$.ObjectContaining(sample);
  };

  j$.createSpy = function(name, originalFn) {

    var spyStrategy = new j$.SpyStrategy({
        name: name,
        fn: originalFn,
        getSpy: function() { return spy; }
      }),
      callTracker = new j$.CallTracker(),
      spy = function() {
        callTracker.track({
          object: this,
          args: Array.prototype.slice.apply(arguments)
        });
        return spyStrategy.exec.apply(this, arguments);
      };

    for (var prop in originalFn) {
      if (prop === 'and' || prop === 'calls') {
        throw new Error("Jasmine spies would overwrite the 'and' and 'calls' properties on the object being spied upon");
      }

      spy[prop] = originalFn[prop];
    }

    spy.and = spyStrategy;
    spy.calls = callTracker;

    return spy;
  };

  j$.isSpy = function(putativeSpy) {
    if (!putativeSpy) {
      return false;
    }
    return putativeSpy.and instanceof j$.SpyStrategy &&
      putativeSpy.calls instanceof j$.CallTracker;
  };

  j$.createSpyObj = function(baseName, methodNames) {
    if (!j$.isArray_(methodNames) || methodNames.length === 0) {
      throw "createSpyObj requires a non-empty array of method names to create spies for";
    }
    var obj = {};
    for (var i = 0; i < methodNames.length; i++) {
      obj[methodNames[i]] = j$.createSpy(baseName + '.' + methodNames[i]);
    }
    return obj;
  };
};

getJasmineRequireObj().util = function() {

  var util = {};

  util.inherit = function(childClass, parentClass) {
    var Subclass = function() {
    };
    Subclass.prototype = parentClass.prototype;
    childClass.prototype = new Subclass();
  };

  util.htmlEscape = function(str) {
    if (!str) {
      return str;
    }
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  util.argsToArray = function(args) {
    var arrayOfArgs = [];
    for (var i = 0; i < args.length; i++) {
      arrayOfArgs.push(args[i]);
    }
    return arrayOfArgs;
  };

  util.isUndefined = function(obj) {
    return obj === void 0;
  };

  return util;
};

getJasmineRequireObj().Spec = function(j$) {
  function Spec(attrs) {
    this.expectationFactory = attrs.expectationFactory;
    this.resultCallback = attrs.resultCallback || function() {};
    this.id = attrs.id;
    this.description = attrs.description || '';
    this.fn = attrs.fn;
    this.beforeFns = attrs.beforeFns || function() { return []; };
    this.afterFns = attrs.afterFns || function() { return []; };
    this.onStart = attrs.onStart || function() {};
    this.exceptionFormatter = attrs.exceptionFormatter || function() {};
    this.getSpecName = attrs.getSpecName || function() { return ''; };
    this.expectationResultFactory = attrs.expectationResultFactory || function() { };
    this.queueRunnerFactory = attrs.queueRunnerFactory || function() {};
    this.catchingExceptions = attrs.catchingExceptions || function() { return true; };

    this.timer = attrs.timer || {setTimeout: setTimeout, clearTimeout: clearTimeout};

    if (!this.fn) {
      this.pend();
    }

    this.result = {
      id: this.id,
      description: this.description,
      fullName: this.getFullName(),
      failedExpectations: []
    };
  }

  Spec.prototype.addExpectationResult = function(passed, data) {
    if (passed) {
      return;
    }
    this.result.failedExpectations.push(this.expectationResultFactory(data));
  };

  Spec.prototype.expect = function(actual) {
    return this.expectationFactory(actual, this);
  };

  Spec.prototype.execute = function(onComplete) {
    var self = this,
        timeout;

    this.onStart(this);

    if (this.markedPending || this.disabled) {
      complete();
      return;
    }

    function timeoutable(fn) {
      return function(done) {
        timeout = Function.prototype.apply.apply(self.timer.setTimeout, [j$.getGlobal(), [function() {
          onException(new Error('Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.'));
          done();
        }, j$.DEFAULT_TIMEOUT_INTERVAL]]);

        var callDone = function() {
          clearTimeoutable();
          done();
        };

        fn.call(this, callDone); //TODO: do we care about more than 1 arg?
      };
    }

    function clearTimeoutable() {
      Function.prototype.apply.apply(self.timer.clearTimeout, [j$.getGlobal(), [timeout]]);
      timeout = void 0;
    }

    var allFns = this.beforeFns().concat(this.fn).concat(this.afterFns()),
      allTimeoutableFns = [];
    for (var i = 0; i < allFns.length; i++) {
      var fn = allFns[i];
      allTimeoutableFns.push(fn.length > 0 ? timeoutable(fn) : fn);
    }

    this.queueRunnerFactory({
      fns: allTimeoutableFns,
      onException: onException,
      onComplete: complete
    });

    function onException(e) {
      clearTimeoutable();
      if (Spec.isPendingSpecException(e)) {
        self.pend();
        return;
      }

      self.addExpectationResult(false, {
        matcherName: "",
        passed: false,
        expected: "",
        actual: "",
        error: e
      });
    }

    function complete() {
      self.result.status = self.status();
      self.resultCallback(self.result);

      if (onComplete) {
        onComplete();
      }
    }
  };

  Spec.prototype.disable = function() {
    this.disabled = true;
  };

  Spec.prototype.pend = function() {
    this.markedPending = true;
  };

  Spec.prototype.status = function() {
    if (this.disabled) {
      return 'disabled';
    }

    if (this.markedPending) {
      return 'pending';
    }

    if (this.result.failedExpectations.length > 0) {
      return 'failed';
    } else {
      return 'passed';
    }
  };

  Spec.prototype.getFullName = function() {
    return this.getSpecName(this);
  };

  Spec.pendingSpecExceptionMessage = "=> marked Pending";

  Spec.isPendingSpecException = function(e) {
    return e.toString().indexOf(Spec.pendingSpecExceptionMessage) !== -1;
  };

  return Spec;
};

if (typeof window == void 0 && typeof exports == "object") {
  exports.Spec = jasmineRequire.Spec;
}

getJasmineRequireObj().Env = function(j$) {
  function Env(options) {
    options = options || {};

    var self = this;
    var global = options.global || j$.getGlobal();

    var totalSpecsDefined = 0;

    var catchExceptions = true;

    var realSetTimeout = j$.getGlobal().setTimeout;
    var realClearTimeout = j$.getGlobal().clearTimeout;
    this.clock = new j$.Clock(global, new j$.DelayedFunctionScheduler());

    var runnableLookupTable = {};

    var spies = [];

    var currentSpec = null;
    var currentSuite = null;

    var reporter = new j$.ReportDispatcher([
      "jasmineStarted",
      "jasmineDone",
      "suiteStarted",
      "suiteDone",
      "specStarted",
      "specDone"
    ]);

    this.specFilter = function() {
      return true;
    };

    var equalityTesters = [];

    var customEqualityTesters = [];
    this.addCustomEqualityTester = function(tester) {
      customEqualityTesters.push(tester);
    };

    j$.Expectation.addCoreMatchers(j$.matchers);

    var nextSpecId = 0;
    var getNextSpecId = function() {
      return 'spec' + nextSpecId++;
    };

    var nextSuiteId = 0;
    var getNextSuiteId = function() {
      return 'suite' + nextSuiteId++;
    };

    var expectationFactory = function(actual, spec) {
      return j$.Expectation.Factory({
        util: j$.matchersUtil,
        customEqualityTesters: customEqualityTesters,
        actual: actual,
        addExpectationResult: addExpectationResult
      });

      function addExpectationResult(passed, result) {
        return spec.addExpectationResult(passed, result);
      }
    };

    var specStarted = function(spec) {
      currentSpec = spec;
      reporter.specStarted(spec.result);
    };

    var beforeFns = function(suite) {
      return function() {
        var befores = [];
        while(suite) {
          befores = befores.concat(suite.beforeFns);
          suite = suite.parentSuite;
        }
        return befores.reverse();
      };
    };

    var afterFns = function(suite) {
      return function() {
        var afters = [];
        while(suite) {
          afters = afters.concat(suite.afterFns);
          suite = suite.parentSuite;
        }
        return afters;
      };
    };

    var getSpecName = function(spec, suite) {
      return suite.getFullName() + ' ' + spec.description;
    };

    // TODO: we may just be able to pass in the fn instead of wrapping here
    var buildExpectationResult = j$.buildExpectationResult,
        exceptionFormatter = new j$.ExceptionFormatter(),
        expectationResultFactory = function(attrs) {
          attrs.messageFormatter = exceptionFormatter.message;
          attrs.stackFormatter = exceptionFormatter.stack;

          return buildExpectationResult(attrs);
        };

    // TODO: fix this naming, and here's where the value comes in
    this.catchExceptions = function(value) {
      catchExceptions = !!value;
      return catchExceptions;
    };

    this.catchingExceptions = function() {
      return catchExceptions;
    };

    var maximumSpecCallbackDepth = 20;
    var currentSpecCallbackDepth = 0;

    function clearStack(fn) {
      currentSpecCallbackDepth++;
      if (currentSpecCallbackDepth >= maximumSpecCallbackDepth) {
        currentSpecCallbackDepth = 0;
        realSetTimeout(fn, 0);
      } else {
        fn();
      }
    }

    var catchException = function(e) {
      return j$.Spec.isPendingSpecException(e) || catchExceptions;
    };

    var queueRunnerFactory = function(options) {
      options.catchException = catchException;
      options.clearStack = options.clearStack || clearStack;

      new j$.QueueRunner(options).execute();
    };

    var topSuite = new j$.Suite({
      env: this,
      id: getNextSuiteId(),
      description: 'Jasmine__TopLevel__Suite',
      queueRunner: queueRunnerFactory,
      resultCallback: function() {} // TODO - hook this up
    });
    runnableLookupTable[topSuite.id] = topSuite;
    currentSuite = topSuite;

    this.topSuite = function() {
      return topSuite;
    };

    this.execute = function(runnablesToRun) {
      runnablesToRun = runnablesToRun || [topSuite.id];

      var allFns = [];
      for(var i = 0; i < runnablesToRun.length; i++) {
        var runnable = runnableLookupTable[runnablesToRun[i]];
        allFns.push((function(runnable) { return function(done) { runnable.execute(done); }; })(runnable));
      }

      reporter.jasmineStarted({
        totalSpecsDefined: totalSpecsDefined
      });

      queueRunnerFactory({fns: allFns, onComplete: reporter.jasmineDone});
    };

    this.addReporter = function(reporterToAdd) {
      reporter.addReporter(reporterToAdd);
    };

    this.addMatchers = function(matchersToAdd) {
      j$.Expectation.addMatchers(matchersToAdd);
    };

    this.spyOn = function(obj, methodName) {
      if (j$.util.isUndefined(obj)) {
        throw new Error("spyOn could not find an object to spy upon for " + methodName + "()");
      }

      if (j$.util.isUndefined(obj[methodName])) {
        throw new Error(methodName + '() method does not exist');
      }

      if (obj[methodName] && j$.isSpy(obj[methodName])) {
        //TODO?: should this return the current spy? Downside: may cause user confusion about spy state
        throw new Error(methodName + ' has already been spied upon');
      }

      var spy = j$.createSpy(methodName, obj[methodName]);

      spies.push({
        spy: spy,
        baseObj: obj,
        methodName: methodName,
        originalValue: obj[methodName]
      });

      obj[methodName] = spy;

      return spy;
    };

    var suiteFactory = function(description) {
      var suite = new j$.Suite({
        env: self,
        id: getNextSuiteId(),
        description: description,
        parentSuite: currentSuite,
        queueRunner: queueRunnerFactory,
        onStart: suiteStarted,
        resultCallback: function(attrs) {
          reporter.suiteDone(attrs);
        }
      });

      runnableLookupTable[suite.id] = suite;
      return suite;
    };

    this.describe = function(description, specDefinitions) {
      var suite = suiteFactory(description);

      var parentSuite = currentSuite;
      parentSuite.addChild(suite);
      currentSuite = suite;

      var declarationError = null;
      try {
        specDefinitions.call(suite);
      } catch (e) {
        declarationError = e;
      }

      if (declarationError) {
        this.it("encountered a declaration exception", function() {
          throw declarationError;
        });
      }

      currentSuite = parentSuite;

      return suite;
    };

    this.xdescribe = function(description, specDefinitions) {
      var suite = this.describe(description, specDefinitions);
      suite.disable();
      return suite;
    };

    var specFactory = function(description, fn, suite) {
      totalSpecsDefined++;

      var spec = new j$.Spec({
        id: getNextSpecId(),
        beforeFns: beforeFns(suite),
        afterFns: afterFns(suite),
        expectationFactory: expectationFactory,
        exceptionFormatter: exceptionFormatter,
        resultCallback: specResultCallback,
        getSpecName: function(spec) {
          return getSpecName(spec, suite);
        },
        onStart: specStarted,
        description: description,
        expectationResultFactory: expectationResultFactory,
        queueRunnerFactory: queueRunnerFactory,
        fn: fn,
        timer: {setTimeout: realSetTimeout, clearTimeout: realClearTimeout}
      });

      runnableLookupTable[spec.id] = spec;

      if (!self.specFilter(spec)) {
        spec.disable();
      }

      return spec;

      function removeAllSpies() {
        for (var i = 0; i < spies.length; i++) {
          var spyEntry = spies[i];
          spyEntry.baseObj[spyEntry.methodName] = spyEntry.originalValue;
        }
        spies = [];
      }

      function specResultCallback(result) {
        removeAllSpies();
        j$.Expectation.resetMatchers();
        customEqualityTesters = [];
        currentSpec = null;
        reporter.specDone(result);
      }
    };

    var suiteStarted = function(suite) {
      reporter.suiteStarted(suite.result);
    };

    this.it = function(description, fn) {
      var spec = specFactory(description, fn, currentSuite);
      currentSuite.addChild(spec);
      return spec;
    };

    this.xit = function(description, fn) {
      var spec = this.it(description, fn);
      spec.pend();
      return spec;
    };

    this.expect = function(actual) {
      return currentSpec.expect(actual);
    };

    this.beforeEach = function(beforeEachFunction) {
      currentSuite.beforeEach(beforeEachFunction);
    };

    this.afterEach = function(afterEachFunction) {
      currentSuite.afterEach(afterEachFunction);
    };

    this.pending = function() {
      throw j$.Spec.pendingSpecExceptionMessage;
    };
  }

  return Env;
};

getJasmineRequireObj().JsApiReporter = function() {

  var noopTimer = {
    start: function(){},
    elapsed: function(){ return 0; }
  };

  function JsApiReporter(options) {
    var timer = options.timer || noopTimer,
        status = "loaded";

    this.started = false;
    this.finished = false;

    this.jasmineStarted = function() {
      this.started = true;
      status = 'started';
      timer.start();
    };

    var executionTime;

    this.jasmineDone = function() {
      this.finished = true;
      executionTime = timer.elapsed();
      status = 'done';
    };

    this.status = function() {
      return status;
    };

    var suites = {};

    this.suiteStarted = function(result) {
      storeSuite(result);
    };

    this.suiteDone = function(result) {
      storeSuite(result);
    };

    function storeSuite(result) {
      suites[result.id] = result;
    }

    this.suites = function() {
      return suites;
    };

    var specs = [];
    this.specStarted = function(result) { };

    this.specDone = function(result) {
      specs.push(result);
    };

    this.specResults = function(index, length) {
      return specs.slice(index, index + length);
    };

    this.specs = function() {
      return specs;
    };

    this.executionTime = function() {
      return executionTime;
    };

  }

  return JsApiReporter;
};

getJasmineRequireObj().Any = function() {

  function Any(expectedObject) {
    this.expectedObject = expectedObject;
  }

  Any.prototype.jasmineMatches = function(other) {
    if (this.expectedObject == String) {
      return typeof other == 'string' || other instanceof String;
    }

    if (this.expectedObject == Number) {
      return typeof other == 'number' || other instanceof Number;
    }

    if (this.expectedObject == Function) {
      return typeof other == 'function' || other instanceof Function;
    }

    if (this.expectedObject == Object) {
      return typeof other == 'object';
    }
    
    if (this.expectedObject == Boolean) {
      return typeof other == 'boolean';
    }

    return other instanceof this.expectedObject;
  };

  Any.prototype.jasmineToString = function() {
    return '<jasmine.any(' + this.expectedClass + ')>';
  };

  return Any;
};

getJasmineRequireObj().CallTracker = function() {

  function CallTracker() {
    var calls = [];

    this.track = function(context) {
      calls.push(context);
    };

    this.any = function() {
      return !!calls.length;
    };

    this.count = function() {
      return calls.length;
    };

    this.argsFor = function(index) {
      var call = calls[index];
      return call ? call.args : [];
    };

    this.all = function() {
      return calls;
    };

    this.allArgs = function() {
      var callArgs = [];
      for(var i = 0; i < calls.length; i++){
        callArgs.push(calls[i].args);
      }

      return callArgs;
    };

    this.first = function() {
      return calls[0];
    };

    this.mostRecent = function() {
      return calls[calls.length - 1];
    };

    this.reset = function() {
      calls = [];
    };
  }

  return CallTracker;
};

getJasmineRequireObj().Clock = function() {
  function Clock(global, delayedFunctionScheduler) {
    var self = this,
      realTimingFunctions = {
        setTimeout: global.setTimeout,
        clearTimeout: global.clearTimeout,
        setInterval: global.setInterval,
        clearInterval: global.clearInterval
      },
      fakeTimingFunctions = {
        setTimeout: setTimeout,
        clearTimeout: clearTimeout,
        setInterval: setInterval,
        clearInterval: clearInterval
      },
      installed = false,
      timer;

    self.install = function() {
      replace(global, fakeTimingFunctions);
      timer = fakeTimingFunctions;
      installed = true;
    };

    self.uninstall = function() {
      delayedFunctionScheduler.reset();
      replace(global, realTimingFunctions);
      timer = realTimingFunctions;
      installed = false;
    };

    self.setTimeout = function(fn, delay, params) {
      if (legacyIE()) {
        if (arguments.length > 2) {
          throw new Error("IE < 9 cannot support extra params to setTimeout without a polyfill");
        }
        return timer.setTimeout(fn, delay);
      }
      return Function.prototype.apply.apply(timer.setTimeout, [global, arguments]);
    };

    self.setInterval = function(fn, delay, params) {
      if (legacyIE()) {
        if (arguments.length > 2) {
          throw new Error("IE < 9 cannot support extra params to setInterval without a polyfill");
        }
        return timer.setInterval(fn, delay);
      }
      return Function.prototype.apply.apply(timer.setInterval, [global, arguments]);
    };

    self.clearTimeout = function(id) {
      return Function.prototype.call.apply(timer.clearTimeout, [global, id]);
    };

    self.clearInterval = function(id) {
      return Function.prototype.call.apply(timer.clearInterval, [global, id]);
    };

    self.tick = function(millis) {
      if (installed) {
        delayedFunctionScheduler.tick(millis);
      } else {
        throw new Error("Mock clock is not installed, use jasmine.clock().install()");
      }
    };

    return self;

    function legacyIE() {
      //if these methods are polyfilled, apply will be present
      return !(realTimingFunctions.setTimeout || realTimingFunctions.setInterval).apply;
    }

    function replace(dest, source) {
      for (var prop in source) {
        dest[prop] = source[prop];
      }
    }

    function setTimeout(fn, delay) {
      return delayedFunctionScheduler.scheduleFunction(fn, delay, argSlice(arguments, 2));
    }

    function clearTimeout(id) {
      return delayedFunctionScheduler.removeFunctionWithId(id);
    }

    function setInterval(fn, interval) {
      return delayedFunctionScheduler.scheduleFunction(fn, interval, argSlice(arguments, 2), true);
    }

    function clearInterval(id) {
      return delayedFunctionScheduler.removeFunctionWithId(id);
    }

    function argSlice(argsObj, n) {
      return Array.prototype.slice.call(argsObj, 2);
    }
  }

  return Clock;
};

getJasmineRequireObj().DelayedFunctionScheduler = function() {
  function DelayedFunctionScheduler() {
    var self = this;
    var scheduledLookup = [];
    var scheduledFunctions = {};
    var currentTime = 0;
    var delayedFnCount = 0;

    self.tick = function(millis) {
      millis = millis || 0;
      var endTime = currentTime + millis;

      runScheduledFunctions(endTime);
      currentTime = endTime;
    };

    self.scheduleFunction = function(funcToCall, millis, params, recurring, timeoutKey, runAtMillis) {
      var f;
      if (typeof(funcToCall) === 'string') {
        /* jshint evil: true */
        f = function() { return eval(funcToCall); };
        /* jshint evil: false */
      } else {
        f = funcToCall;
      }

      millis = millis || 0;
      timeoutKey = timeoutKey || ++delayedFnCount;
      runAtMillis = runAtMillis || (currentTime + millis);

      var funcToSchedule = {
        runAtMillis: runAtMillis,
        funcToCall: f,
        recurring: recurring,
        params: params,
        timeoutKey: timeoutKey,
        millis: millis
      };

      if (runAtMillis in scheduledFunctions) {
        scheduledFunctions[runAtMillis].push(funcToSchedule);
      } else {
        scheduledFunctions[runAtMillis] = [funcToSchedule];
        scheduledLookup.push(runAtMillis);
        scheduledLookup.sort(function (a, b) {
          return a - b;
        });
      }

      return timeoutKey;
    };

    self.removeFunctionWithId = function(timeoutKey) {
      for (var runAtMillis in scheduledFunctions) {
        var funcs = scheduledFunctions[runAtMillis];
        var i = indexOfFirstToPass(funcs, function (func) {
          return func.timeoutKey === timeoutKey;
        });

        if (i > -1) {
          if (funcs.length === 1) {
            delete scheduledFunctions[runAtMillis];
            deleteFromLookup(runAtMillis);
          } else {
            funcs.splice(i, 1);
          }

          // intervals get rescheduled when executed, so there's never more
          // than a single scheduled function with a given timeoutKey
          break;
        }
      }
    };

    self.reset = function() {
      currentTime = 0;
      scheduledLookup = [];
      scheduledFunctions = {};
      delayedFnCount = 0;
    };

    return self;

    function indexOfFirstToPass(array, testFn) {
      var index = -1;

      for (var i = 0; i < array.length; ++i) {
        if (testFn(array[i])) {
          index = i;
          break;
        }
      }

      return index;
    }

    function deleteFromLookup(key) {
      var value = Number(key);
      var i = indexOfFirstToPass(scheduledLookup, function (millis) {
        return millis === value;
      });

      if (i > -1) {
        scheduledLookup.splice(i, 1);
      }
    }

    function reschedule(scheduledFn) {
      self.scheduleFunction(scheduledFn.funcToCall,
        scheduledFn.millis,
        scheduledFn.params,
        true,
        scheduledFn.timeoutKey,
        scheduledFn.runAtMillis + scheduledFn.millis);
    }

    function runScheduledFunctions(endTime) {
      if (scheduledLookup.length === 0 || scheduledLookup[0] > endTime) {
        return;
      }

      do {
        currentTime = scheduledLookup.shift();

        var funcsToRun = scheduledFunctions[currentTime];
        delete scheduledFunctions[currentTime];

        for (var i = 0; i < funcsToRun.length; ++i) {
          var funcToRun = funcsToRun[i];
          funcToRun.funcToCall.apply(null, funcToRun.params || []);

          if (funcToRun.recurring) {
            reschedule(funcToRun);
          }
        }
      } while (scheduledLookup.length > 0 &&
              // checking first if we're out of time prevents setTimeout(0)
              // scheduled in a funcToRun from forcing an extra iteration
                 currentTime !== endTime  &&
                 scheduledLookup[0] <= endTime);
    }
  }

  return DelayedFunctionScheduler;
};

getJasmineRequireObj().ExceptionFormatter = function() {
  function ExceptionFormatter() {
    this.message = function(error) {
      var message = error.name +
        ': ' +
        error.message;

      if (error.fileName || error.sourceURL) {
        message += " in " + (error.fileName || error.sourceURL);
      }

      if (error.line || error.lineNumber) {
        message += " (line " + (error.line || error.lineNumber) + ")";
      }

      return message;
    };

    this.stack = function(error) {
      return error ? error.stack : null;
    };
  }

  return ExceptionFormatter;
};

getJasmineRequireObj().Expectation = function() {

  var matchers = {};

  function Expectation(options) {
    this.util = options.util || { buildFailureMessage: function() {} };
    this.customEqualityTesters = options.customEqualityTesters || [];
    this.actual = options.actual;
    this.addExpectationResult = options.addExpectationResult || function(){};
    this.isNot = options.isNot;

    for (var matcherName in matchers) {
      this[matcherName] = matchers[matcherName];
    }
  }

  Expectation.prototype.wrapCompare = function(name, matcherFactory) {
    return function() {
      var args = Array.prototype.slice.call(arguments, 0),
        expected = args.slice(0),
        message = "";

      args.unshift(this.actual);

      var matcher = matcherFactory(this.util, this.customEqualityTesters),
          matcherCompare = matcher.compare;

      function defaultNegativeCompare() {
        var result = matcher.compare.apply(null, args);
        result.pass = !result.pass;
        return result;
      }

      if (this.isNot) {
        matcherCompare = matcher.negativeCompare || defaultNegativeCompare;
      }

      var result = matcherCompare.apply(null, args);

      if (!result.pass) {
        if (!result.message) {
          args.unshift(this.isNot);
          args.unshift(name);
          message = this.util.buildFailureMessage.apply(null, args);
        } else {
          message = result.message;
        }
      }

      if (expected.length == 1) {
        expected = expected[0];
      }

      // TODO: how many of these params are needed?
      this.addExpectationResult(
        result.pass,
        {
          matcherName: name,
          passed: result.pass,
          message: message,
          actual: this.actual,
          expected: expected // TODO: this may need to be arrayified/sliced
        }
      );
    };
  };

  Expectation.addCoreMatchers = function(matchers) {
    var prototype = Expectation.prototype;
    for (var matcherName in matchers) {
      var matcher = matchers[matcherName];
      prototype[matcherName] = prototype.wrapCompare(matcherName, matcher);
    }
  };

  Expectation.addMatchers = function(matchersToAdd) {
    for (var name in matchersToAdd) {
      var matcher = matchersToAdd[name];
      matchers[name] = Expectation.prototype.wrapCompare(name, matcher);
    }
  };

  Expectation.resetMatchers = function() {
    for (var name in matchers) {
      delete matchers[name];
    }
  };

  Expectation.Factory = function(options) {
    options = options || {};

    var expect = new Expectation(options);

    // TODO: this would be nice as its own Object - NegativeExpectation
    // TODO: copy instead of mutate options
    options.isNot = true;
    expect.not = new Expectation(options);

    return expect;
  };

  return Expectation;
};

//TODO: expectation result may make more sense as a presentation of an expectation.
getJasmineRequireObj().buildExpectationResult = function() {
  function buildExpectationResult(options) {
    var messageFormatter = options.messageFormatter || function() {},
      stackFormatter = options.stackFormatter || function() {};

    return {
      matcherName: options.matcherName,
      expected: options.expected,
      actual: options.actual,
      message: message(),
      stack: stack(),
      passed: options.passed
    };

    function message() {
      if (options.passed) {
        return "Passed.";
      } else if (options.message) {
        return options.message;
      } else if (options.error) {
        return messageFormatter(options.error);
      }
      return "";
    }

    function stack() {
      if (options.passed) {
        return "";
      }

      var error = options.error;
      if (!error) {
        try {
          throw new Error(message());
        } catch (e) {
          error = e;
        }
      }
      return stackFormatter(error);
    }
  }

  return buildExpectationResult;
};

getJasmineRequireObj().ObjectContaining = function(j$) {

  function ObjectContaining(sample) {
    this.sample = sample;
  }

  ObjectContaining.prototype.jasmineMatches = function(other, mismatchKeys, mismatchValues) {
    if (typeof(this.sample) !== "object") { throw new Error("You must provide an object to objectContaining, not '"+this.sample+"'."); }

    mismatchKeys = mismatchKeys || [];
    mismatchValues = mismatchValues || [];

    var hasKey = function(obj, keyName) {
      return obj !== null && !j$.util.isUndefined(obj[keyName]);
    };

    for (var property in this.sample) {
      if (!hasKey(other, property) && hasKey(this.sample, property)) {
        mismatchKeys.push("expected has key '" + property + "', but missing from actual.");
      }
      else if (!j$.matchersUtil.equals(this.sample[property], other[property])) {
        mismatchValues.push("'" + property + "' was '" + (other[property] ? j$.util.htmlEscape(other[property].toString()) : other[property]) + "' in actual, but was '" + (this.sample[property] ? j$.util.htmlEscape(this.sample[property].toString()) : this.sample[property]) + "' in expected.");
      }
    }

    return (mismatchKeys.length === 0 && mismatchValues.length === 0);
  };

  ObjectContaining.prototype.jasmineToString = function() {
    return "<jasmine.objectContaining(" + j$.pp(this.sample) + ")>";
  };

  return ObjectContaining;
};

getJasmineRequireObj().pp = function(j$) {

  function PrettyPrinter() {
    this.ppNestLevel_ = 0;
  }

  PrettyPrinter.prototype.format = function(value) {
    this.ppNestLevel_++;
    try {
      if (j$.util.isUndefined(value)) {
        this.emitScalar('undefined');
      } else if (value === null) {
        this.emitScalar('null');
      } else if (value === j$.getGlobal()) {
        this.emitScalar('<global>');
      } else if (value.jasmineToString) {
        this.emitScalar(value.jasmineToString());
      } else if (typeof value === 'string') {
        this.emitString(value);
      } else if (j$.isSpy(value)) {
        this.emitScalar("spy on " + value.and.identity());
      } else if (value instanceof RegExp) {
        this.emitScalar(value.toString());
      } else if (typeof value === 'function') {
        this.emitScalar('Function');
      } else if (typeof value.nodeType === 'number') {
        this.emitScalar('HTMLNode');
      } else if (value instanceof Date) {
        this.emitScalar('Date(' + value + ')');
      } else if (value.__Jasmine_been_here_before__) {
        this.emitScalar('<circular reference: ' + (j$.isArray_(value) ? 'Array' : 'Object') + '>');
      } else if (j$.isArray_(value) || j$.isA_('Object', value)) {
        value.__Jasmine_been_here_before__ = true;
        if (j$.isArray_(value)) {
          this.emitArray(value);
        } else {
          this.emitObject(value);
        }
        delete value.__Jasmine_been_here_before__;
      } else {
        this.emitScalar(value.toString());
      }
    } finally {
      this.ppNestLevel_--;
    }
  };

  PrettyPrinter.prototype.iterateObject = function(obj, fn) {
    for (var property in obj) {
      if (!obj.hasOwnProperty(property)) { continue; }
      if (property == '__Jasmine_been_here_before__') { continue; }
      fn(property, obj.__lookupGetter__ ? (!j$.util.isUndefined(obj.__lookupGetter__(property)) &&
          obj.__lookupGetter__(property) !== null) : false);
    }
  };

  PrettyPrinter.prototype.emitArray = j$.unimplementedMethod_;
  PrettyPrinter.prototype.emitObject = j$.unimplementedMethod_;
  PrettyPrinter.prototype.emitScalar = j$.unimplementedMethod_;
  PrettyPrinter.prototype.emitString = j$.unimplementedMethod_;

  function StringPrettyPrinter() {
    PrettyPrinter.call(this);

    this.string = '';
  }

  j$.util.inherit(StringPrettyPrinter, PrettyPrinter);

  StringPrettyPrinter.prototype.emitScalar = function(value) {
    this.append(value);
  };

  StringPrettyPrinter.prototype.emitString = function(value) {
    this.append("'" + value + "'");
  };

  StringPrettyPrinter.prototype.emitArray = function(array) {
    if (this.ppNestLevel_ > j$.MAX_PRETTY_PRINT_DEPTH) {
      this.append("Array");
      return;
    }

    this.append('[ ');
    for (var i = 0; i < array.length; i++) {
      if (i > 0) {
        this.append(', ');
      }
      this.format(array[i]);
    }
    this.append(' ]');
  };

  StringPrettyPrinter.prototype.emitObject = function(obj) {
    if (this.ppNestLevel_ > j$.MAX_PRETTY_PRINT_DEPTH) {
      this.append("Object");
      return;
    }

    var self = this;
    this.append('{ ');
    var first = true;

    this.iterateObject(obj, function(property, isGetter) {
      if (first) {
        first = false;
      } else {
        self.append(', ');
      }

      self.append(property);
      self.append(' : ');
      if (isGetter) {
        self.append('<getter>');
      } else {
        self.format(obj[property]);
      }
    });

    this.append(' }');
  };

  StringPrettyPrinter.prototype.append = function(value) {
    this.string += value;
  };

  return function(value) {
    var stringPrettyPrinter = new StringPrettyPrinter();
    stringPrettyPrinter.format(value);
    return stringPrettyPrinter.string;
  };
};

getJasmineRequireObj().QueueRunner = function() {

  function QueueRunner(attrs) {
    this.fns = attrs.fns || [];
    this.onComplete = attrs.onComplete || function() {};
    this.clearStack = attrs.clearStack || function(fn) {fn();};
    this.onException = attrs.onException || function() {};
    this.catchException = attrs.catchException || function() { return true; };
    this.userContext = {};
  }

  QueueRunner.prototype.execute = function() {
    this.run(this.fns, 0);
  };

  QueueRunner.prototype.run = function(fns, recursiveIndex) {
    var length = fns.length,
        self = this,
        iterativeIndex;

    for(iterativeIndex = recursiveIndex; iterativeIndex < length; iterativeIndex++) {
      var fn = fns[iterativeIndex];
      if (fn.length > 0) {
        return attemptAsync(fn);
      } else {
        attemptSync(fn);
      }
    }

    var runnerDone = iterativeIndex >= length;

    if (runnerDone) {
      this.clearStack(this.onComplete);
    }

    function attemptSync(fn) {
      try {
        fn.call(self.userContext);
      } catch (e) {
        handleException(e);
      }
    }

    function attemptAsync(fn) {
      var next = function () { self.run(fns, iterativeIndex + 1); };

      try {
        fn.call(self.userContext, next);
      } catch (e) {
        handleException(e);
        next();
      }
    }

    function handleException(e) {
      self.onException(e);
      if (!self.catchException(e)) {
        //TODO: set a var when we catch an exception and
        //use a finally block to close the loop in a nice way..
        throw e;
      }
    }
  };

  return QueueRunner;
};

getJasmineRequireObj().ReportDispatcher = function() {
  function ReportDispatcher(methods) {

    var dispatchedMethods = methods || [];

    for (var i = 0; i < dispatchedMethods.length; i++) {
      var method = dispatchedMethods[i];
      this[method] = (function(m) {
        return function() {
          dispatch(m, arguments);
        };
      }(method));
    }

    var reporters = [];

    this.addReporter = function(reporter) {
      reporters.push(reporter);
    };

    return this;

    function dispatch(method, args) {
      for (var i = 0; i < reporters.length; i++) {
        var reporter = reporters[i];
        if (reporter[method]) {
          reporter[method].apply(reporter, args);
        }
      }
    }
  }

  return ReportDispatcher;
};


getJasmineRequireObj().SpyStrategy = function() {

  function SpyStrategy(options) {
    options = options || {};

    var identity = options.name || "unknown",
        originalFn = options.fn || function() {},
        getSpy = options.getSpy || function() {},
        plan = function() {};

    this.identity = function() {
      return identity;
    };

    this.exec = function() {
      return plan.apply(this, arguments);
    };

    this.callThrough = function() {
      plan = originalFn;
      return getSpy();
    };

    this.returnValue = function(value) {
      plan = function() {
        return value;
      };
      return getSpy();
    };

    this.throwError = function(something) {
      var error = (something instanceof Error) ? something : new Error(something);
      plan = function() {
        throw error;
      };
      return getSpy();
    };

    this.callFake = function(fn) {
      plan = fn;
      return getSpy();
    };

    this.stub = function(fn) {
      plan = function() {};
      return getSpy();
    };
  }

  return SpyStrategy;
};

getJasmineRequireObj().Suite = function() {
  function Suite(attrs) {
    this.env = attrs.env;
    this.id = attrs.id;
    this.parentSuite = attrs.parentSuite;
    this.description = attrs.description;
    this.onStart = attrs.onStart || function() {};
    this.resultCallback = attrs.resultCallback || function() {};
    this.clearStack = attrs.clearStack || function(fn) {fn();};

    this.beforeFns = [];
    this.afterFns = [];
    this.queueRunner = attrs.queueRunner || function() {};
    this.disabled = false;

    this.children = [];

    this.result = {
      id: this.id,
      status: this.disabled ? 'disabled' : '',
      description: this.description,
      fullName: this.getFullName()
    };
  }

  Suite.prototype.getFullName = function() {
    var fullName = this.description;
    for (var parentSuite = this.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) {
      if (parentSuite.parentSuite) {
        fullName = parentSuite.description + ' ' + fullName;
      }
    }
    return fullName;
  };

  Suite.prototype.disable = function() {
    this.disabled = true;
  };

  Suite.prototype.beforeEach = function(fn) {
    this.beforeFns.unshift(fn);
  };

  Suite.prototype.afterEach = function(fn) {
    this.afterFns.unshift(fn);
  };

  Suite.prototype.addChild = function(child) {
    this.children.push(child);
  };

  Suite.prototype.execute = function(onComplete) {
    var self = this;
    if (this.disabled) {
      complete();
      return;
    }

    var allFns = [];

    for (var i = 0; i < this.children.length; i++) {
      allFns.push(wrapChildAsAsync(this.children[i]));
    }

    this.onStart(this);

    this.queueRunner({
      fns: allFns,
      onComplete: complete
    });

    function complete() {
      self.resultCallback(self.result);

      if (onComplete) {
        onComplete();
      }
    }

    function wrapChildAsAsync(child) {
      return function(done) { child.execute(done); };
    }
  };

  return Suite;
};

if (typeof window == void 0 && typeof exports == "object") {
  exports.Suite = jasmineRequire.Suite;
}

getJasmineRequireObj().Timer = function() {
  function Timer(options) {
    options = options || {};

    var now = options.now || function() { return new Date().getTime(); },
        startTime;

    this.start = function() {
      startTime = now();
    };

    this.elapsed = function() {
      return now() - startTime;
    };
  }

  return Timer;
};

getJasmineRequireObj().matchersUtil = function(j$) {
  // TODO: what to do about jasmine.pp not being inject? move to JSON.stringify? gut PrettyPrinter?

  return {
    equals: function(a, b, customTesters) {
      customTesters = customTesters || [];

      return eq(a, b, [], [], customTesters);
    },

    contains: function(haystack, needle, customTesters) {
      customTesters = customTesters || [];

      if (Object.prototype.toString.apply(haystack) === "[object Array]") {
        for (var i = 0; i < haystack.length; i++) {
          if (eq(haystack[i], needle, [], [], customTesters)) {
            return true;
          }
        }
        return false;
      }
      return haystack.indexOf(needle) >= 0;
    },

    buildFailureMessage: function() {
      var args = Array.prototype.slice.call(arguments, 0),
        matcherName = args[0],
        isNot = args[1],
        actual = args[2],
        expected = args.slice(3),
        englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); });

      var message = "Expected " +
        j$.pp(actual) +
        (isNot ? " not " : " ") +
        englishyPredicate;

      if (expected.length > 0) {
        for (var i = 0; i < expected.length; i++) {
          if (i > 0) {
            message += ",";
          }
          message += " " + j$.pp(expected[i]);
        }
      }

      return message + ".";
    }
  };

  // Equality function lovingly adapted from isEqual in
  //   [Underscore](http://underscorejs.org)
  function eq(a, b, aStack, bStack, customTesters) {
    var result = true;

    for (var i = 0; i < customTesters.length; i++) {
      var customTesterResult = customTesters[i](a, b);
      if (!j$.util.isUndefined(customTesterResult)) {
        return customTesterResult;
      }
    }

    if (a instanceof j$.Any) {
      result = a.jasmineMatches(b);
      if (result) {
        return true;
      }
    }

    if (b instanceof j$.Any) {
      result = b.jasmineMatches(a);
      if (result) {
        return true;
      }
    }

    if (b instanceof j$.ObjectContaining) {
      result = b.jasmineMatches(a);
      if (result) {
        return true;
      }
    }

    if (a instanceof Error && b instanceof Error) {
      return a.message == b.message;
    }

    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) { return a !== 0 || 1 / a == 1 / b; }
    // A strict comparison is necessary because `null == undefined`.
    if (a === null || b === null) { return a === b; }
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) { return false; }
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a === 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
          a.global == b.global &&
          a.multiline == b.multiline &&
          a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') { return false; }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) { return bStack[length] == b; }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack, customTesters))) { break; }
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction(aCtor) && (aCtor instanceof aCtor) &&
        isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters))) { break; }
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (has(b, key) && !(size--)) { break; }
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();

    return result;

    function has(obj, key) {
      return obj.hasOwnProperty(key);
    }

    function isFunction(obj) {
      return typeof obj === 'function';
    }
  }
};

getJasmineRequireObj().toBe = function() {
  function toBe() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual === expected
        };
      }
    };
  }

  return toBe;
};

getJasmineRequireObj().toBeCloseTo = function() {

  function toBeCloseTo() {
    return {
      compare: function(actual, expected, precision) {
        if (precision !== 0) {
          precision = precision || 2;
        }

        return {
          pass: Math.abs(expected - actual) < (Math.pow(10, -precision) / 2)
        };
      }
    };
  }

  return toBeCloseTo;
};

getJasmineRequireObj().toBeDefined = function() {
  function toBeDefined() {
    return {
      compare: function(actual) {
        return {
          pass: (void 0 !== actual)
        };
      }
    };
  }

  return toBeDefined;
};

getJasmineRequireObj().toBeFalsy = function() {
  function toBeFalsy() {
    return {
      compare: function(actual) {
        return {
          pass: !!!actual
        };
      }
    };
  }

  return toBeFalsy;
};

getJasmineRequireObj().toBeGreaterThan = function() {

  function toBeGreaterThan() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual > expected
        };
      }
    };
  }

  return toBeGreaterThan;
};


getJasmineRequireObj().toBeLessThan = function() {
  function toBeLessThan() {
    return {

      compare: function(actual, expected) {
        return {
          pass: actual < expected
        };
      }
    };
  }

  return toBeLessThan;
};
getJasmineRequireObj().toBeNaN = function(j$) {

  function toBeNaN() {
    return {
      compare: function(actual) {
        var result = {
          pass: (actual !== actual)
        };

        if (result.pass) {
          result.message = "Expected actual not to be NaN.";
        } else {
          result.message = "Expected " + j$.pp(actual) + " to be NaN.";
        }

        return result;
      }
    };
  }

  return toBeNaN;
};

getJasmineRequireObj().toBeNull = function() {

  function toBeNull() {
    return {
      compare: function(actual) {
        return {
          pass: actual === null
        };
      }
    };
  }

  return toBeNull;
};

getJasmineRequireObj().toBeTruthy = function() {

  function toBeTruthy() {
    return {
      compare: function(actual) {
        return {
          pass: !!actual
        };
      }
    };
  }

  return toBeTruthy;
};

getJasmineRequireObj().toBeUndefined = function() {

  function toBeUndefined() {
    return {
      compare: function(actual) {
        return {
          pass: void 0 === actual
        };
      }
    };
  }

  return toBeUndefined;
};

getJasmineRequireObj().toContain = function() {
  function toContain(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {

        return {
          pass: util.contains(actual, expected, customEqualityTesters)
        };
      }
    };
  }

  return toContain;
};

getJasmineRequireObj().toEqual = function() {

  function toEqual(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {
        var result = {
          pass: false
        };

        result.pass = util.equals(actual, expected, customEqualityTesters);

        return result;
      }
    };
  }

  return toEqual;
};

getJasmineRequireObj().toHaveBeenCalled = function(j$) {

  function toHaveBeenCalled() {
    return {
      compare: function(actual) {
        var result = {};

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (arguments.length > 1) {
          throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');
        }

        result.pass = actual.calls.any();

        result.message = result.pass ?
          "Expected spy " + actual.and.identity() + " not to have been called." :
          "Expected spy " + actual.and.identity() + " to have been called.";

        return result;
      }
    };
  }

  return toHaveBeenCalled;
};

getJasmineRequireObj().toHaveBeenCalledWith = function(j$) {

  function toHaveBeenCalledWith(util) {
    return {
      compare: function() {
        var args = Array.prototype.slice.call(arguments, 0),
          actual = args[0],
          expectedArgs = args.slice(1),
          result = { pass: false };

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (!actual.calls.any()) {
          result.message = "Expected spy " + actual.and.identity() + " to have been called with " + j$.pp(expectedArgs) + " but it was never called.";
          return result;
        }

        if (util.contains(actual.calls.allArgs(), expectedArgs)) {
          result.pass = true;
          result.message = "Expected spy " + actual.and.identity() + " not to have been called with " + j$.pp(expectedArgs) + " but it was.";
        } else {
          result.message = "Expected spy " + actual.and.identity() + " to have been called with " + j$.pp(expectedArgs) + " but actual calls were " + j$.pp(actual.calls.allArgs()).replace(/^\[ | \]$/g, '') + ".";
        }

        return result;
      }
    };
  }

  return toHaveBeenCalledWith;
};

getJasmineRequireObj().toMatch = function() {

  function toMatch() {
    return {
      compare: function(actual, expected) {
        var regexp = new RegExp(expected);

        return {
          pass: regexp.test(actual)
        };
      }
    };
  }

  return toMatch;
};

getJasmineRequireObj().toThrow = function(j$) {

  function toThrow(util) {
    return {
      compare: function(actual, expected) {
        var result = { pass: false },
          threw = false,
          thrown;

        if (typeof actual != "function") {
          throw new Error("Actual is not a Function");
        }

        try {
          actual();
        } catch (e) {
          threw = true;
          thrown = e;
        }

        if (!threw) {
          result.message = "Expected function to throw an exception.";
          return result;
        }

        if (arguments.length == 1) {
          result.pass = true;
          result.message = "Expected function not to throw, but it threw " + j$.pp(thrown) + ".";

          return result;
        }

        if (util.equals(thrown, expected)) {
          result.pass = true;
          result.message = "Expected function not to throw " + j$.pp(expected) + ".";
        } else {
          result.message = "Expected function to throw " + j$.pp(expected) + ", but it threw " +  j$.pp(thrown) + ".";
        }

        return result;
      }
    };
  }

  return toThrow;
};

getJasmineRequireObj().toThrowError = function(j$) {
  function toThrowError (util) {
    return {
      compare: function(actual) {
        var threw = false,
          thrown,
          errorType,
          message,
          regexp,
          name,
          constructorName;

        if (typeof actual != "function") {
          throw new Error("Actual is not a Function");
        }

        extractExpectedParams.apply(null, arguments);

        try {
          actual();
        } catch (e) {
          threw = true;
          thrown = e;
        }

        if (!threw) {
          return fail("Expected function to throw an Error.");
        }

        if (!(thrown instanceof Error)) {
          return fail("Expected function to throw an Error, but it threw " + thrown + ".");
        }

        if (arguments.length == 1) {
          return pass("Expected function not to throw an Error, but it threw " + fnNameFor(thrown) + ".");
        }

        if (errorType) {
          name = fnNameFor(errorType);
          constructorName = fnNameFor(thrown.constructor);
        }

        if (errorType && message) {
          if (thrown.constructor == errorType && util.equals(thrown.message, message)) {
            return pass("Expected function not to throw " + name + " with message \"" + message + "\".");
          } else {
            return fail("Expected function to throw " + name + " with message \"" + message +
                        "\", but it threw " + constructorName + " with message \"" + thrown.message + "\".");
          }
        }

        if (errorType && regexp) {
          if (thrown.constructor == errorType && regexp.test(thrown.message)) {
            return pass("Expected function not to throw " + name + " with message matching " + regexp + ".");
          } else {
            return fail("Expected function to throw " + name + " with message matching " + regexp +
                        ", but it threw " + constructorName + " with message \"" + thrown.message + "\".");
          }
        }

        if (errorType) {
          if (thrown.constructor == errorType) {
            return pass("Expected function not to throw " + name + ".");
          } else {
            return fail("Expected function to throw " + name + ", but it threw " + constructorName + ".");
          }
        }

        if (message) {
          if (thrown.message == message) {
            return pass("Expected function not to throw an exception with message " + j$.pp(message) + ".");
          } else {
            return fail("Expected function to throw an exception with message " + j$.pp(message) +
                        ", but it threw an exception with message " + j$.pp(thrown.message) + ".");
          }
        }

        if (regexp) {
          if (regexp.test(thrown.message)) {
            return pass("Expected function not to throw an exception with a message matching " + j$.pp(regexp) + ".");
          } else {
            return fail("Expected function to throw an exception with a message matching " + j$.pp(regexp) +
                        ", but it threw an exception with message " + j$.pp(thrown.message) + ".");
          }
        }

        function fnNameFor(func) {
            return func.name || func.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];
        }

        function pass(notMessage) {
          return {
            pass: true,
            message: notMessage
          };
        }

        function fail(message) {
          return {
            pass: false,
            message: message
          };
        }

        function extractExpectedParams() {
          if (arguments.length == 1) {
            return;
          }

          if (arguments.length == 2) {
            var expected = arguments[1];

            if (expected instanceof RegExp) {
              regexp = expected;
            } else if (typeof expected == "string") {
              message = expected;
            } else if (checkForAnErrorType(expected)) {
              errorType = expected;
            }

            if (!(errorType || message || regexp)) {
              throw new Error("Expected is not an Error, string, or RegExp.");
            }
          } else {
            if (checkForAnErrorType(arguments[1])) {
              errorType = arguments[1];
            } else {
              throw new Error("Expected error type is not an Error.");
            }

            if (arguments[2] instanceof RegExp) {
              regexp = arguments[2];
            } else if (typeof arguments[2] == "string") {
              message = arguments[2];
            } else {
              throw new Error("Expected error message is not a string or RegExp.");
            }
          }
        }

        function checkForAnErrorType(type) {
          if (typeof type !== "function") {
            return false;
          }

          var Surrogate = function() {};
          Surrogate.prototype = type.prototype;
          return (new Surrogate()) instanceof Error;
        }
      }
    };
  }

  return toThrowError;
};

getJasmineRequireObj().version = function() {
  return "2.0.0";
};
