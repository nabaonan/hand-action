Object.prototype.myAssign = function (target, ...source) {


  for (let i = 0; i < source.length; i++) {
    if (source[i] !== undefined && source[i] !== null) {

      const keys = Object.keys(source[i])
      keys.forEach(key => {
        target[key] = source[i][key]
      })
    }
  }
  return target
}