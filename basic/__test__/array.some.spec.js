
import { expect, it, test } from '@jest/globals'

import '../array/array.some'

it('自定义some', () => {

  function isBiggerThan10(element, index, array) {
    return element > 10;
  }

  expect([2, 5, 8, 1, 4].mySome(isBiggerThan10)).toEqual(false)
  expect([12, 5, 8, 1, 4].mySome(isBiggerThan10)).toEqual(true)



})