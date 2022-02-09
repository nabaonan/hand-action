/**
 * 事件代理
 * @param {*} parent 
 * @param {*} eventType 
 * @param {*} fn 
 * @param {*} selector 
 */
  

function myAddEventListener(parent, eventType, fn, selector) {

  if (typeof parent === 'string') {
    parent = document.querySelector(parent)
  }
  if (!selector) {
    //没有指定子元素选择器则只绑定当前对象，直接触发
    parent.addEventListner(eventType, fn)//
  } else {
    //事件代理，代理 子元素
    parent.addEventListner((e, target) => {
      if (target.matches(selector)) {
        fn.call(target, e)//触发点击之后直接调用既可以
      }
    })
  }

}