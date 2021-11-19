
function testinterator() {
  const a = {
    0: 123,
    1: 44,
    length: 2,
    // [Symbol.iterator]: function () {
    //   let index = 0;
    //   console.log(this);
    //   return {
    //     next: () => {
    //       return index < this.length
    //         ? { value: this[index++], done: false }
    //         : { done: true };
    //     }
    //   };
    // },
    [Symbol.iterator]: function* () {
      let count = 0

      while (count < this.length) {
        yield this[count++]
      }

    }
  };

  //只有实现iterator接口才可以使用扩展运算符
  const b = [...a];
  console.log(b);//[123,44]
}

testinterator()