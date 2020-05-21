/*
 * leetCode66 - 加一
 * @date: 2020/5/22
 */

export function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) {
      return digits;
    }
  }
  return [1, ...digits];
}
