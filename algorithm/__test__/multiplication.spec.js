

import { it, expect, test } from '@jest/globals'
import { multiplication } from '../multiplication'

it('测试', () => {




  expect(multiplication(4)()).toEqual(4)
  expect(multiplication(4)(5)()).toEqual(20)
  expect(multiplication(4)(5)(6)()).toEqual(120)

})