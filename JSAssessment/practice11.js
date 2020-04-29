/*
 * practice11 - 计数
 */

export function count(arr, item) {
  if (arr instanceof Array ) {
    return arr.filter(value => value === item).length
  }
}

