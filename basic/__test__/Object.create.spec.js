
import { expect, test } from '@jest/globals'
import { create } from '../Object.create.js'

function myFn() {
  this.name = 'fn'
}


class myClass {
  name = 'class'
}

const myObj = {
  name: 'obj'
}


test('自定义create', () => {

  const a = create(myClass.prototype)
  const b = create(myFn.prototype)
  const c = create(myClass.prototype)


  expect(Object.getPrototypeOf(a)).toEqual(myClass.prototype)
  expect(Object.getPrototypeOf(b)).toEqual(myFn.prototype)
  expect(Object.getPrototypeOf(c)).toEqual(Object.getPrototypeOf(myObj))
  expect(Object.getPrototypeOf(c)).toEqual(myObj.__proto__)//对象字面量的原型应该还是对象字面量自身的原型对象
  expect(Object.getPrototypeOf(null)).toEqual(myObj.__proto__)
})

test('原生create', () => {

  const a = Object.create(myClass.prototype)
  const b = Object.create(myFn.prototype)
  const c = Object.create(myClass.prototype)


  expect(Object.getPrototypeOf(a)).toEqual(myClass.prototype)
  expect(Object.getPrototypeOf(b)).toEqual(myFn.prototype)
  expect(Object.getPrototypeOf(c)).toEqual(Object.getPrototypeOf(myObj))
  expect(Object.getPrototypeOf(c)).toEqual(myObj.__proto__)//对象字面量的原型应该还是对象字面量自身的原型对象
})