/*
 * practice13 - 求二次方
 */

export function square(arr) {
  if (arr instanceof Array ) {
    return arr.map(item => Math.pow(parseInt(item), 2))
  }
}

