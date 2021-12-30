
import { it, expect } from '@jest/globals'



import { a } from '../special-equal'

it('测试', () => {

  expect(a == 1 && a == 2 && a == 3).toEqual(true)
})