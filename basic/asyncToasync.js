// function toSync(fn) {

//   const it = async()
//   function* async() {


//     const result = yield fn()
//     result.then(r => {
//       it.next(r)
//     })
//   }


//   return it.next()
// }


// const result = toSync(() => {


//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(1)
//     },1000)
//   })
// })

// console.log(result)



// function getData(resolve){
//   setTimeout(()=>{
//       var data = {
//           id: '001'
//       };
//   resolve(data);
// }, 2000);
// }

// function getData2(data){
//   setTimeout(()=>{
//       console.log('Promise:' + data.id);
// }, 3000)
// }
// var promise = new Promise(getData);
// promise.then(getData2);

//Generator函数的暂停执行的效果，意味着可以把异步操作写在yield语句里面，等到调用next
// 方法时再往后执行。这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放
// 在yield语句下面，反正要等到调用next方法时再执行。所以，Generator函数的一个重要实
// 际意义就是用来处理异步操作，改写回调函数。
//Promise的写法的缺点就是各种promise实例对象跟一连串的then，代码量大、行数多，满眼
// 的promise、then、resolve看得头晕，而且每一个then都是一个独立的作用域，传递参数痛苦。
// function * async1(chain) {
//   setTimeout(() => {
//     yield 111
//       // chain.next('async1') //2.恢复async1的等待
//   }, 1300);
// }

// function async2(param,chain) {
//   setTimeout(function(){
//       chain.next(param + ' async2')  //4.恢复async2的等待
//   }, 1100);
// }

let result
var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    setTimeout(() => {
      resolve(1)
    },1000)
  });
};

var gen = function* (){
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  // console.log(f1.toString());
  // console.log(f2.toString());
  result = f2
};


function go(gen) {
  var g = gen();

  next(g.next());

  function next(res) {
    if (res.done) return value;
    res.value.then((data) => {
      next(g.next(data));
    }).catch((err) => {
      console.error(err);
      next(g.throw(err));
    });
  }
}
function* gen(){
  try {
    let a = yield new Promise();
    let b = yield new Promise();
    let c = yield new Promise();
  } catch (e) {
    console.log('e');
  }
  yield console.log('c');
}

let g = gen();
console.log(g.next())




// https://blog.csdn.net/xutongbao/article/details/78216218?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3.fixedcolumn&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3.fixedcolumn