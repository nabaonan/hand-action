
import { expect, it, test } from '@jest/globals'
import '../array.reduce'

/**
 * 测试用例 部分来自 mdn 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

it('自定义reduce累加', () => {
  const arr = [1, 2, 3, 4]
  const result = arr.myReduce((result, cur) => {
    return cur += result
  }, 0)
  expect(result).toEqual(10)
})


it('自定义去重', () => {
  // 数组去重
  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
  let myOrderedArray = myArray.myReduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, [])

  expect(myOrderedArray).toEqual(['a', 'b', 'c', 'e', 'd'])
})

it('自定义初始值', () => {
  // friends - 对象数组
  // where object field "books" - list of favorite books
  var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];

  var allbooks = friends.myReduce(function (prev, curr) {
    return [...prev, ...curr.books];
  }, ['Alphabet']);

  expect(allbooks).toEqual([
    'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
    'Romeo and Juliet', 'The Lord of the Rings',
    'The Shining'
  ])
})


it('按顺序执行promise', () => {
  /**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
  function runPromiseInSequence(arr, input) {
    return arr.myReduce(
      (promiseChain, currentFunction) => promiseChain.then(currentFunction),
      Promise.resolve(input)
    );
  }

  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5);
    });
  }

  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2);
    });
  }

  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
    return a * 3;
  }

  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4);
    });
  }

  const promiseArr = [p1, p2, f3, p4];
  runPromiseInSequence(promiseArr, 10)
    .then((value) => {
      expect(value).toEqual(1200)
    });
})





it('原始reduce', () => {
  const arr = [1, 2, 3, 4]
  const result = arr.reduce((result, cur) => {
    return cur += result
  }, 0)
  expect(result).toEqual(10)
})


it('原始去重', () => {
  // 数组去重
  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
  let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, [])

  expect(myOrderedArray).toEqual(['a', 'b', 'c', 'e', 'd'])
})
