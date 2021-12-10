
import { it, expect } from '@jest/globals'
import { arrToTree } from '../arrToTree'

it('数组转树', () => {
  
  const arr = [{

    id: 1,
    pid: null
  },{

    id: 2,
    pid: 1
  },{

    id: 3,
    pid: 1
  },{

    id: 4,
    pid: 2
  }]



  expect(arrToTree(arr)).toEqual({
    id: 1,
    children: [{
      id: 2,
      children: [
        {
          id: 4
        }
      ]
    }, {
      id:3
    }]
  })
})