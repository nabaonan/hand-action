import { expect, it } from '@jest/globals'
import { limit } from '../limit'



it('限制并发', () => {
  const tasks = [new Promise(resolve => {
    setTimeout(() => {
      // console.log(1)
      resolve()
    },1000)
  }),new Promise(resolve => {
    setTimeout(() => {
      // console.log(2)
      resolve()
    },1000)
  }),new Promise(resolve => {
    setTimeout(() => {
      // console.log(3)
      resolve()
    },1000)
  }),new Promise(resolve => {
    setTimeout(() => {
      // console.log(4)
      resolve()
    },1000)
  })]

  limit(tasks, 2)
  
})