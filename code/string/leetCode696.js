/*
 * leetCode696 - 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
 * 并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 *  输入: "00110011"
 *  输出: 6
 *  解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
 * @date: 2019/9/7
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (s) => {
  // 前一个数字连续出现的次数
  let pre = 0;
  // 当前数字出现的次数
  let cur = 1;
  let res = 0;
  for (let i = 0,len = s.length-1; i < len; i++) {
    // 如果当前数字等于后一个数字
    if (s[i] === s[i+1]) {
      cur++;
    } else {
      // 当前数字与后一个数字不相等,改变当前数字为后一个数字
      pre = cur;
      cur = 1;
    }
    if (pre >= cur) {
      res++;
    }
  }
  return res;
};
