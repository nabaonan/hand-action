
/**
 * 实现一个加法器
 * sum(2)(3)和sum(2,3)都输出5
 * @param  {...any} nums 
 * @returns 
 */


export function sum(...nums) { 


  let result = 0
  return function mysum(...args) { 

    if (args.length === 0) {
      return result
    } else { 
      const total = args.concat(nums)
      console.log(total)
      result = total.reduce((cur,prev) => cur + prev, 0)

      return mysum
    }
  }
}

