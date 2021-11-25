import { expect, it } from '@jest/globals';

import { throttle } from '../throttle'


it("测试节流", () => {


  let count = 0
  function test1() {
    count++
  }



  const th = throttle(test1, 100)


  th()
  th()
  th()
  th()
  th()
  setTimeout(() => {
    th()
    th()
    th()
    expect(count).toEqual(1)
  }, 120)

  setTimeout(() => {
    th()
    th()
    th()
    th()
    expect(count).toEqual(2)
  }, 240)


})