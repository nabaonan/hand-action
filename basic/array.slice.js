Array.prototype.mySlice = function (start = 0, end = 0) {

  let arr
  if (Array.isArray(this)) {

    arr = this
  } else {
    arr = [...this]//解决类数组情况
    // arr = Array.from(this)
  }
  if (start == 0 && end == 0) {
    return arr
  }

  if (start > end) {
    // throw Error('起始位置不应大于终止位置')
    return []
  }
  if (start < 0) {
    start = arr.length + start
  }
  if (end < 0) {
    end = arr.length + end
  }


  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      result.push(arr[i])
    }
  }
  return result
}