
// 防抖函数
export const debounce = (fn, wait) => {
  var timeout = null
  return function () {
    if (timeout !== null) { clearTimeout(timeout) }
    timeout = setTimeout(fn, wait)
  }
}
// 处理函数
