
const arr = [['a', 'b'], ['m', 'n'], ['1', '2']]

/**
 * 列出矩阵所有排列方式
 * @param {*} mtx 
 * @returns 
 */

function listAllMatrix(mtx) {


  const result = []

  const length = mtx.length

  const dfs = (path, arrIndex) => {

    if (path.length === length) {
      result.push(path.join(''))
      return
    }

    for (let i = 0; i < mtx[arrIndex].length; i++) {

      path.push(mtx[arrIndex][i])
      dfs(path, arrIndex + 1)
      path.pop()
    }
  }

  dfs([], 0)
  return result


}

console.log(listAllMatrix(arr))