
/**
 * 使用setInterval模拟setTimeout
 */

export default function setTimeout(fn, timeout) {
  const inter = setInterval(() => {
    console.log('调用了')
    fn()
    clearInterval(inter)
  }, timeout)
  return () => {
    console.log('终止')
    clearInterval(inter)
  }

}