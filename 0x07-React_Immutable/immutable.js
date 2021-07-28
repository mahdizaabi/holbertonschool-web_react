import assert from 'assert';

const { Map, is } = require('immutable');

const map1 = Map({ a: 1, b: 1, c: 1 });
const map2 = Map({ a: 1, b: 1, c: 1 });
assert.equal(map1 !== map2, true);
assert.equal(Object.is(map1, map2), false);
assert.equal(is(map1, map2), true);
