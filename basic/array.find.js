Array.prototype.myFind = function (callback, thisArgs) {

  const arr = this
  for (let i = 0; i < arr.length; i++) {
    const result = callback.call(thisArgs, arr[i], i, arr)
    if (result) {
      return arr[i]
    }
  }
}