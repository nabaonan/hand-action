import { expect, it } from '@jest/globals'
import { objMaxLevel } from '../objMaxLevel'

it('测试对象最高层级', () => {
  const obj = {
    test1: {
//低层级
    },
    test: {
      test2: {},
      test3: 1
    }
  }
  obj.test.test3 = obj//循环引用
  expect(objMaxLevel(obj)).toEqual(3)


  const arr = [{
    test: {
      test2 :2
    }
  }]


  expect(objMaxLevel(arr)).toEqual(3)

})