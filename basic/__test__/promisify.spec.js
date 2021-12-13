import { myPromisify } from '../promisify'




import { expect, it } from '@jest/globals';


it('测试', async () => {



  let readFile = myPromisify((args, callback) => {
    setTimeout(() => {
      console.log(123)
      callback(null, 123)
    }, 100)
  })

  let readFile2 = myPromisify((args, callback) => {
    setTimeout(() => {
      console.log(123)
      callback('error', 123)
    }, 400)
  })



  const result = await readFile('./addEvent.html')

  expect(result).toEqual(123)


  try {
    const result2 = await readFile2('./addEvent.html')
  } catch (error) {
    console.log(error)
  }


})



