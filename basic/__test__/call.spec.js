
import { describe, expect, test } from '@jest/globals'

import '../call.js'

function sometest(param) {

  return {

    name: this.name,
    param
  }
}

const obj = {
  name: 'test'
}

test('call', () => {
  const result = sometest.myCall(obj, 'param')
  expect(result.name).toEqual('test')
  expect(result.param).toEqual('param')
})

test('测试空值', () => {
  const result2 = sometest.myCall(undefined, 'param')
  expect(result2.name).toEqual(undefined)
  expect(result2.param).toEqual('param')
})

test('原生call', () => {
  const result = sometest.call(obj, 'param')

  expect(result.name).toEqual('test')
  expect(result.param).toEqual('param')
})

