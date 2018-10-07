// 函数防抖
export const _debounce = (func, wait, immediate) => {
  var timer = null
  var context, args, result, timestamp

  var later = function () {
    var oDate = new Date()
    var last = oDate.getTime() - timestamp // 计算第一次时间戳与当前时间戳的差值。

    if (last < wait && last >= 0) {
      // 在等待时间内触发此函数，重新计时。
      timer = setTimeout(later, wait - last)
    } else {
      timer = null
      if (!immediate) {
        // 限制immediate 为true时，执行回调函数.
        result = func.apply(context, args)
        if (!timer) context = args = null
      }
    }
  }

  return function () {
    var oDate = new Date()
    var callNow = immediate && !timer // 代表第一次调用立即执行。

    timestamp = oDate.getTime() // 记录下当前时间戳
    context = this // 保存上下文
    args = arguments

    if (!timer) {
      // 第一次触发时，timer为空，进入此分支
      timer = setTimeout(later, wait)
    }

    if (callNow) {
      // 第一次触发且immediate为true，进入此分支
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
