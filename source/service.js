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
