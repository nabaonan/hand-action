
import { it,expect} from '@jest/globals'
import {maxSubLength } from '../maxLongSub'

it('测试', () => { 


  expect(maxSubLength('1234456')).toEqual('1234')
  expect(maxSubLength('abcddcba')).toEqual(['abcd','dcba'])
  expect(maxSubLength('aaaaa')).toEqual('a')
  expect(maxSubLength('aaaaabcccccccccbaaaaaaa')).toEqual(['abc','cba'])


})