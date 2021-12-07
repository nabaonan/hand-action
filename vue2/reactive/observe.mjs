import Observer from './Observer.mjs'


export const observe = function observe(value) {
//这个函数是第一次遍历整个对象，给所有对象添加响应式代码
  if (typeof value !== 'object') {
    return
  }
  let ob
  if (value.__ob__ !== undefined) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}