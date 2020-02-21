/*
 * lesson1 - TODO
 * @date: 2019/9/7
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

import revertByWorld from '../../code/string/leetCode557';
import countBinary from '../../code/string/leetCode696';

test('字符串反转', () => {
  expect(revertByWorld("Hello World")).toBe("olleH dlroW");
});

test('计数二进制子串', () => {
  expect(countBinary("00110011")).toBe(6);
});
