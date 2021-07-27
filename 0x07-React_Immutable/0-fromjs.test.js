const getImmutableObject = require('./0-fromjs');

describe('getImmutableObject', () => {
  const ob = { status: true, name: 'test' };

  it('check object reference', () => {
    const immutable = getImmutableObject(ob);
    expect(ob !== immutable).toBe(true);
  });
  it('check propertis mutation', () => {
    const immutable = getImmutableObject(ob);
    immutable.name = 'tset';
    expect(ob.name !== immutable.name).toBe(true);
  });

  it('check object values', () => {
    const immutable = getImmutableObject(ob);
    expect(JSON.stringify(immutable) === JSON.stringify(ob)).toBe(true);
  });

  it('check object values after mutation', () => {
    const ob = { status: true, name: 'test' };
    const immutable = getImmutableObject(ob);
    ob.status = false;

    expect(JSON.stringify(immutable) === JSON.stringify(ob)).toBe(false);
  });

  it('check the immutable object behavior', () => {
    const immutable = getImmutableObject(ob);
    const copy = immutable;
    copy.status = false;
    expect(copy === immutable).toBe(true);
    expect(copy.status === immutable.status).toBe(true);
  });
});
