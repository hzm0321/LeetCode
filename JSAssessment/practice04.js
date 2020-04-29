/*
 * practice04 - 移除数组中的元素(原数组上修改)
 */

export function splice(arr, item) {
  if (arr instanceof Array) {
    // 倒序遍历
    for (let i = arr.length-1 ; i >= 0 ; i--) {
      if (arr[i] === item) {
        arr.splice(i,1)
      }
    }
    return arr
  }
}

