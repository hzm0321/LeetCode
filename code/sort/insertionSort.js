/*
 * insertionSort - 插入排序
 * @date: 2019/9/12
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (arr) => {
    const len = arr.length;
    // 第一个元素默认已经排序,所以从第二个元素开始取
    for (let i = 1; i < len; i++) {
        for (let j = i-1; j >= 0; j--) {
            // 取出的元素挨个进行比较
            if (arr[i] >= arr[j]) {
                // 先把i位置的元素删除,再在找到的位置插入
                arr.splice(j + 1, 0, arr.splice(i, 1)[0]);
                break;
            } else if (j === 0) {
                // 遍历到最小元素,最左侧插入
                arr.splice(0,0,arr.splice(i,1)[0])
            }
        }
    }
    return arr;
};
 