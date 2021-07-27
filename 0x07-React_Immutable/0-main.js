import getImmutableObject  from './0-fromjs'


const x = {a:'a', b:'b'}

const y = getImmutableObject(x);

x.a = "xxx"
console.log(x)
console.log(y)

