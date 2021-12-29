import { expect, it } from '@jest/globals'
import { sum } from '../sum'

it('测试', () => { 
  // expect(sum(2)(3)()).toEqual(5)
  expect(sum(2,3)()).toEqual(5)
})