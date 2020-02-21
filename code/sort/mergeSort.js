/*
 * mergeSort - 归并排序
 * @date: 2019/9/12
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    function merge(arr, L, M, R) {
        // 左边的长度
        const leftSize = M - L;
        // 右边的长度
        const rightSize = R - M + 1;
        let leftArr = [], rightArr = [];
        // 填充左数组
        for (let i = L; i < M; i++) {
            leftArr[i - L] = arr[i];
        }
        // 填充右数组
        for (let i = M; i <= R; i++) {
            rightArr[i - M] = arr[i];
        }
        // 合并
        let i = 0, j = 0, k = L;
        while (i < leftSize && j < rightSize) {
            if (leftArr[i] < rightArr[j]) {
                // 把左侧的加入数组
                arr[k] = leftArr[i];
                i++;
                k++;
            } else {
                // 把右侧的加入数组
                arr[k] = rightArr[j];
                j++;
                k++;
            }
        }

        // 如果一方超出了边界,把剩余的加入到数组
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

    // 排序(分治)
    function mergeSort(arr, L, R) {
        if (L === R) {
            return;
        }
        const M = Math.floor((L + R) / 2);
        mergeSort(arr, L, M);
        mergeSort(arr, M + 1, R);
        merge(arr, L, M + 1, R);
    }

    mergeSort(arr, 0, arr.length - 1);
    return arr;

};