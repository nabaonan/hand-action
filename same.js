


const listFoo = [1,4,5,6,8,12,32];
const listBar = [2,5,8,13,21,32,50];

const sortList = (listA, listB) => {

  const result = []
  // listA.forEach(item1 => {
    
  //   if (listB.includes(item1)) {
  //     result.push(item1)
  //   }
  // });

  let i = 0;j=0
  while (i < listA.length && j < listB.length) {
    if (listA[i] == listB[j]) {
      result.push(listA[i])
      i++;j++
    } else if (listA[i] < listB[j]) {
      i++
    } else {
      j++
    }

  }


  return result

}
console.log(sortList(listFoo, listBar))
// [ 5, 8, 32 ]