/**
 * // by一面20211228
 * 捕获setTime的异常
 * 
 */


//暂时不知道
async function main() {

  return new Promise(resolve => { 
    setTimeout(() => {
      throw new Error('抛出一个异常')
    }, 100)

  })

}

async function test() { 

  try {
    await main()
  } catch (e){ 
    console.log('###',e)
  }
}


// test()


try {

  new Promise(resolve => {
    throw new Error()
  }).catch(e => {
    console.log('eeeee')
  })
} catch(e) { 
console.log('error')
}