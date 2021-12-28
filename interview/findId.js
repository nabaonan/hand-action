

/**
 * 给定一个数组，给定一个目标值，输出这个目标值的路径  字节一面
 * 
 * 比如输入6，要输出[1,2,3,6]
 * 
 * 
 * 
 */

// const arr = [{
//   id: 1,
//   child: [{
//     id: 2,
//     child: [{
//       id: 3,
//       child: [{
//         id: 4,
//         child: [{
//           id: 5
//         }]
//       }, {
//         id: 6
//       }]
//     }]
//   }]
// }]

/**
 * 回溯
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
export const findId = (arr, target) => {

  const path = []
  let flag = false
  const dfs = (subarr) => {

    for (let i = 0; i < subarr.length; i++) {
      if (subarr[i].id === target) {
        path.push(subarr[i].id)
        flag = true

      } else if (subarr[i].child) {
        path.push(subarr[i].id)
        dfs(subarr[i].child)
        if (flag) {
          break
        } 
        path.pop()
      }
    }
  }
  dfs(arr)
  return path


}

