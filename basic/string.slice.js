String.prototype.mySlice = function (start, end) {

  const str = this
  let result = ''
  if (!end) {
    end = str.length
  }
  if (end < 0) {//兼容负数
    end = str.length + end
  }
  for (let i = 0; i < str.length; i++) {
    if (i >= start && i < end) {
      result += str[i]
    }
  }
  return result
}