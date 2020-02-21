/*
 * leetCode914 - 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 * @date: 2019/9/8
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (deck) => {
    deck.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let dst = [];
    let res = true;
    // 如果只有一个
    if (deck.length <= 1) {
        return false;
    }
    for (let i = 0,tmp = [],len = deck.length; i < len; i++) {
        tmp.push(deck[i]);
        for (let j = i + 1; j <= len - 1; j++) {
            // 末尾判断,相同
            if (j === len - 1 ) {
                if (deck[i] === deck[j]) {
                    tmp.push(deck[j]);
                }
                if (tmp.length < min) {
                    min = tmp.length;
                }
                dst.push([].concat(tmp));
                i = len;
                break;
            }

            // 判断当前值与下一个值是否一致
            if (deck[i] === deck[j]) {
                // 如果相等放入
                tmp.push(deck[j]);
            } else {
                // 得到一个分组,计算最小值
                if (tmp.length < min) {
                    min = tmp.length;
                }
                // 深拷贝tmp,加入到dst
                dst.push([].concat(tmp));
                // 清空数组
                tmp.length = 0;
                i = j-1;
                break;
            }
        }
    }
    // 判断min的值
    if (min < 2) {
        return false;
    }
    dst.every(item => {
        if (item.length % min !== 0) {
            res = false;
            return false;
        }
    });
    return res;
    // 遍历分组,判断每个分组的长度是否是min的整数倍
};
 
 