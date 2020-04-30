import { isValid } from "../../practice/easy/leetCode20";

test('括号测试', () => {
  const s = "()";
  expect(isValid(s)).toEqual(true)
})

test('括号测试', () => {
  const s = "()[]{}";
  expect(isValid(s)).toEqual(true)
})

test('括号测试', () => {
  const s = "([)]";
  expect(isValid(s)).toEqual(false)
})
