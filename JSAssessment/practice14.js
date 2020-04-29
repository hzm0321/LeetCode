/*
 * practice14 - 查找元素位置
 */

export function findAllOccurrences(arr, target) {
  if (arr instanceof Array ) {
    const t = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        t.push(i)
      }
    }
    return t
  }
}

