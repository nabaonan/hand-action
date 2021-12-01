/**
 * 使用es6 的set
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
export function unique(arr1, arr2) {

  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * 使用map记录
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
export function unique2(arr1, arr2) {
  const result = []
  const map = {}//记录访问过的

  arr1.concat(arr2).forEach(val => {
    if (map[val] != true) {
      result.push(val)
      map[val] = true
    }
  })
  return result
}


/**
 * 排序后双指针
 * @param {*} arr1 
 * @param {*} arr2 
 */
export function unique3(arr1, arr2) {

  //先合并数组升序排列
  //两个指针  j负责遍历，i负责替换元素，并返回截止的下标
  const arr = arr1.concat(arr2).sort()
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++//这里要先往后移动一位，再替换值
      arr[i] = arr[j]
    }
  }
  return arr.slice(0,i+1)
  
}

