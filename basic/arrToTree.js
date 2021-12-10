/**
 * 扁平数组转树结构
 * 
 */
export function arrToTree(arr) {

  const map = {}

  let root = null
  arr.forEach(item => {

    if (!map[item.id]) {
      map[item.id] = item
    }
    if (item.pid !== null) {
      map[item.pid].children = map[item.pid].children || []
      map[item.pid].children.push(item)
      delete item.pid
    } else {
      root = item
      delete item.pid
    }

  })

  return root

}