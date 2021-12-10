

export function objMaxLevel(obj) {
  let maxLevel = 0


  const refs = []
  function getLevel(obj, level) {
    if (typeof obj == 'object' && obj !== null) {

      if (!refs.includes(obj)) {

        level += 1
        maxLevel = Math.max(maxLevel, level)
        refs.push(obj)
        for (let key of Object.keys(obj)) {
          getLevel(obj[key], level)
        }
      }
    } else {
      return level
    }


  }

  getLevel(obj, 0)

  return maxLevel

}