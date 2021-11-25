import { expect, it } from '@jest/globals';
import { curry } from '../curry';

it('测试柯理化', () => {



  function add(a, b, c) {
    return a + b + c
  }




  const cur1 = curry(add)
  expect(cur1(1, 2)(3)).toEqual(6)


  //参数换位置
  const cur2 = curry(add)
  expect(cur2(1)(2, 3)).toEqual(6)

  //给初始参数值
  const cur3 = curry(add, 1, 2)
  expect(cur3(3)).toEqual(6)

})