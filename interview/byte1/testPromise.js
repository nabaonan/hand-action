

//by一面20211228
//求输出结果？
Promise.resolve('foo').then(Promise.resolve('bar')).then(function (result) { 
  console.log(result)
})
//结果是foo   