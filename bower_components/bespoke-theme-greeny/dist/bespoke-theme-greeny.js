/*!
 * bespoke-theme-greeny v0.0.3
 *
 * Copyright 2015, cedced19
 * This content is released under the MIT license
 * http://cedced19.github.io/license/
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.greeny=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = {
    theme: function() {
      var css = "*{box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .62s ease-in-out;transition:background .62s ease-in-out;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-slide{-webkit-transition:-webkit-transform .62s ease-in-out,opacity .62s ease-in-out,background .62s ease-in-out;transition:transform .62s ease-in-out,opacity .62s ease-in-out,background .62s ease-in-out;-webkit-transform-origin:50% 50% 0;-ms-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background-color:#2ecc71;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(130px)translateX(-320px)rotateY(-120deg)translateX(-320px);transform:translateX(130px)translateX(-320px)rotateY(-120deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;-ms-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-130px)translateX(320px)rotateY(120deg)translateX(320px);transform:translateX(-130px)translateX(320px)rotateY(120deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;-ms-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;-ms-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;-ms-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:16px}@media only screen and (max-width:400px){.bespoke-progress-parent{height:8px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#16a085}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .62s ease-in-out;transition:opacity .62s ease-in-out;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#ecf0f1;background:#2ecc71}h1{line-height:82px;letter-spacing:-2px;margin-bottom:16px;font-size:50px;white-space:nowarp}h2{letter-spacing:-1px;margin-bottom:8px;font-size:40px}h3{margin-bottom:24px;color:#ecf0f1;font-size:30px;font-weight:700}h4{margin-bottom:5px}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px;display:block}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}::-moz-selection{color:#2ecc71;background-color:#ecf0f1}::selection{color:#2ecc71;background-color:#ecf0f1}.inverse{background-color:#2ecc71;color:#2c3e50}.stick{border-width:3px 0;border-style:solid;border-color:#ddd}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.src{font-size:8px;margin-bottom:5px}.src::before{content:'Source: '}";
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

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});