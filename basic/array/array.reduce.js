

Array.prototype.myReduce = function (fn, defaultValue) {
  const arr = this
  let result = defaultValue
  arr.forEach((item, index) => {
    result = fn(result, item, index, arr)
  })
  return result
}