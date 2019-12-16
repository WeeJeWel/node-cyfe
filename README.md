# Cyfe

Simple wrapper to talk with the [Cyfe API](https://www.cyfe.com/api).

## Installation

```
$ npm i cyfe
```

## Examples

First, add a Push API widget (_Add Widget > Custom > Push API_) and find your ID.

```javascript
const Cyfe = require('cyfe');
const cyfe = new Cyfe({
   id: '<your widget key>', // e.g. 5df77205376f07353893125957962
});

cyfe.pushIncrement({
  key: 'Activations', // Can be any key. This will show up in the chart.
}).then(() => {
  console.log('Incremented by 1');
}).catch(err => {
  console.error('Error:', err);
});
```