/*
 * leetCode215 - 数组中的第k个最大元素
 * @date: 2019/9/10
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr, k) => {
    // 采用冒泡排序
    // k > len/2
    let len = arr.length;
    if (len === 1) {
        return arr[0];
    }
    if (k > Math.floor(len / 2)) {
        // 从大到小排
        for (let i = len - 1, tmp; i >= k - 1; i--) {
            for (let j = 0; j < i; j++) {
                tmp = arr[j];
                if (arr[j] < arr[j + 1]) {
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr[k - 1];
    }

    // k <= len/2
    if (k <= Math.floor(len / 2)) {
        // 从小到大排
        for (let i = len - 1, tmp; i > len - k; i--) {
            for (let j = 0; j < i; j++) {
                tmp = arr[j];
                if (arr[j] > arr[j + 1]) {
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr[len - k + 1];
    }

};

