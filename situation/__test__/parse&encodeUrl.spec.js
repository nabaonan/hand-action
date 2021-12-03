
import { expect, it } from '@jest/globals'
import { encodeUrl } from '../encodeUrl';

import { parseUrl } from '../parseUrl'

it('测试parseUrl', () => {
  let url = 'http://www.baidu.com/?user=anonymous&id="123"&id=456&id=test&city=%E5%8C%97%E4%BA%AC&enabled';
  const result = parseUrl(url)
  expect(result).toEqual({
    user: 'anonymous',
    id: ['123', 456, 'test'],//注意这里是数组
    city: '北京',//这里要解码
    enabled: true//对于没有赋值的参数默认为true
  })
})


it('测试encodeUrl', () => {
  const url = encodeUrl('http://www.baidu.com/', {
    user: 'anonymous',
    id: ['123', 456, 'test'],//注意这里是数组
    city: '北京',//这里要解码
    enabled: true//对于没有赋值的参数默认为true
  })
  expect(url).toEqual('http://www.baidu.com/?user=anonymous&id="123"&id=456&id=test&city=%E5%8C%97%E4%BA%AC&enabled=true')

  const url2 = encodeUrl('http://www.baidu.com/', {

  })

  expect(url2).toEqual('http://www.baidu.com/')

})