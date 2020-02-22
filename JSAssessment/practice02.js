/*
 * practice02 - 数组求和
 */

export function sum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((accumulator, cur, curIndex, oriArr) => {
      return accumulator + cur
    });
  }
}

