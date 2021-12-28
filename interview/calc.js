
/**
 * (小红书)
 * 土豪招聘贴身保镖
 * 第一天只能得到100元
 * 后两天每天200元
 * 后三天每天得到300元
 * 问： 给定一个天数，返回得到多少报酬
 * @param {*} target 计算多少天的薪资
 */

export function getSalary(target) {

  let count = 1
  const total = []
  let flag = true
  while (total.length < target) {
    for (let i = 0; i < count; i++) {
      total.push(count * 100)
      if (total.length == target) {
        flag = false
        break
      }
    }
    if (!flag) {
      break
    }
    count++
  }
  return total.reduce((cur, prev) => cur + prev, 0)
}


export function getSalary2(target) {

  let count = 1
  let flag = true
  let total = 0
  let result = 0
  while (total < target) {
    for (let i = 0; i < count; i++) {
      total++
      result += count * 100
      if (total == target) {
        flag = false
        break
      }

    }
    if (!flag) {
      break
    }
    count++
  }
  return result



}

export function getSalary3(target) {


  const arr = new Array(target).fill(false)

  let count = 1
  let cur = 0
  let result = 0
  let flag = false
  while (count++) {


    for (let i = 0; i < count; i++) {


      if (cur == target) {
        flag = true
        break
      }
      cur++
      result += count * 100

    }
    if (flag) {
      break;
    }

  }
  return result

}