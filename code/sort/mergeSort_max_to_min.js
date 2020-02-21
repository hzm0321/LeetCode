/*
 * mergeSort_max_to_min - 归并排序从大到小
 * @date: 2019/9/12
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    // 合并方法
    function marge(arr, L, M, R) {
        // 左边的长度
        const leftSize = M - L;
        // 右边的长度
        const rightSize = R - M + 1;
        // 创建新的左右子数组
        let leftArr = [], rightArr = [];
        // 往里填充数据
        for (let i = L; i < M; i++) {
            // 注意的是leftArr是从0开始编号,arr不是
            leftArr[i - L] = arr[i];
        }
        for (let i = M; i <= R; i++) {
            rightArr[i - M] = arr[i];
        }
        // 依次取出到arr
        // 注意k是从传入的L位置替换
        let i = 0, j = 0, k = L;
        // i和j都没有走完
        while (i < leftSize && j < rightSize) {
            // 大的进
            if (leftArr[i] > rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
                k++;
            } else {
                arr[k] = rightArr[j];
                j++;
                k++;
            }
        }
        // i和j中有一方走完
        while (i < leftSize) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        while (j < rightSize) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    // 分治
    function mergeSort(arr, L, R) {
        // 出口
        if (L === R) {
            return;
        }
        // 确定中心点
        const M = Math.floor((R + L) / 2);
        mergeSort(arr, L, M);
        mergeSort(arr, M + 1, R);
        marge(arr, L, M + 1, R);
    }

    mergeSort(arr, 0, arr.length - 1);
    return arr;

};