

Function.prototype.myCall = function (context, ...args) {//注意这里不要用箭头函数，如果用箭头函数，这里的this指向就是undefined
  //使用扩展运算符将多个参数收集到一个args数组
  const fn = this//this指向的是调用的函数，例如 test.call(),就指向的是test
  if (context == null || context == undefined) {
    context = globalThis//使用全局变量，针对不同环境设定不同的变量，es新特性
  }


  const temp = Symbol('temp')
  context[temp] = fn
  const result = context[temp](...args)
  delete context[temp]
  return result

}