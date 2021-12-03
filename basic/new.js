export function myNew(target, ...args) {

  const obj = {}//构建一个空对象
  // const a = Object.getPrototypeOf(target)
  // const b = target.prototype
  Object.setPrototypeOf(obj, target.prototype)//将空对象的原型设置为目标原型
  //这里不能用Object.getPrototypeOf,因为getPrototypeOf入参是个对象，相当于获取的是Function.prototype 而不是target函数自身的prototype
 
  console.log(args)
  const result = target.apply(obj, args)//如果有返回结果则直接用返回的结果
  return result instanceof Object ? result : obj
}