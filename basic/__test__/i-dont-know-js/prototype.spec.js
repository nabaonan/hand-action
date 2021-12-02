import { expect, test, it } from '@jest/globals'
import { Son, Father } from '../../extends'

/**
 * 测试原型链
 * 
 * 参考：https://segmentfault.com/a/1190000020523656?utm_source=tag-newest
 * https://juejin.cn/post/6844903989088092174
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */

it('测试原型', () => {




  expect(Object.prototype.__proto__ === null).toEqual(true)
  expect(Function.prototype.__proto__ === Object.prototype).toEqual(true)
  expect(Object.__proto__ === Function.prototype).toEqual(true)//Object实际上是个函数，所以他的原型应该是函数的原型
  expect(Function.__proto__ === Function.prototype).toEqual(true) // Function也是一个内置函数，它的原型也是指向Function.prototype

  function Foo() {

  }

  const f = new Foo()

  expect(f.__proto__ === Foo.prototype).toEqual(true)
  expect(Foo.prototype.__proto__ === Object.prototype).toEqual(true)//原型对象也是对象，所以原型对象的__proto__指向对象的原型
  expect(typeof Foo.prototype.__proto__).toEqual('object')
  expect(Foo.prototype.constructor === Foo).toEqual(true)
  expect(Foo.__proto__ === Function.prototype).toEqual(true)
  expect(Function.prototype.__proto__ === Object.prototype).toEqual(true)
  expect(Object.prototype.__proto__ === null).toEqual(true)


  class MyFather { }
  class MySon extends MyFather { }


  expect(MyFather.prototype.constructor === MyFather).toEqual(true)
  expect(MyFather.prototype.__proto__ === Object.prototype).toEqual(true)
  expect(MySon.prototype.__proto__ === MyFather.prototype).toEqual(true)


  const s = new Son()
  expect(s.__proto__ === Son.prototype).toEqual(true)
  expect(Son.prototype.__proto__ === Father.prototype).toEqual(true)
  expect(Father.prototype.prototype === undefined).toEqual(true)//原型对象上没有protottype属性
  expect(Father.prototype.__proto__ === Object.prototype).toEqual(true)



})


it('原型', () => {

  let anotherObj = {
    a: 2,
    b: {
      c: 3
    }
  }

  let obj = Object.create(anotherObj)
  expect(obj.a).toEqual(2)

  expect(obj.hasOwnProperty('a')).toEqual(false)
  expect(anotherObj.hasOwnProperty('a')).toEqual(true)
  obj.a++//这里只对obj的元素+1，相当于obj.a = obj.a+1   而obj.a不受影响因为是基本变量
  expect(obj.a).toEqual(3)//
  expect(anotherObj.a).toEqual(2)

  obj.b.c++//如果对父类的属性是引用类型，变更就会生效

  expect(obj.b.c).toEqual(4)
  expect(anotherObj.b.c).toEqual(4)




})

it('测试原型', () => {

  function Foo() { }

  expect(Object.getPrototypeOf(Foo)).toEqual(Foo.__proto__)//getPrototypeOf 实际上就是相当于调用传入参数的__proto__属性
  expect(Foo.__proto__).toEqual(Function.prototype)
})


it('new调用和直接调用区别', () => {

  function Foo() {

  }

  const a = new Foo()//通过构造函数调用，没有返回值的话直接返回一个空对象
  const b = Foo()//直接执行，没有返回值就是undefined
  expect(a).toEqual({})
  expect(b).toEqual(undefined)



})

it('自定义更改constructor指向', () => {

  function Foo() { }
  const a = new Foo()
  expect(a.constructor).toEqual(Foo)//因为a的__proto__指向的是Foo.prototype,这个原型对象上有个constructor属性指向Foo，所以a的constructor是Foo


  function Foo2() { }
  Foo2.prototype = {}//更改一下原型对象，指向一个空对象，
  const b = new Foo2()
  expect(b.constructor === Object).toEqual(true)//因为原型对象是空对象，并且没有constructor属性，所以要继续查找__proto__,空对象的__proto__指向的是Object.prototype,他的constructor是Object所以返回的就是object



  function Foo3() { }
  
//自定义改变constructor属性
  Object.defineProperty(Foo3.prototype,'constructor', {
    enumerable: false,//constructor属性是不可枚举的
    writable: true,
    configurable: true,
    value: Foo//随意更改constructor的值
  })

  const c = new Foo3()

  expect(c.constructor).toEqual(Foo)


})


it('Object create', () => {
  const a = Object.create(null)//原型是空的，没有__proto__,所以和任何对象使用instanceOf比较都是false
  const b = new Object()
  expect(a instanceof Object).toEqual(false)
  // a instanceof b 
})
 

it('测试直接执行的instanceof', () => {
  
  function Foo() {
    
    return {
      test: 1
    }
  }

  const a = Foo()
  const b= new Foo()

  expect(a instanceof Foo).toEqual(false)
  expect(a instanceof Object).toEqual(true)
  expect(b instanceof Foo).toEqual(false)
  expect(b instanceof Object).toEqual(true)

})