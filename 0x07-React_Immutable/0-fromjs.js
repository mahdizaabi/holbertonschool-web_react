const { Map } = require('immutable');

const getImmutableObject = (mutableObj) => Map(mutableObj);

export default getImmutableObject;
