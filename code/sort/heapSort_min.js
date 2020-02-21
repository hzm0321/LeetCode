/*
 * heapSort_min - 堆排序_小顶堆
 * @date: 2019/9/12
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    /**
     * 交换
     * @param {Array} arr
     * @param {Number} i
     * @param {Number} j
     */
    function swap(arr, i, j) {
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    // 堆化
    function heapify(arr, len, i) {
        // 默认最小值的结点
        // i为传入的父节点
        let min = i;
        const c1 = i * 2 + 1;
        const c2 = i * 2 + 2;
        // 越界判断并比较
        if (c1 < len && arr[c1] < arr[min]) {
            min = c1;
        }
        if (c2 < len && arr[c2] < arr[min]) {
            min = c2;
        }
        // 交换
        if (min !== i) {
            swap(arr, min, i);
            // 继续递归堆化
            heapify(arr, len, min);
        }
    }
    // 构建
    function buildHeap(arr, len) {
        // 从最后一个节点
        let lastNode = len - 1;
        // 找到它的父节点
        let parent = Math.floor((lastNode - 1) / 2);
        // 从父节点开始构建
        for (let i = parent; i >= 0 ; i--) {
            heapify(arr, len, i);
        }
    }

    //堆排序
    const len = arr.length;
    buildHeap(arr, len);
    // 开始排序
    for (let i = len-1; i >= 0 ; i--) {
        // 把最后一个节点和根节点进行交换
        swap(arr, i, 0);
        // 缩堆化长度
        heapify(arr, i, 0);
    }
    return arr;
};
 