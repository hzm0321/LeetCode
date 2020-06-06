import { spiralOrder } from "../../practice/interview/29顺时针打印矩阵";

test('顺时针打印矩阵1', () => {
  const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  expect(spiralOrder(arr)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('顺时针打印矩阵2', () => {
  const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
  expect(spiralOrder(arr)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
})
