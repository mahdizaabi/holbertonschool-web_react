import getImmutableObject from './1-map';
/* eslint-disable */
describe('mutability with Map', () => {

    it('test toStrictEqual behavior', () => {
        const a = { b: { c: "d" } }
        expect(a).toStrictEqual({ b: { c: "d" } })
        expect(a).not.toStrictEqual({ b: { c: "e" } })

    })

    it('nested object is mutated with Map', () => {
        const a = { b: { c: "d" } }
        const mutable = getImmutableObject(a);
        mutable.get('b').c = "xxx";
        expect(a).not.toStrictEqual({ b: { c: "d" } })
    })
})