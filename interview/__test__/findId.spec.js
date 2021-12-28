
import { it, expect, test } from '@jest/globals'

import { findId } from '../findId'

it('测试', () => { 

  const arr = [{
    id: 1,
    child: [{
      id: 2,
      child: [{
        id: 3,
        child: [{
          id: 4,
          child: [{
            id: 5
          }]
        }, {
          id: 6
        }]
      }]
    }]
  }]

  expect(findId(arr, 6)).toEqual([1, 2, 3, 6])
  

  const arr2 = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    }
  ]
  expect(findId(arr2, 3)).toEqual([3])


})