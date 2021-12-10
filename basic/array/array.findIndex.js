
/**
 * 返回数组中满足提供的测试函数的第一个元素的索引。
 * @param {*} fn 
 * @param {*} thisArgs 可选。执行callback时作为this对象的值.
 * @returns 
 */
Array.prototype.myFindIndex = function (fn, thisArgs) {
  const arr = this

  let i = 0
  const length = arr.length
  while (i < length) {

    const result = fn.call(thisArgs, arr[i], i, arr)//当前元素 索引 完整数组
    if (result) {
      return i
    } else {
      i++
    }
  }
  return -1



}