
let url = 'http://www.baidu.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
function parse(url) {
  
  let result = {}

  const content = url.split('?')[1]

  const params = content.split('&')
  params.forEach(p => {
    const [key, value] = p.split('=')
    if (result[key]) {
      result[key] = [result[key], value]
    } else {
      result[key] = decodeURIComponent(value)
      
    }
  })
  return result
}
console.log(parse(url))