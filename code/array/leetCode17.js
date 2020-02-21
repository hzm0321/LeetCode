/*
 * lettCode17 - 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *  输入："23"
 *  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * @date: 2019/9/8
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

export default (s) => {
    // 建立电话号码键盘映射
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let num = [...s];
    // 判空
    if (s.length <= 0) {
        return [];
    }
    // 判断单个字符
    if (s.length === 1) {
        return [...map[s]];
    }
    // 保存映射后的字母内容
    let code = [];
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item]);
        }
    });
    // 递归方法
    let comb = (arr) => {
        // 临时变量用来保存前两个变量的计算的结果
        let tmp = [];
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        // 循环完成以后,把结果替换
        arr.splice(0, 2, tmp);
        // 判断数组长度,是否可以继续循环,递归出口
        if (arr.length > 1) {
            comb(arr);
        } else {
            return tmp;
        }
        return arr[0];
    };
    return comb(code);

};