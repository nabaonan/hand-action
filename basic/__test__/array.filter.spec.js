

import { expect, it, test } from '@jest/globals'
import { filter } from 'lodash';
import '../array/array.filter'



it('筛选排除所有较小的值', () => {
  function isBigEnough(element) {
    return element >= 10;
  }
  var filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough);


  expect(filtered).toEqual([12, 130, 44])
})

it('过滤 JSON 中的无效条目', () => {
  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  var invalidEntries = 0;

  function isNumber(obj) {
    return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
  }

  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }

  var arrByID = arr.myFilter(filterByID);

  console.log('Filtered Array\n', arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

  console.log('Number of Invalid Entries = ', invalidEntries);
  // Number of Invalid Entries = 5

})

it('在数组中搜索', () => {
  var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  /**
   * Array filters items based on search criteria (query)
   */
  function filterItems(query) {
    return fruits.myFilter(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

  expect(filterItems('ap')).toEqual(['apple', 'grapes'])
  expect(filterItems('an')).toEqual(['banana', 'mango', 'orange'])

})