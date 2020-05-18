/*
 * leetCode232 - 用栈实现队列
 * @date: 2020/5/18
 */

export class MyQueue {
  constructor() {
    this.count = 0;
    this.items = [];
  }

  push(element){
    this.items.push(element);
  }

  pop(){
    if (this.empty()) {
      return -1
    }
    return this.items.shift();
  }
  peek(){
    if (this.empty()) {
      return -1
    }
    return this.items[0];
  }
  empty(){
    return this.items.length === 0;
  }
}
