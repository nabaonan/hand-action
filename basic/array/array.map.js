Array.prototype.myMap = function (fn) {
  const arr = this
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i,arr))
  }
  return result
}