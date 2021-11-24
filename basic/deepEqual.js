
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function isFunction(fn) {
  return fn instanceof Function
}

export function deepEqual(current, target) {

  if (current instanceof Object && target instanceof Object) {


    const keys = Reflect.ownKeys(current)
    const targetKeys = Reflect.ownKeys(target)

    //比较函数
    if (isFunction(current)) {
      //函数需要转换toString比较，如果直接比较一直是false
      return current.toString() === target.toString()
    }

    //属性个数不等则不用比了
    if (keys.length !== targetKeys.length) {
      return false
    }
    //使用for of可以跳出
    for (let key of keys) {
      //如果属性值是对象则深度比较
      if (isObject(current[key])) {
        const flag = deepEqual(current[key], target[key])
        if (!flag) {
          return false
        }
      } else if (isFunction(current[key])) {

        return deepEqual(current[key], target[key])
      } else {
        if (current[key] !== target[key]) {
          return false
        }
      }
    }
    return true

  } else {
    return current === target
  }


}