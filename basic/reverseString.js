export function reverseString(str) {

  if (!str instanceof String) {
    throw Error('请传入string类型')
  }
  const result = []
  for (let i = str.length; i >= 0; i--) {
    result.push(str[i])
  }

  return result.join('')


}

/**
 * 使用数组排序功能实现
 * @param {*} str 
 * @returns 
 */
export function reverseString2(str) {

  const arr = Array.from(str)
  arr.sort(() => {
    return -1//倒序排列
  })
  return arr.join('')
}

/**
 * 使用数组翻转功能实现
 * @param {*} str 
 * @returns 
 */
export function reverseString3(str) {

  const arr = Array.from(str)
  arr.reverse()
  return arr.join('')
}