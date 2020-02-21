/*
 * leetCode605_2 - TODO
 * @date: 2019/9/8
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

// 思路二: 左右两边各加一个0
/**
 *
 * @param {Array} flowerbed
 * @param {number} n
 * @returns {boolean}
 */
export default (flowerbed, n) => {
    flowerbed.unshift(0);
    flowerbed.push(0);
    let count = 0;
    let num = [];
    let sum = 0;
    let res = true;
    for (let i = 0, len = flowerbed.length; i < len; i++) {
        if (flowerbed[i] === 0) {
            count++;
        } else {
            // 如果前一项是0,推出
            if (i - 1 >= 0 && flowerbed[i - 1] === 0) {
                num.push(count);
                count = 0;
            }
        }
        // 如果count不为0 说明 全部是0
        if (count !== 0) {
            num.push(count);
        }
    }
    for (let i of num) {
        const t = Math.ceil(i / 2);
        if (t >= 1) {
            sum += t - 1;
        }
        if (sum >= n) {
            break;
        }
    }
    if (sum < n) {
        res = false;
    }
    return res;
}