// 64匹马，8个赛道，
// 不知道比赛的时间
// 用最少的次数得出前4匹最快的马


class horse {
  time
  group
  sort
  constructor(time, group) {
    this.time = time
    this.group = group
  }

  setTime(time) {
    this.time = time
  }
  setSort(sort) {
    this.sort = sort
  }
  setGroup(group) {
    this.group = group
  }
}

function getFast() {

  const all = []
  const groups = []


  for (let i = 0; i < 64; i++) {

    const h = new horse(Math.random()*1000, i % 8)
    all.push(h)
    groups[i % 8] = groups[i % 8] || []
    groups[i % 8].push(h)
  }



  const map = {}
  let first = []
  for (let i = 0; i < 8; i++) {
    groups[i].sort((itemA, itemB) => itemA.time - itemB.time)
    groups[i].forEach((item, index) => {
      item.sort = index + 1
    })
    map[i] = groups[i].slice(0, 4)
    first.push(groups[i][0])
  }

  first.sort((itemA, itemB) => itemA.time - itemB.time)
 
  first = first.slice(0, 4)

  let result = first.map(item => `${item.group}-${item.sort}`).join('#').toString()

  console.log('比较前', result)

  let cur
  function compare() {
    if (result === cur) {
      return
    }
    for (let i = 0; i < 4; i++) {
      if (map[first[i].group][first[i].sort + 1]) { 
        console.log('走这里')
        first.push(map[first[i].group][first[i].sort + 1])

        first.sort((itemA, itemB) => itemA.time - itemB.time)
        first = first.slice(0, 4)
    
        cur = first.map(item => `${item.group}-${item.sort}`).join('#').toString()
        if (cur !== result) {
          first.push(map[first[i].group][first[i].sort + 1])
        }
      }
     
    }
  
  }
  compare()



  console.log('比较后', result)

  //穷举结果
  all.sort((itemA, itemB) => itemA.time - itemB.time)
  console.log(map)
  console.log(all.slice(0, 4))
  console.log('真实', all.slice(0, 4).map(item => `${item.group}-${item.sort}`).join('#').toString())











}

getFast()