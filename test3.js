

async function test() {
  try {
    await setTimeout(() => {
      throw new Error('跑错误')
    }, 0)
  } catch (error) {
    console.log('error', error)
  }
}

 test()





// function a() {

//   return new Promise((resolve, reject) => { setTimeout(() => { reject(1); }) })
// }

// try { await a(); } catch (e) { console.log('error', e); } console.log(111);//outputerror 1111