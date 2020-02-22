/*
 * practice03 - 删除数组最后一个元素
 */

export function truncate(arr) {
  if (arr instanceof Array) {
    return arr.slice(0,-1);
  }
}

