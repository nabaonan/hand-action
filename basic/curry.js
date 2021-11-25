export function curry(fn, ...args) {

  let total = fn.length//总参数个数 代表函数参数个数

  let totalArgs = [...args]//设置初始参数

  const curring = (...args1) => {

    totalArgs = totalArgs.concat(args1)//将每次参数追加到总参数
    if (totalArgs.length >= total) {//参数相等就可以触发执行
      return fn(...totalArgs)
    } else {
      return curring//注意这里不能写成执行，要返回柯理化的函数否则会出现无限调用
    }
  }
  return curring
}