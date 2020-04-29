/*
 * leetCode13 - 罗马数字转整数
 */

/**
 * 核心思路: 左至右遍历,相邻右边比自己大,减去, 反则反之
 * @param s
 */
export function romanToInt(s) {
  let num = 0;
  // 建立map映射
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  const sArr = [...s];
  for (let i = 0, len = sArr.length; i < len; i++) {
    if (i + 1 !== len) {
      const cur = map.get(sArr[i]);
      const next = map.get(sArr[i + 1]);
      if (cur < next) {
        num -= cur;
      } else {
        num += cur
      }
    } else {
      num += map.get(sArr[i])
    }
  }
  return num
}
