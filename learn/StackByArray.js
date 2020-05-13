/*
 * StackByArray - 栈方法
 * @date: 2020/5/8
 */

class StackByArray {
  constructor() {
    this.items = []; // 用数组保存栈内容
  }

  /**
   * 往栈添加元素
   * @param value
   */
  push(value) {
    this.items.push(value);
  }

  /**
   * 弹出栈顶元素
   * @returns {*}
   */
  pop() {
    return this.items.pop();
  }

  /**
   * 查看栈顶元素
   * @returns {*}
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * 判断栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 返回栈长度
   * @returns {number}
   */
  size() {
    return this.items.length;
  }

  /**
   * 清空栈
   */
  clear() {
    this.items = [];
  }
}

const stack = new StackByArray();
console.log(stack.isEmpty())
