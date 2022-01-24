
import { it, expect, test } from '@jest/globals'
import { all, all1, all2, all3 } from '../sequenceAll'


it('测试sequenceALl', () => {

  const arr = [() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
  }, () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 100)
    })
  }, () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(3)
      }, 50)
    })
  }]

  all(arr).then(result => {
    expect(result).toEqual([1, 2, 3])
  })

  all1(arr).then(result => {
    expect(result).toEqual([1, 2, 3])
  })
  all2(arr).then(result => {
    expect(result).toEqual([1, 2, 3])
  })


  all3(arr).then(result => {

    expect(result).toEqual([1, 2, 3])
  })



})