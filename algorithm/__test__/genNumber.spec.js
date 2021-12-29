
import { it, expect, test } from '@jest/globals'
import {genNumber } from '../genNumber'
it('测试一下', () => { 
  
  
  expect(genNumber(['ab', 'c', 'd', 'ab', 'c'])).toEqual(['ab1', 'c1', 'd', 'ab2', 'c2'])

})