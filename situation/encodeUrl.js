/**
 * 给定一个链接和对象 返回一个完整的带参数的链接
 */


export function encodeUrl(url, params) {

  if (!params || Reflect.ownKeys(params).length == 0) {
    return url
  }

  if (!params instanceof Object) {
    return url
    // throw new Error('请传入对象')
  }

  let paramsUrl = []
  for (let key of Reflect.ownKeys(params)) {

    if (typeof params[key] == 'number') {
      paramsUrl.push(`${key}=${params[key]}`)

    } else if (Array.isArray(params[key])) {
      params[key].forEach(p => {
        let val
        if (typeof p === 'number') {
          val = p
        } else if (typeof p === 'string' && !Number.isNaN(parseInt(p))) {//处理将字符串的数字转换为字符串
          val = `"${p}"`
        } else {
          val = encodeURIComponent(p)
        }

        paramsUrl.push(`${key}=${val}`)
      })
    } else {
      paramsUrl.push(`${key}=${encodeURIComponent(params[key]) }`)
    }
  }
  return `${url}?${paramsUrl.join('&')}`
}