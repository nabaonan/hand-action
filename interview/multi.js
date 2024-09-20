/**

两个大数相乘

中联

*/

 const add = (num1, num2) => {
  const max = Math.max(num1.length, num2.length);
  const arr1 = `${num1}`.padStart(max, "0").split("");
  const arr2 = `${num2}`.padStart(max, "0").split("");

  // console.log(arr1, arr2);
  const result = [];
  let pre = 0;//每次循环之后一定要重制一下进位
  for (let i = arr1.length - 1; i >= 0; i--) {
    const total = ~~arr1[i] + ~~arr2[i] + ~~pre;
    const mod = total % 10;

    pre = ~~(total / 10);

    result[i] = mod;
  }
  if (pre) {
    result.unshift(pre);
  }

  //去除前缀0
  for (let i = 0; i < result.length; i++) {
    if (~~result[i] == 0) {
      result.shift();
      i--;
    } else {
      break;
    }
  }
  return result.join("");
};

 const multi = (num1, num2) => {
  const max = Math.max(num1.length, num2.length);

  console.log("maxlength", max);

  const arr1 = `${num1}`.padStart(max, "0").split("");
  const arr2 = `${num2}`.padStart(max, "0").split("");

  // console.log(arr1, arr2);
  let result = [];
  let pre = 0; //进位
  for (let i = arr1.length - 1; i >= 0; i--) {
    const oneResult = [];
    pre = 0;
    for (let k = arr2.length - 1; k >= 0; k--) {

      // console.log("i=$1,k=$2", arr1[i], arr2[k]);
      let total = ~~arr1[i] * ~~arr2[k] + ~~pre;
      // console.log("total", total);
      const mod = total % 10;
      pre = ~~(total / 10);

      oneResult.unshift(mod);

   

      if (k == 0 && pre) {//处理边界情况
        oneResult.unshift(pre)
      }

      // console.log("!!!", oneResult);
    }
    let j = arr1.length - 1 - i;
    while (j != 0) {
      // console.log("错位补0", oneResult);
      oneResult.push("0"); //尾部补0 为了错位叠加
      j--;
    }
    result = add(result.join(""), oneResult.join("")).split("");
    // console.log("result", result);
  }

   if (result.length == 0) {
     return "0"
   } else { 
     
     return result.join("");
   }
};

// multi("0", "0");


export { 
  add,
  multi
}