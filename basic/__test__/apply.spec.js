
import { describe, expect, test } from '@jest/globals'

import '../apply.js'

function sometest(...params) {

  return {
    name: this.name,
    params
  }
}

const obj = {
  name: 'test'
}

test('apply', () => {
  const result = sometest.myApply(obj, [1, 2, 3, 4])
  expect(result.name).toEqual('test')
  expect(result.params).toEqual([1, 2, 3, 4])
})

test('测试空值', () => {
  const result2 = sometest.myApply(undefined, [1, 2, 3, 4, 5])
  expect(result2.name).toEqual(undefined)
  expect(result2.params).toEqual([1, 2, 3, 4, 5])
})

