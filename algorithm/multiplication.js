// 三、实现一个乘法函数（第三题和第四题二选一）
// multiplication(4)() = 4; 
// multiplication(4)(5)() = 20; 
// multiplication(4)(5)(6)()=120; 

export function multiplication(num) {
  let result = num
  return function F(...args) {
    if (args.length == 1) {
      result = args[0] * result
      return F
    }
    else {
      return result
    }
  }
}