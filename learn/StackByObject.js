/*
 * StackByObject - 栈方法
 * @date: 2020/5/8
 */

class StackByObject {
  constructor() {
    this.count = 0; // 记录长度
    this.items = {}; // 保存栈
  }

  /**
   * 往栈顶添加元素
   * @param value
   */
  push(value) {
    this.items[this.count] = value;
    this.count++;
  }

  /**
   * 栈长度
   * @returns {number}
   */
  size() {
    return this.count;
  }

  /**
   * 栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * 弹出栈顶元素
   * @returns {undefined|*}
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    // 取出对象键值最大的一个元素
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /**
   * 查看栈顶元素
   * @returns {undefined|*}
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  /**
   * 清空栈
   */
  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString += `${this.items[i]}`;
    }
    return objString;
  }
}

export function decimalToBinary(number) {
  const remStack = new StackByObject();
  let num = number;
  let rem;
  let res = '';

  while (num > 0) {
    rem = Math.floor(num % 2);
    remStack.push(rem);
    num = Math.floor(num / 2);
  }

  // 出栈
  while (!remStack.isEmpty()) {
    res += remStack.pop().toString();
  }

  return parseInt(res);
}
