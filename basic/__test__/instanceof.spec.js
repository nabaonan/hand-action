
import { expect, test } from '@jest/globals'
import { myInstanceof } from '../instanceof'
class Father {
  constructor(name) {
    this.name = name
  }
  hit() {
    return '爱抚'
  }
}

class Son extends Father {
  constructor(name) {
    super(name)
  }
  cry() {
    return '大哭'
  }
}


test('my instanceof', () => {
  const s = new Son('小明')
  expect(myInstanceof(s, Father)).toBe(true)
  expect(myInstanceof(s, Son)).toBe(true)
})


test('原生 instanceof', () => {
  const s = new Son('小明')
  expect(s instanceof Father).toBe(true)
  expect(s instanceof Son).toBe(true)
})