/**
 * 判断一个对象是否环状引用
 * @param {*} obj 
 * @returns 
 */
  
export function isCycle(obj) {

  const refs = [obj]
  let flag = false
  for (let key of Object.keys(obj)) {
    if (!refs.includes(obj[key])) {
      refs.push(obj[key])

      if (typeof obj[key] == 'object' && obj[key] !== null) {
        const result = isCycle(obj[key])
        if (result) {
          flag = true
          break
        }
      }
    } else {
      flag = true
      break
    }
  }
  return flag

}

