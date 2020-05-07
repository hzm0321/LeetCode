/*
 * leetCode9 - 回文数
 */

/**
 *
 * @param {Number} x
 * @returns {boolean}
 */
export function isPalindrome(x) {
  return x.toString() === x.toString().split("").reverse().join("")
}
