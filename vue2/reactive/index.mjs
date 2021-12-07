import defineReactive from './defineReactive.mjs'
import { observe } from './observe.mjs'



const obj = {
  a: {
    m: {
      n: 123
    }
  },
  b: 2
}



observe(obj)

console.log(obj.a.m.n++)