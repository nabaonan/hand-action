export function myInstanceof(cur, target) {
  let proto = Object.getPrototypeOf(cur)

  while (proto != null) {

    if (proto == target.prototype) {//注意这里应该判断目标类型的原型，因为当前对象或者原型对象的__proto__指向的是target.prototype，target不是对象而是一个类或者函数
      return true
    } else {
      proto = Object.getPrototypeOf(proto)
    }

  }
  return false

}