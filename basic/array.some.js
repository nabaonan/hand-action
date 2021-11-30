Array.prototype.mySome = function (fn) {


  const arr = this
  for (let i = 0; i < arr.length; i++) {
    const r = fn(arr[i], i, arr)
    if (r) {
      return true
    }
  }
  return false
}