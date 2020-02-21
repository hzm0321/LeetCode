/*
 * leetCode922 - 按奇偶排序数组II
 * @date: 2019/9/10
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    arr.sort((a, b) => a - b);
    // 存储奇偶数排序后的数组
    let r = [];
    // 偶数起始位
    let even = 0;
    // 奇数起始位
    let odd = 1;
    // 对数组进行遍历
    arr.forEach(item => {
        if (item % 2 === 1) {
            r[odd] = item;
            odd += 2;
        } else {
            r[even] = item;
            even += 2;
        }
    });
    return r;
};