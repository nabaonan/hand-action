/**
 * 题目描述：JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
 */

function limit(tasks, limit) {

  let cur = 0
  const addTask = () => {



    if (cur < limit && tasks.length != 0) {
      const task = tasks.shift()
      Promise.resolve(task()).then((r) => {
        console.log('返回结果', r)
        cur--
        addTask()
      })

      cur++
    } else {
      console.log('当前并发数', cur)
      console.log(`限制并发为${limit}`)
      return
    }
  }


  for (let i = 0; i < tasks.length; i++) {
    addTask()
  }




}



//测试
const tasks = [() => new Promise(resolve => {
  setTimeout(() => {
    console.log(1)
    resolve()
  }, 1000)
}), () => new Promise(resolve => {
  setTimeout(() => {
    console.log(2)
    resolve()
  }, 2000)
}), () => new Promise(resolve => {
  setTimeout(() => {
    console.log(3)
    resolve()
  }, 2000)
}), () => new Promise(resolve => {
  setTimeout(() => {
    console.log(4)
    resolve()
  }, 1000)
})]

const tasks2 = [() => {
  console.log(1)
  return 1
},
() => {
  console.log(2)
  return 2
},
() => {
  console.log(3)
  return 3
}, () => {
  console.log(4)
  return 4
}, () => {
  console.log(5)
  return 5
}, () => {
  console.log(6)
  return 6
}]

// limit(tasks, 2)

limit(tasks2,2)