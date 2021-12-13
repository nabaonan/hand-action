import addEvent from '../addEvent'

import { describe, expect, test } from '@jest/globals'
//注意如果测试dom环境需要在jest.config中增加配置 testEnvironment: "jest-environment-jsdom",

test('测试绑定点击事件', () => {

  document.body.innerHTML =
    '<div id="p">' +
    '  <span id="s1" >1</span>' +
    '  <span id="s2" >2</span>' +
    '  <span  >3</span>' +
    '  <span  >4</span>' +
    '  <span  >5</span>' +

    '</div>';

  const $ = document.querySelector
  let content
  const fn = (e) => {
    content = e.target.innerHTML
  }
  addEvent('#p', 'click', fn)

  const s1 = $('#s1')
  s1.click()

  expect(fn).toBeCalled();
  expect(content).toEqual('1')
  // expect($('#username').text()).toEqual('Johnny Cash - Logged In');
});