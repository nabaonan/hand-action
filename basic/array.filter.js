Array.prototype.myFilter = function (fn) {

  const arr = this

  const result = []
  arr.forEach((item, index) => {
    if (fn(item, index, arr)) {
      result.push(item)
    }
  })
  return result

}