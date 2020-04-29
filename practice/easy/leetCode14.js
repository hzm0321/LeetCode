/*
 * leetCode14 - 最长公共前缀
 */

/**
 * 1. 找到最小字符串长度
 * 2. 对该长度从头到尾进行遍历
 * 3. 判断前缀
 * @param strs
 */
export function longestCommonPrefix(strs=[]) {
  if (strs.length === 0) {
    return ""
  }
  let res = "";
  let maxLength = Math.min.apply(null, strs.map((item) => item.length));
  for (let i = 0; i < maxLength; i++) {
    // 公共字符
    const t = strs[0][i]
    for (let j = 0,len = strs.length; j < len; j++) {
      if (strs[j][i] !== t) {
        return res
      }
    }
    res += t;
  }
  return res
}

