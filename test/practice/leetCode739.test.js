import { dailyTemperatures } from "../../practice/middle/leetCode739";

test('最高温度', () => {
  const T = [73, 74, 75, 71, 69, 72, 76, 73];
  expect(dailyTemperatures(T)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
})
