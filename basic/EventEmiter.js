export class EventEmiter {

  constructor() {
    this.eventMap = {}
  }

  on(key, fn) {
    this.eventMap[key] = this.eventMap[key] ?? []
    this.eventMap[key].push(fn)

  }

  off(key, fn) {
    if (fn) {
      //如果传入fn则只删除对应的方法
      const queue = this.eventMap[key]
      if (queue) {
        const index = queue.findIndex(item => item == fn)
        console.log('!!!', index)
        if (index !== -1) {
          queue.splice(index, 1)
        }
      }
    } else {
      //删除所有这个key对应的方法
      delete this.eventMap[key]
    }
  }

  emit(key, ...args) {
    const queue = this.eventMap[key]
    if (queue) {
      queue.forEach(fn => {
        fn(...args)
      })
    } else {
      console.error('没有注册这个方法')

    }

  }
  once(key, fn) {

    const onceExcute = (...args) => {
      fn(...args)
      this.off(key)
    }
    this.on(key, onceExcute)
  }

}