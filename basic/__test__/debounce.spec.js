import { expect, it } from '@jest/globals';

import { debounce } from '../debounce'
it('防抖', () => {


  let count = 1
  let total = 0
  function test(...args) {
    count += 1
    total = args.reduce((result, cur) => result += cur, 0)
  }


  const delay = debounce(test)
  delay(2)
  delay(2)
  delay(2)
  delay(2)
  delay(2, 3)//只有这次调用

  //由于防抖里面用了setTimeout，所以此处测试也要等延迟执行完了之后测
  setTimeout(() => {
    expect(total).toEqual(5)
    expect(count).toEqual(2)
  })

})
