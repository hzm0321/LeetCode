/*
 * lesson - 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 * @date: 2019/9/7
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

// export default (str) => {
//   let arr = str.split(' ');
//   let result = arr.map(item => {
//     return [...item].reverse().join('');
//   });
//   return result.join(' ');
// }

export default (str) => {
  return str.split(/\s/g).map(item => {
    return [...item].reverse().join('')
  }).join(' ')
};


