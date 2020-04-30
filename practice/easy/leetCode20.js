/*
 * leetCode14 - 最长公共前缀
 */

export function isValid(s) {
  const flag = {
    "[": "]",
    "(": ")",
    "{": "}",
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (flag[s[i]]) {
      // 左括号入栈
      stack.push(s[i]);
    } else if(s[i] !== flag[stack.pop()]){
      // 右括号出栈
      return false
    }

  }
  return stack.length === 0;
}
