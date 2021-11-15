const p = new Promise(() => {
  console.log('123')
})

console.log(JSON.stringify(p))