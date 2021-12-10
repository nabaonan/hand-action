
import { expect, it, test } from '@jest/globals'
import '../array/array.map'



it('自定义map', () => {
  const arr = [1, 2, 3]
  const trans = arr.myMap((item, index) => `${item}-${index}`)
  expect(trans).toStrictEqual(['1-0', '2-1', '3-2'])
})

it('原始map', () => {
  const arr = [1, 2, 3]

  const trans = arr.map((item, index) => `${item}-${index}`)
  expect(trans).toStrictEqual(['1-0', '2-1', '3-2'])
})