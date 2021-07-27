import getImmutableObject from './0-fromjs'


describe("GetImmutableObject",()=>{
    const ob = {status: true, name:"test"};

    it('Check object reference', () =>{
        const immutable = getImmutableObject(ob);
        expect(ob !== immutable).toBe(true);
    })
    it('Check propertis mutation', () =>{
        const immutable = getImmutableObject(ob);
        immutable.name = "tset"
        expect(ob.name !== immutable.name).toBe(true);
    })

    it('Check object values', () =>{
        const immutable = getImmutableObject(ob);
        JSON.stringify(immutable) === JSON.stringify(ob)
        expect(JSON.stringify(immutable) === JSON.stringify(ob)).toBe(true)
    })

    it('Check object values after mutation', () =>{
        const ob = {status: true, name:"test"};
        const immutable = getImmutableObject(ob);
        immutable.name ="newname"
        expect(JSON.stringify(immutable) == JSON.stringify(ob)).toBe(true)
    })

    it('Check the immutable object behavior', () =>{
        const immutable = getImmutableObject(ob);
        const copy = immutable;
        copy.status = false
        expect(copy === immutable).toBe(true)
        expect(copy.status === immutable.status).toBe(true);
    })
})