import { expect, it } from '@jest/globals';
import { getType } from '../getType';

it('获取类型', () => {
  class Father { }
  expect(getType(1)).toEqual('number')
  expect(getType('1')).toEqual('string')
  expect(getType(null)).toEqual('null')
  expect(getType(undefined)).toEqual('undefined')
  expect(getType(Symbol.iterator)).toEqual('symbol')
  expect(getType(1n)).toEqual('bigint')
  expect(getType({})).toEqual('object')
  expect(getType(() => { })).toEqual('function')
})