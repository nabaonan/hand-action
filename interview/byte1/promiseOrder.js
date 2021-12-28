
/**
 * by一面20211228
 */
new Promise(resolve => { 
  console.log(1)
  setTimeout(() => { 
    console.log(2)
  }, 0)
  resolve()
  Promise.resolve().then(()=>console.log(3))
}).then(() => { 
  console.log(4)
})

console.log(5)

//15342