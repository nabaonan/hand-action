import { expect, it } from '@jest/globals'

import '../string.slice'
it('测试', () => { 

  var str1 = 'The morning is upon us.' // str1 的长度 length 是 23。
   expect(str1.mySlice(1, 8)).toEqual('he morn')
   expect(str1.mySlice(4, -2)).toEqual('morning is upon u')
   expect( str1.mySlice(12)).toEqual('is upon us.')
   expect(str1.mySlice(30)).toEqual('')
//     str3 = 
//     str4 =
//     str5 = 
// console.log(str2); // 输出：
// console.log(str3); // 输出：
// console.log(str4); // 输出：
// console.log(str5); // 输出：""


})