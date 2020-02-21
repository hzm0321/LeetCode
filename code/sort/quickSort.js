/*
 * quickSort - 快速排序
 * @date: 2019/9/12
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    // 快排递归方法
    function quickSort(L, R) {
        // 递归出口
        if (L > R) {
            return;
        }
        // 确定基数,默认最左边那个
        const temp = arr[L];
        // 定义左右游标
        let i = L;
        let j = R;
        // 开始查找
        while (i !== j) {
            // 先从右边开始查找,直到找到的值小于基数
            while (arr[j] >= temp && i < j) {
                j--;
            }
            // 再从左边开始查找,直到找到的值大于基数
            while (arr[i] <= temp && i < j) {
                i++;
            }
            // 都找完了,交换两个位置
            if (i < j) {
                const t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
        // i和j重合,交换基数
        arr[L] = arr[i];
        arr[i] = temp;

        // 分治
        quickSort(L, i - 1);
        quickSort(i + 1, R);
    }

    quickSort(0, arr.length - 1);
    return arr;
};
 