/**
 * 列出1-n中 和为n的所数组组合，比如15  输出连续和为n的数组 [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]
 */

export function sum(target) {
  const result = []

  for (let i = 1; i < target; i++) {
    let sum = i
    let path = [i]
    for (let j = i + 1; j < target; j++) {
      if (sum + j < target) {
        path.push(j)
        sum += j
      } else if (sum + j == target) {
        path.push(j)
        result.push([...path])
      } else {
        break;
      }
    }

  }

  return result
}