/*
 * regex.test - TODO
 * @date: 2019/9/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

import repeatedSubstringPattern from '../../code/regex/leetCode459';

test('重复的子字符串', () => {
  expect(repeatedSubstringPattern('ababd')).toBe(false);
});
