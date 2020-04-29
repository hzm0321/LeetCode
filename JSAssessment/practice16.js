/*
 * practice16 - 计时器
 */

export function count(start, end) {
  console.log(start++)
  var time = setInterval(() => {
    if (start <= end) {
      console.log(start++);
    } else {
      clearInterval(time)
    }
  },100);
  return {
    cancel: function () {
      clearTimeout(time)
    }
  }
}

