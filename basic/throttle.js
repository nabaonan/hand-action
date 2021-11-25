/**
 * 节流
 */


export function throttle(fn, limitTime = 100) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        clearTimeout(timer)
        timer = undefined
      }, limitTime);
    }
  }
}