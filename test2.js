// setTimeout(() => {
//   console.log('1')
// }, 1000);
// console.log(2)
// Promise.resolve().then(() => { 
//   console.log(3)
// })




//2 3 1





// function test() {
//   Promise.resolve().then(() => { 
//     test()
//   })
//   // setTimeout(() => {
//   //   test()
//   // }, 0);
// }
// test()






function login() {
  return new Promise((resolve) => {


    setTimeout(() => {
      resolve({
        token: '12312312'
      })
    }, 1000)
  })
}

function getUserInfo(token) {

}

login().then(result => {
  getUserInfo(token)
})

// const result = await login()
// getUserInfo(result.token)




// login(callback)

const a = '1233332221111'
function maxSubLength(str) {

  let prev = -1
  let max = 0
  let map = {}
  let result = ''
  for (let i = 0; i < str.length; i++) {

    if (map[str[i]] !== undefined) {
      prev = Math.max(prev, map[str[i]] + 1)
    }
    if (i - prev + 1 > max) {
      max = i - prev
      result = str.substring(prev, i + 1)
      console.log(max, str.substring(prev, i + 1))
      // console.log(str.substring(prev,i+1))
    } else if ((i - prev + 1) === max) {
      console.log(result, i, prev, max)

      result = [].concat(result, str.substring(prev, i + 1))

    }

    map[str[i]] = i



  }

  return result

}

console.log(maxSubLength(a))
