import FastClick from 'fastclick'
FastClick.attach(document.body)
/**
 * rem响应式方案的实现
 */
let win = global
let doc = win.document
let baseWidth = 640
let documentHTML = doc.documentElement
let docBody = doc.body
let pixelRatio = 2

function setRootFont () {
  let docWidth = documentHTML.getBoundingClientRect().width
  console.log('docWidth的值', docWidth)
  console.log('global.devicePixelRatio', global.devicePixelRatio)
  let scale = docWidth / baseWidth
  if (docWidth > 640) {
    scale = 0.5
  }
  documentHTML.style.fontSize = `${scale * 100}px` // 浏览器默认的一个标准,比如我们没设之前 那就是16px
  docBody.style.margin =0
  docBody.style.padding =0
  pixelRatio = global.devicePixelRatio === 3 ? 3 : 2
  documentHTML.setAttribute('data-dpr', pixelRatio)
}

setRootFont()
win.addEventListener('resize', setRootFont, false)
