

import { expect, it } from '@jest/globals'
import '../array/array.find'

it('用对象的属性查找数组里的对象', () => {


  var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

  function findCherries(fruit) {
    return fruit.name === 'cherries';
  }

  expect(inventory.myFind(findCherries)).toEqual({ name: 'cherries', quantity: 5 })

})
it('用对象的属性查找数组里的对象', () => {

  function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }

  expect([4, 6, 8, 12].myFind(isPrime)).toEqual(undefined)
  expect([4, 5, 8, 12].myFind(isPrime)).toEqual(5)



})

it('当在回调中删除数组中的一个值时', () => {

  // Declare array with no element at index 2, 3 and 4
  var a = [0, 1, , , , 5, 6];

  // Shows all indexes, not just those that have been assigned values
  a.myFind(function (value, index) {
    console.log('Visited index ' + index + ' with value ' + value);
  });

  // Shows all indexes, including deleted
  a.myFind(function (value, index) {

    // Delete element 5 on first iteration
    if (index == 0) {
      console.log('Deleting a[5] with value ' + a[5]);
      delete a[5];  // 注：这里只是将a[5]设置为undefined，可以试试用a.pop()删除最后一项，依然会遍历到被删的那一项
    }
    // expect().to
    // Element 5 is still visited even though deleted
    console.log('Visited index ' + index + ' with value ' + value);
  });


})
