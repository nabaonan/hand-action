
/**
 * 防抖
 * @param {*} cb 回调
 * @param {*} limitTime 自定义时间间隔
 * @returns 
 */
export function debounce(cb, limitTime = 0) {
  let timer

  console.log('回调函数', cb)
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      //将定义时候的参数和后传的参数合并之后进行调用
      cb(...args)
      clearTimeout(timer)
      timer = undefined
    }, limitTime)
  }
}