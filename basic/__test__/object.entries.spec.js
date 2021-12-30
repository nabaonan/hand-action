

import { expect, it } from '@jest/globals'

import '../object.entries'

it('测试', () => { 

  const obj = {

    test: 1,
    test2:2
  }

  expect(obj.myentries()).toEqual([['test',1],['test2',2]])





})


it('原生', () => { 

  const obj = {

    test: 1,
    test2:2
  }

  console.log(Object.entries(obj))
  expect(Object.entries(obj)).toEqual([['test',1],['test2',2]])





})