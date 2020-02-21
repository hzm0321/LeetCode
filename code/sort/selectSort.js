/*
 * selectSort - 选择排序
 * @date: 2019/9/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    for (let i = 0,len = arr.length,min; i < len-1; i++) {
        min = arr[i];
        for (let j = i+1; j < len; j++) {
            if (min > arr[j]) {
                // 更新min值
                min = arr[j];
                // 交换
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
    }
    return arr;
};