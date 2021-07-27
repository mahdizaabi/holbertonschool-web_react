const { fromJS } = require('immutable');

module.exports = getImmutableObject = (object) => { return fromJS(object) };