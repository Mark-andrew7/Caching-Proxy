const { get, set, clear } = require('./cache');

set('key1', 'value1');
console.log(get('key1'));

clear();
console.log(get('key1'));

console.log(cache.size)