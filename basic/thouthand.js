/**
 * 数字转换千分位  正则
 * @param {*} num 
 * @returns 
 */

export function thouthand1(num) {


  const [ integer, decimal = '' ] = `${num}`.split('.')

  /**
   * 
   * https://www.runoob.com/regexp/regexp-metachar.html
   *    \b	匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。

        \B	匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。

        (?=pattern)	正向肯定预查（look ahead positive assert），在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，"Windows(?=95|98|NT|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
   */
  return integer.replace(/\B(?=(\d{3})$)/g, ',') + (decimal ? '.' + decimal : '')
}

/**
 * 原生api
 * @param {*} num 
 * @returns 
 */
export function thouthand2(num) {
  return num.toLocaleString()
}

/**
 * 取模运算
 * @param {*} num 
 * @returns 
 */
export function thouthand3(num) {

  let [int, decimal = ''] = `${num}`.split('.')//分割小数和整数
  const s = `${int}`.split('').reverse()//翻转便于分割逗号
  let result = []
  for (let i = 0; i < s.length; i++) {
    result.push(s[i])
    if ((i + 1) % 3 == 0 && i != s.length - 1) {//如果是第一位则略过不加逗号，
      result.push(',')
    }
  }
  return result.reverse().join('') + (decimal ? `.${decimal}` : '')//注意兼容有小数的形式
}