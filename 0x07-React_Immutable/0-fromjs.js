const { fromJS } = require('immutable');

const getImmutableObject = (mutableObj) => fromJS(mutableObj);

module.exports = { getImmutableObject };
