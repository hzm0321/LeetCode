/*
 * Fibonacci - dp斐波那契
 * @date: 2020/5/9
 */

const record = [1,1];

export function fibonacci(number) {
  if (record[number]) {
    return record[number];
  }
  const q = fibonacci(number - 1) + fibonacci(number - 2);
  record[number] = q;
  return q;
}
