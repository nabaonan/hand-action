import { expect, it } from '@jest/globals';

import '../array.findIndex'

/**
 * 测试用例： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 */
it('测试findIndex', () => {

  function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }

  expect([4, 6, 8, 12].myFindIndex(isPrime)).toEqual(-1) // -1, not found
  expect([4, 6, 7, 12].myFindIndex(isPrime)).toEqual(2); // 2

}
)