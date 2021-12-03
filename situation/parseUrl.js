/**
 * 

给定一个

let url = 'http://www.baidu.com/?user=anonymous&id='123'&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

要求： 得到参数转换如下结果
{
  user: 'anonymous',
  id: [ '123', '456' ],//注意这里是数组
  city: '北京',//这里要解码
  enabled: true//对于没有赋值的参数默认为true
}
 */

export function parseUrl(url) {

  const params = url.split('?')
  const result = {}
  if (params[1]) {
    const keyvalues = params[1].split('&')
    keyvalues.forEach(kv => {

      let [key, value] = kv.split('=')
      if (value && !Number.isNaN(parseInt(value))) {//是否是数字类型  数字类型直接转换
        value = Number(value)
      } else if (value) {
        value = decodeURIComponent( value.replace(/\"/g,''))//中文解码  去掉双引号
      } else {
        value = true
      }

      if (result[key]) {
        result[key] = [].concat(result[key], value)//相同可以放到一个数组,支持无限追加
      } else {
        result[key] = value
      }

    })
  }
  return result


}