Array.prototype.myEvery = function (fn) {

  const arr = this
  let result = true
  for (let i = 0; i < arr.length; i++) {

    const r = fn(arr[i], i, arr)
    if (!r) {
      result = false
    }

  }
  return result


}