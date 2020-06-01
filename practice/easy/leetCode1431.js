/*
 * leetCode1431 - 拥有最多糖果的孩子
 * @date: 2020/5/31
 */

export function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((item) => (item + extraCandies) >= max);
}
