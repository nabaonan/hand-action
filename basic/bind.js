Function.prototype.myBind = function (context, ...args1) {

  const fn = this

  return function bindInstance(...args2) {

    const args = args1.concat(args2)
    if (this instanceof bindInstance) {
      return new fn(...args)//new 的优先级高，所以直接执行new，this指向new的实例
    } else {
      return fn.apply(context, args)
    }
  }

}