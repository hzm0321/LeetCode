/*
 * bubbleSort - 冒泡排序
 * @date: 2019/9/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    // 遍历的边界
    for (let i = arr.length-1,tmp; i > 0; i--) {
        // 从头开始检索
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};