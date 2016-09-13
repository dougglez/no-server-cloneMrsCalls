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
