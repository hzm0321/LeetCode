import telComb from '../../code/array/leetCode17';
import hasGroupsSizeX from '../../code/array/leetCode914';
import canPlaceFlowers from '../../code/array/leetCode605';
import grayCode from '../../code/array/leetCode89';

test('电话号码的字母组合', () => {
    expect(telComb('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
});
test('电话号码的字母组合', () => {
    expect(telComb('2')).toEqual(["a", "b", "c"])
});
test('电话号码的字母组合', () => {
    expect(telComb('')).toEqual([])
});

test('卡牌分组', () => {
    expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true);
});

test('卡牌分组', () => {
    expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true);
});

test('种花问题', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
});
test('种花问题', () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toEqual(true);
});
test('格雷编码', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2]);
});