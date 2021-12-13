export function myPromisify(fn) {


  return function (...args) {
    return new Promise((resolve, reject) => {

      fn(...args, (err, data) => {
        
        if (err) {
          reject()
        } else {
          resolve(data)
        }
      })
    })
  }
}