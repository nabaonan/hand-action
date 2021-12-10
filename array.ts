function flat(arr, result) {


  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.concat(flat(item, result))
    } else {
      result.push(item)
    }
  })
  return result

}




const arr = [1, 2, 3, [2, 3, 4]]
console.log(flat(arr, []))

console.log(arr.flat(Infinity))


