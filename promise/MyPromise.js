

class MyPromise {

  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECT = 'reject'
  value
  error

  // onResolve
  // onReject

  onResolveQueue = []
  onRejectQueue = []



  status = MyPromise.PENDING
  constructor(excute) {

    excute(this.resolve, this.reject)
  }

  //箭头函数指向类创建出的对象，不取决于调用时候的对象
  resolvePromise = (thenablePromise, resolve, reject) => {
    setTimeout(() => {//异步执行，

      // 判断是否是一个promise对象
      if (thenablePromise instanceof MyPromise) {
        thenablePromise.then(resolve, reject);
      } else {
        // 如果不是promise对象，则直接返回值
        resolve(thenablePromise);
      }
    }, 0)

  }

  then(onResolve, onReject) {


    return new MyPromise((resolve, reject) => {

      if (this.status === MyPromise.FULFILLED) {
        const resolveValue = onResolve(this.value)
        this.resolvePromise(resolveValue, resolve, reject)//不太理解
      } else if (this.status === MyPromise.REJECT) {
        const errorValue = onReject(this.error)
        this.resolvePromise(errorValue, resolve, reject)
      } else {
        this.onResolveQueue.push(() => {
          const resolveValue = onResolve(this.value)
          this.resolvePromise(resolveValue, resolve, reject)//不太理解
        })
        this.onRejectQueue.push(() => {
          const errorValue = onReject(this.error)
          this.resolvePromise(errorValue, resolve, reject)
        })

      }



    })

  }

  resolve = (value) => {

    if (this.status == MyPromise.PENDING) {

      this.status = MyPromise.FULFILLED
      this.value = value

      while (this.onResolveQueue.length) {
        this.onResolveQueue.shift()(this.value)
      }
      // this.onResolve && this.onResolve(this.value)
    }
  }

  reject = (error) => {
    if (this.status == MyPromise.PENDING) {
      this.status = MyPromise.REJECT
      this.error = error
      while (this.onRejectQueue.length) {
        this.onRejectQueue.shift()(this.value)
      }
      // this.onReject && this.onReject(this.error)
    }
  }

  static resolve(value) {

    if (value instanceof MyPromise) {
      return value;
    }

    else {
      return new MyPromise((resolve) => {
        resolve(value);
      })
    }
  }

  static race = (arr) => {
    return new MyPromise((resolve, reject) => {
      arr.forEach(p => {

        if (p instanceof MyPromise) {
          p.then((r) => {
            resolve(r)
          })
        } else {
          MyPromise.resolve(p()).then(resolve)
          // const r = p()
          // resolve(r)
        }
       
      })
    })
  }


  static all = (arr) => {


    const total = arr.length
    return new MyPromise((resolve, reject) => {

      const result = []
      let count = 0

      try {
        arr.forEach((p, index) => {
          MyPromise.resolve(p).then(r => {
            count++;
            result[index] = r
            if (count === total) {
              resolve(result)
            }
          })
        })

      } catch (error) {
        reject(error)
      }


    })
  }

}

//问题：     class定义的方法使用箭头函数和不使用箭头函数this指向


export default MyPromise