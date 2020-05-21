/*
 * leetCode225 - 用队列实现栈
 * @date: 2020/5/18
 */

export class MyStack {
  constructor() {
    this.count = 0;
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  top() {
    if (this.empty()) {
      return -1
    }
    return this.items[this.items.length - 1];
  }

  empty() {
    return this.items.length === 0;
  }

}
