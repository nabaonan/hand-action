import { expect, it } from '@jest/globals';
import '../array.flat'
it('扁平化', () => {


  const arr = [[1, 2, 3], [4, [5, 6, [7, 8]]]]

  const str = arr.toString()
  console.log(str)
  expect(arr.myFlat()).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(arr.myFlat2()).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})