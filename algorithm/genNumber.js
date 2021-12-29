

/**
 * 编写一个函数 实现
 * 传入一个数组['ab', 'c', 'd', 'ab', 'c']
 * 要求返回['ab1', 'c1', 'd', 'ab2', 'c2']
 * 说明：重复多次的字符串后面追加编号，如果没有重复的不追加编号
 */

export function genNumber(arr) {


  const map = {}
  const newMap = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] || 0
    map[arr[i]]++

    if (map[arr[i]] > 1) {
      newMap[arr[i]] = map[arr[i]]
    }
  }


  for (let i = arr.length - 1; i >= 0; i--) {
    if (newMap[arr[i]]) {
     
      let num = newMap[arr[i]]
      let val = `${arr[i]}${num}`
      newMap[arr[i]]--
      arr[i] = val
    
    }
  }



  return arr

}