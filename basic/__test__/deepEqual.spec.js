import { expect, it } from '@jest/globals'
import { deepEqual } from '../deepEqual'


it('深度比较', () => {

  const smp = Symbol('1')

  const obj = {
    test: 1,
    test2: 2,
    [smp]: 'test',
    say: () => {
      console.log('love')
    }
  }
  const obj2 = {
    test: 1,
    test2: 2,
    [smp]: 'test',
    say: () => {
      console.log('love')
      console.log('other')
    }
  }

  const arr = [{
    test: 1,
    other: [{
      test: 1
    }]
  }]
  const arr2 = [{
    test: 1,
    other: [{
      test: 2
    }]
  }]

  const fn1 = () => {
    console.log(1)
  }
  const fn2 = () => {
    console.log('1')
  }
  const fn3 = () => {
    console.log(2)
  }
  const fn4 = () => {
    console.log(2)
  }





  expect(deepEqual(obj, obj2)).toBe(false)
  expect(deepEqual(arr, arr2)).toBe(false)
  expect(deepEqual(fn1, fn2)).toBe(false)
  expect(deepEqual(fn3, fn4)).toBe(true)


})