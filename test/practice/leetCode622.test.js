import { MyCircularQueue } from "../../practice/middle/leetCode622";

test('循环队列设计', () => {
  const cQueue = new MyCircularQueue(2);
  cQueue.enQueue(1);
  cQueue.enQueue(2);
  cQueue.enQueue(3);
  expect(cQueue.items).toEqual([1,2])
})
