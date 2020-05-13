/*
 * Deque - 双端队列
 * @date: 2020/5/8
 */

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /**
   * 向队首添加元素
   * @param value
   */
  addFront(value) {
    if (this.isEmpty()) {
      // 队列为空,直接向队尾追加
      this.addBack(value);
    }else if (this.lowestCount > 0) {
      // 队列不为空,但是队首指针不为0
      this.lowestCount--;
      this.items[this.lowestCount] = value;
    } else {
      // 队首指针为0,所有元素后移一位
      for (let i = this.count; i > 0 ; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = value;
    }
  }

  addBack(value) {
    this.items[this.count] = value;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

