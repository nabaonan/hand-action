
//只是参数不用扩展符数组进行收集，其他和call是一样的
Function.prototype.myApply = function (context, args) {
  const fn = this

  if (context == null || context == undefined) {
    context = globalThis//使用全局变量，针对不同环境设定不同的变量，es新特性
  }
  const temp = Symbol('temp')
  context[temp] = fn
  const result = context[temp](...args)
  delete context[temp]//用完了记得删除临时的
  return result
}