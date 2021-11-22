
import { expect, test } from '@jest/globals'

import { myNew } from '../new.js'
function testnew(name) {

  this.name = name
  this.say = (msg) => {
    return msg
  }
}

function testObj(name) {
  this.name = name
  this.say = () => {
    return '这是this返回的'
  }
  return {
    name: '这是个啥',
    say: () => {
      return '这是对象返回的'
    }
  }
}



test('new', () => {
  const a = myNew(testnew, '小明')
  expect(a.say('hello')).toBe('hello')
  expect(a.name).toBe('小明')
})

test('方法返回一个对象', () => {
  const a = myNew(testObj, '小明')
  expect(a.say()).toBe('这是对象返回的')
  expect(a.name).toBe('这是个啥')
})



test('原生new', () => {
  const a = new testnew('小明')
  expect(a.say('hello')).toBe('hello')
  expect(a.name).toBe('小明')

})

test('原生new方法返回一个对象', () => {
  const a = new testObj('小明')
  expect(a.say()).toBe('这是对象返回的')
  expect(a.name).toBe('这是个啥')
})

