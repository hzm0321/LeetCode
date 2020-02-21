/*
 * leetCode605 - TODO
 * @date: 2019/9/8
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (flowerbed, n) => {
    // 指针
    let count = 0;
    let num = [];
    let res = true;
    // 计算能种植的花卉数量
    let sum = 0;
    // 优先对两边的边界进行处理
    let leftIndex = 0;
    let rightIndex = flowerbed.length - 1;
    // 判断独苗
    if (flowerbed.length === 1) {
        // 如果能种
        if (flowerbed[0] === 0) {
            res = n <= 1;
        } else {
            res = n <= 0;
        }
        return res;
    }
    // 判断左边界
    if (flowerbed[0] === 0) {
        let leftCount = 1;
        for (let i = 1, len = flowerbed.length; i < len; i++) {
            if (flowerbed[i] === 0) {
                leftCount++;
                leftIndex = i;
            } else {
                leftIndex = i;
                break;
            }
        }
        // 如果在计算左边的时候,把全部都算完了,直接比较
        if (leftIndex === flowerbed.length-1) {
            sum += Math.ceil(leftCount / 2);
            res = sum >= n;
            return res;
        }
        // 向下取整计入总数
        sum += Math.floor(leftCount / 2);


    }
    // 判断右边界
    if (flowerbed[flowerbed.length - 1] === 0) {
        let rightCount = 1;
        for (let i = flowerbed.length - 2; i >= 0; i--) {
            if (flowerbed[i] === 0) {
                rightCount++;
            } else {
                rightIndex = i;
                break;
            }
        }
        // 向下取整计入总数
        sum += Math.floor(rightCount / 2);
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
        // 如果当前是1,清空计数,跳过
        if (flowerbed[i] === 1) {
            // 如果前一个是0,推出count
            if (i > 0 && flowerbed[i - 1] === 0) {
                num.push(count);
            }
            count = 0;
            continue;
        }
        // 如果当前是0,计数,并往下走
        if (flowerbed[i] === 0) {
            // 判断边界
            count++;
        }
    }
    for (let i of num) {
        const t = Math.ceil(i / 2);
        if (t >= 1) {
            sum += t - 1;
        }
        if (sum >= n) {
            break;
        }
    }
    if (sum < n) {
        res = false;
    }
    return res;

};