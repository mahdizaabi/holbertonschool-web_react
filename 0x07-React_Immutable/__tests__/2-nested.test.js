import accessImmutableObject from '../2-nested';
/* eslint-disable */

const { Map } = require('immutable');

describe('test get by array of paths', () => {
  const deepData = Map({ x: [{ y: 123 }] });
  it('get by valid path', () => {
    const value = accessImmutableObject({ x: [{ y: 123 }] }, ['x', 0, 'y']);
    expect(value).toBe(123);
  });
  it('returns undefined when path is invalid', () => {
    const value = accessImmutableObject({ x: [{ y: 123 }] }, ['x', 1, 'y']);
    expect(value).toBeUndefined();
  });
  it('returns undefined when path is invalid', () => {
    const value = accessImmutableObject({ x: [{ y: 123 }] }, ['x', 1, 'y']);
    expect(value).toBeUndefined();
  });
});
