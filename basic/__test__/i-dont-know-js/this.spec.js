
import { expect, test, it } from '@jest/globals'



it("this全局指向问题", () => {
  "use strict";
  var a = 10;
  function foo() {
   //开启了严格模式，只是说使得函数内的this指向undefined，它并不会改变全局中this的指向。因此this1中打印的是undefined，而this2还是window对象。
    
    //另外，它也不会阻止a被绑定到window对象上。




    console.log('this1', this)//'this1' undefined
    console.log(window.a)//10
    console.log(this.a)//Uncaught TypeError: Cannot read property 'a' of undefined
  }
  console.log(window.foo)//f foo() {...}
  
  console.log('this2', this)//'this2' Window{...}
  foo();

})
