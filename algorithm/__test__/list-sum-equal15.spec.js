

import { it, expect, test } from '@jest/globals'
import { sum } from '../list-sum-equal15'

test('测试一下', () => {
  const result = sum(15)
  expect(result).toEqual([[1, 2, 3, 4, 5], [4, 5, 6], [7, 8],])
})