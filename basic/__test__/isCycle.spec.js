
import { expect, it, test } from '@jest/globals'
import { isCycle } from '../isCycle'
it('测试循环引用', () => {
  

  var obj = {
    a: {
        c: [
            1, 2
        ]
    },
    b: 1
  }
  obj.a= obj
  expect(isCycle(obj)).toEqual(true)


  var obj2 = {
    a: {
      test: 1
    }
  }

  expect(isCycle(obj2)).toEqual(false)


})