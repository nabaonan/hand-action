import { expect, it } from '@jest/globals';
import { diff } from '../array/array.diff';

it('筛选数组差异项', () => {

  const arr1 = [1, 2, 3]
  const arr2 = [2, 3, 4]

  const arr3 = [{ id: 1 }, { id: 2 }, { id: 3 },]
  const arr4 = [{ id: 2 }, { id: 3 }, { id: 5 },]

  expect(diff(arr1, arr2)).toEqual([1])
  expect(diff(arr3, arr4)).toEqual([{
    id: 1
  }])


})