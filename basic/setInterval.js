
/**
 * 使用setTimeout实现interval
 * @param {*} fn 
 * @param {*} millsecond 
 */


export default function mySetInterval(fn, millsecond) {

  let timer
  const cycle = () => {
    return setTimeout(() => {
      fn()

      clearTimeout(timer)
      timer = cycle()
    }, millsecond)
  }
  cycle()
  return () => {
    console.log('清除计时器')
    clearTimeout(timer)
  }


}