/*
 * leetCode622 - 实现循环队列
 * @date: 2020/5/17
 */

export class MyCircularQueue {
  constructor(size) {
    this.size = size; // 队列容量
    this.count = 0; // 队尾指针
    this.lowerCount = 0; // 队头指针
    this.items = []; // 存储
  }

  enQueue(element) {
    if (this.isFull()) {
      return false;
    } else {
      this.items[this.count] = element;
      // 取余操作,使指针循环
      this.count = (this.count + 1) % this.size;
      return true
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    } else {
      // 元素置空,表示删除
      this.items[this.lowerCount] = '';
      this.lowerCount = (this.lowerCount + 1) % this.size;
      return true;
    }
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.items[this.lowerCount]
    }

  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    } else {
      let val = this.count - 1 >= 0 ? this.count - 1 : this.size - 1
      return this.items[val]
    }
  }

  isEmpty() {
    // 双指针重合,并且头指针没有元素
    return this.count === this.lowerCount && !this.items[this.lowerCount];
  }

  isFull() {
    // 双指针重合,并且头指针有元素
    return this.count === this.lowerCount && !!this.items[this.lowerCount];
  }
}
