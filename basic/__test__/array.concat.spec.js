
import { expect, it } from '@jest/globals'
import '../array/array.concat'
it('测试concat', () => {


  const arr = [{ a: 1 }, 2, 4]

  const result = arr.myConcat([3, 4])
  arr[0].a = 2
  expect(result).toEqual([{ a: 2 }, 2, 4, 3, 4])


  var num1 = [[1]];
  var num2 = [2, [3]];
  var num3 = [5, [6]];

  var nums = num1.myConcat(num2);
  expect(nums).toEqual([[1], 2, [3]])


  var nums2 = num1.myConcat(4, num3);

  expect(nums2).toEqual([[1], 4, 5, [6]])

  num1[0].push(4);

  expect(nums).toEqual([[1, 4], 2, [3]]);
  // results is [[1, 4], 2, [3]]
})

it('原生concat', () => {


  const arr = [{ a: 1 }, 2, 4]

  const result = arr.concat([3, 4])
  expect(result).toEqual([{ a: 1 }, 2, 4, 3, 4])


  arr[0].a = 2
  expect(result).toEqual([{ a: 2 }, 2, 4, 3, 4])//concat是浅拷贝




  var num1 = [[1]];
  var num2 = [2, [3]];
  var num3 = [5, [6]];

  var nums = num1.concat(num2);
  expect(nums).toEqual([[1], 2, [3]])


  var nums2 = num1.concat(4, num3);

  expect(nums2).toEqual([[1], 4, 5, [6]])

  num1[0].push(4);

  expect(nums).toEqual([[1, 4], 2, [3]]);
  // results is [[1, 4], 2, [3]]
})