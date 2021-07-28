import accessImmutableObject from '../2-nested';
/* eslint-disable */

const { Map ,is} = require('immutable');
import { map2 } from '../4-mutations'
describe('test get by array of paths', () => {

    it('returns undefined when path is invalid', () => {
        const value = accessImmutableObject({ x: [{ y: 123 }] }, ['x', 1, 'y']);
        expect(value).toBeUndefined();
    });

    it('check return value', () => {
        
        console.log(map2)
        const expected = Map({
            1: 'Liam',
            2: 'Benjamin',
            3: 'Elijah',
            4: 'Oliver',
            5: 'Jacob',
            6: 'Lucas',
        })
        expect(is(map2, expected)).toBe(true)
    })
});
