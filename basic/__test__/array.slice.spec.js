import { expect, it } from '@jest/globals';

import '../array/array.slice'

it('返回现有数组的一部分', () => {

  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  var citrus = fruits.mySlice(1, 3);
  expect(citrus).toEqual(['Orange', 'Lemon'])
})


it('类数组', () => {
  function list() {
    return Array.prototype.mySlice.call(arguments);
  }
  var list1 = list(1, 2, 3); // [1, 2, 3]
  expect(list1).toEqual([1, 2, 3])
})


it('负数', () => {
  const arr = [0, 1, 2]
  expect(arr.mySlice(-2, -1)).toEqual([1])
})


it('边界错误', () => {
  const arr = [0, 1, 2]
  expect(arr.mySlice(-1, -2)).toEqual([])
})

it('原始边界错误', () => {
  const arr = [0, 1, 2]
  expect(arr.slice(-1, -2)).toEqual([])
})

it('原始类数组', () => {

  function list() {
    return Array.prototype.slice.call(arguments);
  }

  var list1 = list(1, 2, 3); // [1, 2, 3]
  expect(list1).toEqual([1, 2, 3])
})

