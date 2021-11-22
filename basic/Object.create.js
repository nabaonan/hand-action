export function create(targetPrototype) {

  if (!targetPrototype instanceof Object && !targetPrototype instanceof Function) {
    throw new Error('原型必须是对象或函数对象')
  } else if (targetPrototype == null) {
    throw new Error('原型不能为空')
  }

  const temp = function () { }
  temp.prototype = targetPrototype
  return new temp()

}