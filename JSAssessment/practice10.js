/*
 * practice10 - 添加元素
 */

export function insert(arr, item, index) {
  if (arr instanceof Array ) {
    return arr.slice(0,index).concat(item,arr.slice(index))
  }
}

