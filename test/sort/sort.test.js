/*
 * sort.test - TODO
 * @date: 2019/9/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

import bubbleSort from "../../code/sort/bubbleSort";
import selectSort from "../../code/sort/selectSort";
import maximumGap from "../../code/sort/leetCode164";
import sortArrayByParityII from '../../code/sort/leetCode922';
import findKthLargest from '../../code/sort/leetCode215';
import firstMissingPositive from '../../code/sort/leetCode41';
import insertionSort from "../../code/sort/insertionSort";
import heapSort from "../../code/sort/heapSort";
import heapSort_min from "../../code/sort/heapSort_min";
import mergeSort from "../../code/sort/mergeSort";
import mergeSort_max_to_min from "../../code/sort/mergeSort_max_to_min";
import quickSort from "../../code/sort/quickSort";

test('冒泡排序', () => {
    expect(bubbleSort([2, 3, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('选择排序', () => {
    expect(selectSort([2, 3, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('插入排序', () => {
    expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('堆排序_大顶堆', () => {
    expect(heapSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('堆排序_小顶堆', () => {
    expect(heapSort_min([5, 2, 4, 6, 1, 3])).toEqual([6, 5, 4, 3, 2, 1]);
});

test('归并排序', () => {
    expect(mergeSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});
test('归并排序', () => {
    expect(mergeSort([5, 2, 4, 6, 1, 3, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
test('归并排序,从大到小', () => {
    expect(mergeSort_max_to_min([5, 2, 4, 6, 1, 3])).toEqual([6, 5, 4, 3, 2, 1]);
});

test('快速排序', () => {
    expect(quickSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('最大的间距', () => {
    expect(maximumGap([3, 6, 9, 1])).toBe(3);
});

test('按奇偶排序数组II', () => {
    expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([2, 5, 4, 7]);
});

test('数组中的第k个最大元素', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 6)).toBe(1);
});
test('数组中的第k个最大元素', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});

test('缺失的第一个正数', () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
});
test('缺失的第一个正数', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});