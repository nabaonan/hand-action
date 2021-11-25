Array.prototype.myFlat = function () {
  const arr = this


  const flat = function (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      result = result.concat(Array.isArray(arr[i]) ? flat(arr[i]) : arr[i])
    }
    return result
  }
  return flat(arr)

}


Array.prototype.myFlat2 = function () {
  const arr = this
  const str = arr.toString()
  return str.split(',').map(item => parseInt(item))
}
