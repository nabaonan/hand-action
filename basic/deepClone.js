
//使用弱引用map避免内存泄漏
export function deepClone(target, cache = new WeakMap()) {

  //是对象还是普通类型
  if (target instanceof Object) {


    //设置缓存提升性能
    if (cache.has(target)) {

      return cache.get(target)
    }

    //判断是数组还是对象
    const result = Array.isArray(target) ? [] : {}

    //设置缓存
    cache.set(target, result)

    for (let key of Reflect.ownKeys(target)) {
      result[key] = typeof target[key] == 'object' ? deepClone(target[key], cache) : target[key]
    }
    return result
  } else {
    return target
  }

}