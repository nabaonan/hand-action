
function test2() {
  return async(function* () {
    yield new Promise((resolve) => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 100);
    });
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 10);
    });
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("reject");
        reject("44444");
        // throw Error('跑错')
      }, 100);
    });
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("3");
        resolve();
      }, 1000);
    });
  });
}

function async(genF) {
  return new Promise((resolve, reject) => {
    const gen = genF();

    const step = (nextF) => {
      let next;
      try {
        next = nextF();
      } catch (err) {
        reject(err);
      }


      if (next && next.done) {
        console.log("完成了");
        return resolve(next.value);
      }

      Promise.resolve(next && next.value)
        .then(function (value) {
          step(() => {
            return gen.next(value);
          });
        })
        .catch((err) => {
          console.log("报错");
          step(() => {
            return gen.throw(err);
          });
        });
    };
    //
    step(() => {
      return gen.next();
    });
  });
}
test2()
  .then(() => {
    console.log("完成了");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
