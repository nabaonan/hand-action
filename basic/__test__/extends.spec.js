import { expect, it } from '@jest/globals';
import { Son } from '../extends';

it('测试寄生组合式继承', () => {
  const s = new Son('小明')
  expect(s.say()).toEqual('儿子说小明')//覆盖父类方法
  expect(s.study()).toEqual('好好学习')//子类自身方法
  expect(s.draw()).toEqual('小明有画画天赋')//继承父类方法  使用子类属性
  expect(s.constructor).toEqual(Son)//测试构造器指向

})