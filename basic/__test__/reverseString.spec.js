import { expect, it } from '@jest/globals';
import { reverseString, reverseString2, reverseString3 } from '../reverseString';

it('测试翻转', () => {


  const str = 'hello world'

  const result1 = reverseString(str)
  const result2 = reverseString2(str)
  const result3 = reverseString3(str)

  expect(result1).toEqual('dlrow olleh')
  expect(result2).toEqual('dlrow olleh')
  expect(result3).toEqual('dlrow olleh')
})