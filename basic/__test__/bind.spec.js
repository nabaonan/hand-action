
import { describe, expect, test } from '@jest/globals'

import '../bind.js'

function sometest(...params) {

  return {
    name: this.name,
    params
  }
}

const obj = {
  name: 'test'
}

test('自定义bind', () => {
  const bind = sometest.myBind(obj, 1, 2, 3)
  const result = bind(4, 5, 6)
  expect(result.name).toEqual('test')
  expect(result.params).toEqual([1, 2, 3, 4, 5, 6])
})

test('自定义bind new操作', () => {
  const bind = sometest.myBind(obj, 1, 2, 3)
  const result = new bind(4, 5, 6)
  expect(result.name).toEqual(undefined)
  expect(result.params).toEqual([1, 2, 3, 4, 5, 6])
})


test('原始bind', () => {
  const bind = sometest.bind(obj, 1, 2, 3)
  const result = bind(4, 5, 6)
  expect(result.name).toEqual('test')
  expect(result.params).toEqual([1, 2, 3, 4, 5, 6])
})


test('原始bind new操作', () => {
  const bind = sometest.bind(obj, 1, 2, 3)
  const result = new bind(4, 5, 6)
  expect(result.name).toEqual(undefined)
  expect(result.params).toEqual([1, 2, 3, 4, 5, 6])
})


