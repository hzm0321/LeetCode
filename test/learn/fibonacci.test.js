import { fibonacci } from "../../learn/Fibonacci";

test('斐波那契备忘录递归2', () => {
  const number = 2;
  expect(fibonacci(number)).toEqual(2);
})

test('斐波那契备忘录递归3', () => {
  const number = 3;
  expect(fibonacci(number)).toEqual(3);
})

test('斐波那契备忘录递归4', () => {
  const number = 4;
  expect(fibonacci(number)).toEqual(5);
})

test('斐波那契备忘录递归100', () => {
  const number = 100;
  expect(fibonacci(number)).toEqual(573147844013817200000);
})

