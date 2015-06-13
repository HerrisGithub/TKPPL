[![NPM version](https://badge.fury.io/js/bespoke-theme-greeny.svg)](http://badge.fury.io/js/bespoke-theme-greeny)


# bespoke-theme-greeny

Greeny theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://cedced19.github.io/bespoke-theme-greeny/demo/dist)

> **Please note:** This theme is in beta and designed for use with a future release of Bespoke.js

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/cedced19/bespoke-theme-greeny/master/dist/bespoke-theme-greeny.min.js
[max]: https://raw.github.com/cedced19/bespoke-theme-greeny/master/dist/bespoke-theme-greeny.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  greeny = require('bespoke-theme-greeny');

bespoke.from('#presentation', [
  greeny.theme(),
  greeny.scale()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.greeny.scale(), // You don't have to use bespoke-scale
  bespoke.themes.greeny.theme()
]);
```

### Special class
```css
.inverse
  background-color: #2ecc71;
  color: #2c3e50;
  }

.stick
  border-width: 3px 0px;
  border-style: solid;
  border-color: #DDD;
  }

.single-words {
  word-spacing: 9999px;
  line-height: 2.9em;
  overflow: hidden;
  }
```
## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://cedced19.github.io/license/)
