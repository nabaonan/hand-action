
import { it,expect } from '@jest/globals'
import { unique,unique2,unique3,unique4 } from '../array/array.unique'



it('测试去重', () => {
  
// expect(unique([1, 2, 3],[2,3,4])).toEqual([1,2,3,4])
// expect(unique2([1, 2, 3],[2,3,4])).toEqual([1,2,3,4])
// expect(unique3([1, 2, 3],[5,6,4,3,7])).toEqual([1,2,3,4,5,6,7])
expect(unique4([3,2,1,3,4,2,2,1,5])).toEqual([1,2,3,4,5])

  
})