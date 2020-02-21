/*
 * heapSort - 堆排序
 * @date: 2019/9/12
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    // 交换
    function swap(arr, i, j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    // 大顶堆
    function heapify(arr, i, length) {
        // 左子节点索引
        const c1 = 2 * i + 1;
        // 右子节点索引
        const c2 = 2 * i + 2;
        // 默认最大值为父节点索引
        let max = i;
        // 确定最大值所在的索引
        if (c1 < length && arr[c1] > arr[max]) {
            max = c1;
        }
        if (c2 < length && arr[c2] > arr[max]) {
            max = c2;
        }
        // 判断最后max指向的索引,选择是否交换位置
        if (max !== i) {
            swap(arr, max, i);
            // 递归
            heapify(arr, max, length);
        }
    }

    // 构建大顶堆结构
    function buildHeap(arr, length) {
        // 从最后一个节点开始
        let lastNode = length - 1;
        // 找到它的父节点
        let parent = Math.floor((lastNode - 1) / 2);
        // 依次遍历
        for (let i = parent; i >= 0; i--) {
            // 对每个根节点大顶堆化
            heapify(arr, i, length);
        }
    }

    const len = arr.length;
    buildHeap(arr, len);
    for (let i = len - 1; i >= 0; i--) {
        // 把最后一个节点和根节点交换
        swap(arr, i, 0);
        heapify(arr, 0, i);
    }
    return arr;
};