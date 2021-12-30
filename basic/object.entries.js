

Object.prototype.myentries = function () { 

  const obj = this

  const keys = Reflect.ownKeys(obj)

  const result = []
  for (let key of keys) { 
   result.push([key,obj[key]])
  }
  return result
}