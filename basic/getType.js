export function getType(obj) {
  
  const result = Object.prototype.toString.call(obj)

  
  const r = result.replace(/\[object (.+)\]/, '$1')//替换第几个括号分组中匹配的内容
  // 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从1开始。如果不存在第 n个分组，那么将会把匹配到到内容替换为字面量。比如不存在第3个分组，就会用“$3”替换匹配到的内容。
  console.log(r)
  return r.toLowerCase()
}

