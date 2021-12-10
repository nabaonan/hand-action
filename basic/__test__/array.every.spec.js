
import { expect, it, test } from '@jest/globals'

import '../array/array.every'
it('自定义every', () => {

  function isBigEnough(element, index, array) {

    return element >= 10;
  }
  expect([12, 5, 8, 130, 44].myEvery(isBigEnough)).toEqual(false)
  expect([12, 54, 18, 130, 44].myEvery(isBigEnough)).toEqual(true)

  expect([12, 5, 8, 130, 44].myEvery(x => x >= 10)).toEqual(false)
  expect([12, 54, 18, 130, 44].myEvery(x => x >= 10)).toEqual(true)


})

it('原生every', () => {
  const arr = [1, 2, 3]
  const result = arr.every((item) => {
    return item > 2
  })
  expect(result).toEqual(false)

})

