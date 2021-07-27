const { fromJS } = require('immutable');

const getImmutableObject = (mutableObj) => fromJS(mutableObj);

export default getImmutableObject;
