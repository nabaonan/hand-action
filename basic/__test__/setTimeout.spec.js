
import { expect, it, test } from '@jest/globals'
import mySetTimeout from '../setTimeout'

const temp = {
  mySetTimeout: mySetTimeout
}


//这个必须加，否则验证不通过
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest.spyOn(temp, 'mySetTimeout');

test('自定义settimeout', () => {

  const { mySetTimeout } = temp
  //这里callback是jest提供的回调
  function testTimeout(callback) {
    mySetTimeout(() => {
      callback && callback();
    }, 1000);
  }
  const callback = jest.fn();
  testTimeout(callback)
  expect(callback).not.toBeCalled();
  jest.runAllTimers();
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
})


it('自定义关闭', () => {
  //这里callback是jest提供的回调

  function testTimeout(callback) {
    return mySetTimeout(() => {
      callback && callback();
    }, 1000);
  }
  const callback = jest.fn();
  const clearTimeout = testTimeout(callback)
  jest.advanceTimersByTime(900);//快进900毫秒
  clearTimeout()//在时间截止之前关闭
  expect(callback).not.toBeCalled();
})


test('原始settimeout', () => {

  //这里callback是jest提供的回调
  function testTimeout(callback) {
    setTimeout(() => {
      callback && callback();
    }, 1000);
  }
  const callback = jest.fn();
  testTimeout(callback)
  expect(callback).not.toBeCalled();
  jest.runAllTimers();
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
})



it('原始关闭', () => {
  //这里callback是jest提供的回调

  function testTimeout(callback) {
    return setTimeout(() => {
      callback && callback();
    }, 1000);
  }
  const callback = jest.fn();
  const timer = testTimeout(callback)
  expect(callback).not.toBeCalled();
  clearTimeout(timer)
  expect(callback).not.toBeCalled();
})