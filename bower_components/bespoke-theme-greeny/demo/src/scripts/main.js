var bespoke = require('bespoke'),
  greeny = require('../../../lib/bespoke-theme-greeny.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop');

bespoke.from('article', [
  greeny.theme(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  greeny.scale(),
  progress(),
  backdrop()
]);
