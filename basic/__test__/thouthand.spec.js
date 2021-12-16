import { expect, it } from '@jest/globals'

import { thouthand2,thouthand1, thouthand3 } from '../thouthand'
it('测试', () => {



  const mytest = (fn) => {
    expect(fn(1234)).toEqual('1,234')
    expect(fn(123456)).toEqual('123,456')
    expect(fn(123)).toEqual('123')
    expect(fn(123123.234)).toEqual('123,123.234')
  }


  mytest(thouthand2)
  mytest(thouthand3)
  mytest(thouthand1)

})