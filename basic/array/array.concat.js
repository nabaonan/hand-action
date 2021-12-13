/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * 数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝。详情请参阅下文描述。
 * @param  {...any} arrs 
 * @returns 
 */

Array.prototype.myConcat = function (...arrs) {
  
  const arr = this
  const result = [...arr]
  for (let i = 0; i < arrs.length; i++) {
    if (Array.isArray(arrs[i])) {
      result.push(...arrs[i])
    } else {
      result.push(arrs[i])
      
    }
  }
  return result

}
