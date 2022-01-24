

/**
 * 实现一个方法使所有异步函数顺序执行（reduce）
 * @param {*} arr  异步函数的数组
 */
export function all(arr) {
  return new Promise(resolve => {
    const result = arr.reduce(async prev => {
      return await prev()
    })
    resolve(result)

  })
}


/**
 * for await 语法
 * @param {*} arr 
 * @returns 
 */
export function all1(arr) {

  return new Promise(async resolve => {

    const result = []
    for await (const p of arr) {
      result.push(p)
    }
    resolve(result)
  })

}


/**
 * generator函数
 * @param {*} arr 
 * @returns 
 */
export function all2(arr) {


  function* next() {

    for (let i = 0; i < arr.length; i++) {
      yield arr[i]()
    }


  }
  const n = next()
  const result = []



  return new Promise(resolve => {

    function co() {
      const p = n.next()
      console.log(p)
      if (p && !p.done) {

        p.value.then(r => {
          result.push(r)

          co()

        })
      } else {
        resolve(result)
      }
    }
    co()

  })
}

/**
 * 递归
 * @param {*} arr 
 * @returns 
 */

export function all3(arr) {

  return new Promise(resolve => {

    const result = []
    const getResult = () => {

      if (arr.length) {
        const fn = arr.shift()

        fn().then(r => {
          result.push(r)
          getResult()

        })
      } else {
        resolve(result)
      }
    }
    getResult()

  })
}