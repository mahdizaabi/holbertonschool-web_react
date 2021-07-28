import { List, Map } from 'immutable';

const concatElements = (page1, page2) => List(page1).concat(List(page2));
const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));

export { concatElements, mergeElements };