/*
 * leetCode164 - 最大间距
 * @date: 2019/9/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    if (arr.length < 2) {
        return 0;
    }
    // 冒泡排序
    // 确定边界
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = arr.length -1,tmp ; i > 0 ; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        // 如果只有两位
        if (arr.length === 2) {
            max = arr[1] - arr[0];
        }
        // 排完一轮
        if (i !== arr.length-1) {
            if (max < arr[i+1] - arr[i]) {
                max = arr[i+1] - arr[i];
            }
        }

    }
    return max;
};