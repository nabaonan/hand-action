export const def = function (obj,key, value, enumerable) {

  Object.defineProperty(obj, key, {
    value,
    enumerable,
    configurable: true,//是否可以删除
    writable: true//是否可以写入
  })
 }