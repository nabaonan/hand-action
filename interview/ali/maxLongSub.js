
/**
 * 输出一个随机字符串的最长子串结果，注意不是长度，是结果，如果长度相同，输出所有这个长度的结果
 * @param {*} str 
 * @returns 
 */

// const a = '1233332221111'
export function maxSubLength(str) {
  /**
   * 思路分析
   * 使用双指针计算出最长子串长度
   * prev指向子串最左侧，i代表当前循环的字符
   * 判断当前长度和之前最长的长度比，如果大于max 则截取prev指针当前指针的字符串放到result中
   * 如果当前子串长度等于，则将之前结果变成一个数组，将当前子串放到数组
   * 返回result结果
   * 
   * 
   * 
   */

  let prev = -1//
  let max = 0
  let map = {}
  let result = ''
  for (let i = 0; i < str.length; i++) {

    if (map[str[i]] !== undefined) {
      prev = Math.max(prev, map[str[i]] + 1)//因为map[str[i]]是上一个当前字符的下标，所以要取他的下一个位置当做子串的起始位置，所以+1
    }
    if (i - prev + 1 > max) {//注意这里要+1   假设3~4是一个子串，那这个子串长度是2，所以4-3+1=2
      max = i - prev
      result = str.substring(prev, i + 1)//这里也要+1  因为substring是左闭右开区间
      // console.log(max, str.substring(prev, i + 1))
      // console.log(str.substring(prev,i+1))
    } else if ((i - prev + 1) === max) {
      // console.log(result, i, prev, max)
      if (result != str.substring(prev, i + 1) || !result.includes(str.substring(prev, i + 1))) { 

        result = [].concat(result, str.substring(prev, i + 1))
      }

    }

    map[str[i]] = i



  }

  return result

}

// console.log(maxSubLength(a))