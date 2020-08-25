import { solve } from "../../practice/middle/leetCode130";

test('被围绕的区域', () => {
  const arr = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]
  expect(solve(arr)).toEqual([["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]])
})
