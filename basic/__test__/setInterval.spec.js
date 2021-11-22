
import { expect, it, test } from '@jest/globals'
import mySetInterval from '../setInterval'

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');


it('自定义interval', () => {
  function testInter(callback) {

    mySetInterval(() => {
      callback && callback()
    }, 1000)
  }
  const callback = jest.fn();
  testInter(callback);
  // 在这个时间点，回调函数不应该被执行
  expect(callback).not.toBeCalled();
  // “快进”时间，使得所有定时器回调都被执行
  jest.advanceTimersByTime(10000);//快进10s钟
  // 到这里，所有的定时器回调都应该被执行了！
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(10);//应该调用10次
})

it('自定义清除计时器', () => {
  function testInter(callback) {
    return mySetInterval(() => {
      callback && callback()
    }, 1000)
  }
  const callback = jest.fn();
  const clearInter = testInter(callback);
  // 在这个时间点，回调函数不应该被执行

  // “快进”时间，使得所有定时器回调都被执行
  jest.advanceTimersByTime(1900);
  expect(callback).toHaveBeenCalledTimes(1);
  clearInter()
  jest.advanceTimersByTime(2000);
  expect(callback).toHaveBeenCalledTimes(1);//清除后再也不会增
})





it('原生interval', () => {
  function testInter(callback) {

    setInterval(() => {
      callback && callback()
    }, 1000)
  }
  const callback = jest.fn();
  testInter(callback);
  // 在这个时间点，回调函数不应该被执行
  expect(callback).not.toBeCalled();
  // “快进”时间，使得所有定时器回调都被执行
  jest.advanceTimersByTime(10000);
  // 到这里，所有的定时器回调都应该被执行了！
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(10);
})

it('原生清除计时器', () => {
  function testInter(callback) {
    return setInterval(() => {
      callback && callback()
    }, 1000)
  }
  const callback = jest.fn();
  const inter = testInter(callback);
  // 在这个时间点，回调函数不应该被执行

  // “快进”时间，使得所有定时器回调都被执行
  jest.advanceTimersByTime(1900);


  expect(callback).toHaveBeenCalledTimes(1);
  clearInterval(inter)
  jest.advanceTimersByTime(2000);
  expect(callback).toHaveBeenCalledTimes(1);//清除后再也不会增
})