import { expect, it } from '@jest/globals';
import { random } from '../random';

it('测试随机数', () => {


  const test1 = random(2, 4)
  const test2 = random(5, 10)
  expect(test1).toBeGreaterThanOrEqual(2)
  expect(test1).toBeLessThan(4)
  expect(test2).toBeGreaterThanOrEqual(5)
  expect(test2).toBeLessThan(10)

})