/*
 * leetCode459 - 重复的子字符串
 * @date: 2019/9/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

// 1.将原字符串给出拷贝一遍组成新字符串；
// 2.掐头去尾留中间；
// 3.如果还包含原字符串，则满足题意。

export default (s) => {
  var reg = /^(\w+)\1+$/
  return reg.test(s);
};
