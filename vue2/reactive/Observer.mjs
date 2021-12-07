import defineReactive from './defineReactive.mjs'
import { def } from './util.mjs'

export default class Observer {
  constructor(value) {
    console.log('调用构造器')
    def(value, '__ob__', this, false)//给实例添加一个__ob__并且这个属性是不能被枚举到的
    this.walk(value)
  }
  walk(value) {
    for (let key in value) {
      defineReactive(value,key)
    }
  }
}