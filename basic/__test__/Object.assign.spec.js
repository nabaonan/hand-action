
import { expect, it } from '@jest/globals'
import '../Object.assign'

/**
 * 测试用例  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

it('复制一个对象', () => {
  const obj = { a: 1 };
  const copy = Object.myAssign({}, obj);
  expect(copy).toEqual({
    a: 1
  })
})

it('深拷贝的问题', () => {
  function myTest() {

    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = Object.myAssign({}, obj1);
    expect(obj2).toEqual({ a: 0, b: { c: 0 } })

    obj1.a = 1;

    expect(obj1).toEqual({ a: 1, b: { c: 0 } })
    expect(obj2).toEqual({ a: 0, b: { c: 0 } })

    obj2.a = 2;
    expect(obj1).toEqual({ a: 1, b: { c: 0 } })
    expect(obj2).toEqual({ a: 2, b: { c: 0 } })

    obj2.b.c = 3;
    expect(obj1).toEqual({ a: 1, b: { c: 3 } })
    expect(obj2).toEqual({ a: 2, b: { c: 3 } })
  }

  myTest();

})

it('合并对象', () => {
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3 };

  const obj = Object.myAssign(o1, o2, o3);
  expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  expect(o1).toEqual({ a: 1, b: 2, c: 3 })
})

it('合并具有相同属性的对象', () => {
  const o1 = { a: 1, b: 1, c: 1 };
  const o2 = { b: 2, c: 2 };
  const o3 = { c: 3 };

  const obj = Object.myAssign({}, o1, o2, o3);
  expect(obj).toEqual({ a: 1, b: 2, c: 3 })

})

//暂时没有通过！！！
it('拷贝 symbol 类型的属性', () => {
  const o1 = { a: 1 };

  const o2 = { [Symbol('foo')]: 2 };

  const obj = Object.myAssign({}, o1, o2);
  expect(obj).toEqual("{ a: 1, [Symbol('foo')]: 2 }")
  // console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
  // Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

})

it('异常打断后续拷贝任务', () => {

  try {

    const target = Object.defineProperty({}, "foo", {
      value: 1,
      writable: false
    }); // target 的 foo 属性是个只读属性。

    Object.myAssign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
    // TypeError: "foo" is read-only
    // 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

    expect(target.bar).toEqual(2) // 2，说明第一个源对象拷贝成功了。
    expect(target.foo2).toEqual(3) // 3，说明第二个源对象的第一个属性也拷贝成功了。
    expect(target.foo).toEqual(1) // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
    expect(target.foo3).toEqual(undefined) // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
    expect(target.baz).toEqual(undefined) // undefined，第三个源对象更是不会被拷贝到的。
  } catch (error) {
    console.error(error)
  }

})


it('拷贝访问器', () => {
  const obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };

  let copy = Object.myAssign({}, obj);
  expect(copy).toEqual({ foo: 1, bar: 2 })//copy.bar的值来自obj.bar的getter函数的返回值

  // 下面这个函数会拷贝所有自有属性的属性描述符
  function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});

      // Object.assign 默认也会拷贝可枚举的Symbols
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }

  copy = completeAssign({}, obj);
  expect(copy).toEqual({ foo: 1, get bar() { return 2 } })
})