
import { describe, expect, test } from '@jest/globals'

import MyPromise from '../MyPromise'

test('基本使用', () => {
  const p = new MyPromise((resolve, reject) => {
    resolve('成功');
  });
  p.then((value) => {
    expect(value).toBe('成功')
  });
})


//测试用例2  演示回调

test('延迟回调', () => {
  const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功');
    }, 1000);
  });
  expect(p).resolves.toBe('成功');
})


test('多个then', () => {
  const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  p.then((value) => {
    return 2
  });
  p.then((value) => {
    return 3
  });
  expect(p).resolves.toEqual(1)
})

test('链式调用', () => {
  const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
      // console.log('执行内部')
    }, 100);
  });

  const p1 = new Promise((resolve) => {
    resolve(11);


  });
  p.then((value) => {

    expect(value).toEqual(1)

    return 2;
  })
    .then((value) => {

      expect(value).toEqual(2)
      return 3
    })
    .then((value) => {
      // console.log('执行内部')
      expect(value).toEqual(3)
      return 4
    })



})


test('all', () => {

  const p1 = new MyPromise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 100)
  })

  const p2 = new MyPromise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 300)
  })

  expect(MyPromise.all([p1, p2])).resolves.toEqual([1, 2])

})

