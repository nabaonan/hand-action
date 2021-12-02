/**
 * 寄生组合式继承
 */


export function Father(name) {
  this.name = name
  this.say = function () {
    // console.log('')
    return `爸爸说${this.name}`
  }
  this.draw = function () {
    return `${this.name}有画画天赋`
  }
}


export function Son(name, age) {
  Father.call(this, name)
  this.age = age
  this.say = function () {
    return `儿子说${this.name}`
  }

  this.study = function () {
    return `好好学习`
  }
}


Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son //恢复原型构造器指向为子类，如果不修改则指向Father，与预期不符


