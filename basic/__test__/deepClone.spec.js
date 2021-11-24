import { expect, it } from '@jest/globals';
import { deepClone } from '../deepClone'



it('深度克隆', () => {


  const obj = {
    test: 1,
    say: function () {
      return this.test
    }
  }

  const arr = [
    {
      test: 1,
      arr: [{
        test: 1
      }, {
        test: 1
      }]
    }
  ]
  const empty = null

  const empty2 = deepClone(empty)
  const obj2 = deepClone(obj)
  const arr2 = deepClone(arr)
  obj.test = 2
  arr[0].test = 2
  arr[0].arr[0].test = 2


  expect(obj.say()).toEqual(2)
  expect(obj2.say()).toEqual(1)
  expect(empty2).toEqual(null)
  expect(arr2[0].arr[0].test).toEqual(1)
  expect(arr[0].arr[0].test).toEqual(2)
  expect(arr[0].arr[1].test).toEqual(1)//测试缓存，更改第一个不影响第二个
  expect(arr[0].test).toEqual(2)
  expect(arr2[0].test).toEqual(1)
  expect(obj.test).toEqual(2)
  expect(obj2.test).toEqual(1)

})



