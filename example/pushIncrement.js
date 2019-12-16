'use strict';

const Cyfe = require('..');
const cyfe = new Cyfe();

cyfe.pushIncrement({
  id: '5df77205376f07353893125957962',
  key: 'Activations',
}).then(() => {
  console.log('Incremented by 1');
}).catch(err => {
  console.error('Error:', err);
});