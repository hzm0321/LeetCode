/*
 * leetCode41 - 缺失的第一个正数
 * @date: 2019/9/10
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    let num = [];
    let r = 1;
    if (arr.length === 0) {
        return 1;
    }
    for (let i = 0, len = arr.length,min; i < len; i++) {
        // 去掉负数和0
        if (arr[i] <= 0) {
            continue;
        }
        // 如果是正数,放入数组
        num[arr[i]] = arr[i];
    }
    if (num.length === 0) {
        return 1;
    }
    let flag = false;
    for (let i = 1; i < num.length; i++) {
        if (num[i] === undefined) {
            r = i;
            flag = true;
            break;
        }
    }
    if (flag) {
        return r;
    } else {
        return num.length;
    }
};