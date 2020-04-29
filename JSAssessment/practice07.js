/*
 * practice07 - 添加元素
 */

export function prepend(arr, item) {
  if (arr instanceof Array) {
    return [item].concat(arr)
  }
}

