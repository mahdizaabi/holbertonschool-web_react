import getImmutableObject from './0-fromjs';

export default function accessImmutableObject(object, array) {
  return getImmutableObject(object).getIn(array);
}
