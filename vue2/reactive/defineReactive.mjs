import { observe } from './observe.mjs'
import Observer from './Observer.mjs'

export default function defineReactive(data,key,val) {
  // val形成闭包，所以当set设置完了之后，再get时候还是之前设置的值

  console.log('调用defineReative',key)
  if (arguments.length == 2) {
    //这种形式是为了解决defineReactive(obj,a)  这种只穿两个参数的形式
    val =data[key]
  }

  //递归流程就是observe => new Observer()=>defineReactive =>observe形成环状的递归
  let childOb = observe(val)//递归遍历子结构
  Object.defineProperty(data, key, {
    enumerable: true,//可枚举，就是可以被遍历出来
    configurable: true,//可配置，就是可以被删除
    get() {
      console.log('访问属性',key)
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      console.log('改变属性',key)
      val = newVal
      childOb = observe(val)//当赋值一个新的值这个值要被重新进行观测
    }
  })

}