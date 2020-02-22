/*
 * practice03 - 移除数组中的元素
 */

export function remove(arr, item) {
  if (arr instanceof Array) {
    return arr.filter(value => value !== item)
  }
}

