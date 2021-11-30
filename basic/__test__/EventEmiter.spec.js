import { expect, it, test } from '@jest/globals'

import { EventEmiter } from '../EventEmiter'

it('测试发射器', () => {


  const emitter = new EventEmiter()

  let count = 0
  let other = 0

  const test1 = (a, b, c) => {
    count++
  }

  emitter.on('test1', test1)

  emitter.on('test1', (a, b, c) => {
    count++
    other++

  })

  emitter.emit('test1')

  expect(count).toEqual(2)
  expect(other).toEqual(1)
  emitter.off('test1', test1)
  emitter.emit('test1')
  expect(count).toEqual(3)
  expect(other).toEqual(2)
  //测试删除绑定
  emitter.off('test1')
  emitter.emit('test1')
  expect(count).toEqual(3)
  expect(other).toEqual(2)

  //测试一次调用
  emitter.once('test2', () => {
    count++
  })

  emitter.emit('test2')
  expect(count).toEqual(4)

  emitter.emit('test2')
  expect(count).toEqual(4)

})