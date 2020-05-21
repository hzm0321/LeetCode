export class CQueue {
  constructor() {
    this.stack1 = []; // 负责存储
    this.stack2 = []; // 用于倒置,出队操作
  }

  appendTail(element) {
    this.stack1.push(element);
  }

  deleteHead() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      return -1
    }
    while (this.stack1.length > 0){
      // 倒置
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}
