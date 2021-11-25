
/**
 * 求arr1存在arr2不存在的数据
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */

//这个不是全部差集，只是求arr1存在arr2不存在的
export function diff(arr1, arr2) {

  return arr1.filter(item => {
    return !arr2.find(item2 => {
      if (item2 instanceof Object) {
        return item2.id === item.id
      } else {
        return item2 === item
      }
    })
  })


}