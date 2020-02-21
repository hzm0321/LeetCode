/*
 * leetCode89 - TODO
 * @date: 2019/9/8
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (n) => {
    // 边界判断
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
    // 递归
    let f = (n) => {
        // 出口
        if (n === 1) {
            return ['0', '1'];
        } else {
            // 前一个结果
            let pre = f(n - 1);
            // 现在的结果
            let result = [];
            // 索引最大的位置
            let max = Math.pow(2, n) - 1;
            for (let i = 0,len = pre.length; i < len; i++) {
                result[i] = `0${pre[i]}`;
                result[max - i] = `1${pre[i]}`;
            }
            return result;
        }
    };
    let num = f(n);
    for (let i = 0,len = num.length; i < len; i++) {
        num[i] = parseInt(Number(num[i]), 2);
    }
    return num;
    冒泡排序
};