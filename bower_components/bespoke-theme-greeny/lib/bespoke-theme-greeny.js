var fs = require('fs');
var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = {
    theme: function() {
      var css = fs.readFileSync(__dirname + '/tmp/theme.css', 'utf8');
      insertCss(css, { prepend: true });

      return function(deck) {
        classes()(deck);
      };
    },
    scale: function() {
      return function(deck) {
        var parent = deck.parent,
          firstSlide = deck.slides[0],
          slideHeight = firstSlide.offsetHeight,
          slideWidth = firstSlide.offsetWidth,
          useZoom = 'WebkitAppearance' in document.documentElement.style,

          wrap = function(element) {
            var wrapper = document.createElement('div');
            wrapper.className = 'bespoke-scale-parent';
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            return wrapper;
          },

          elements = useZoom ? deck.slides : deck.slides.map(wrap),

          transformProperty = (function(property) {
            var prefixes = 'Moz Webkit O ms'.split(' ');
            return prefixes.reduce(function(currentProperty, prefix) {
                return prefix + property in parent.style ? prefix + property : currentProperty;
              }, property.toLowerCase());
          }('Transform')),

          scale = useZoom ?
            function(ratio, element) {
              element.style.zoom = ratio;
            } :
            function(ratio, element) {
              element.style[transformProperty] = 'scale(' + ratio + ')';
            },

          scaleAll = function() {
            var xScale = parent.offsetWidth / slideWidth,
              yScale = parent.offsetHeight / slideHeight;

            elements.forEach(scale.bind(null, Math.min(xScale, yScale)));
          };

        window.addEventListener('resize', scaleAll);
        scaleAll();
      };
    }
}
