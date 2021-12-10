/**
 * 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * @param {*} fn 
 * @returns 
 */
Array.prototype.myEvery = function (fn) {

  const arr = this
  let result = true
  for (let i = 0; i < arr.length; i++) {

    const r = fn(arr[i], i, arr)
    if (!r) {
      result = false
    }

  }
  return result


}