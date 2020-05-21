/*
 * leetCode680 - 验证回文字符串②
 * @date: 2020/5/19
 */

/**
 *
 * @param s
 */
export function validPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPali(s, l + 1, r) || isPali(s, l, r + 1);
    }
    l++;
    r--;
  }
  return true;
}

function isPali(s,l,r) {
  // 双指针循环
  while (l < r) {
    if (s[l] !== s[r]) {
      return false
    }
    l++;
    r--;
  }
  return true;
}

