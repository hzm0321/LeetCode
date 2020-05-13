/*
 * Queue - 队列
 * @date: 2020/5/8
 */

class Queue {
  constructor() {
    this.count = 0; // 队尾指针
    this.lowestCount = 0; // 队首指针
    this.items = {}; // 保存队列
  }

  /**
   * 队列添加元素
   * @param value
   */
  enqueue(value) {
    this.items[this.count] = value;
    this.count++;
  }

  /**
   * 队首移除元素
   * @returns {undefined|*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }

  /**
   * 查看队首元素
   * @returns {undefined|*}
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /**
   * 队列判空
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 队列尺寸
   * @returns {number}
   */
  size() {
    return this.count - this.lowestCount;
  }

  /**
   * 清空队列
   */
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount; i < this.count; i++) {
      objString += `,${this.items[i]}`;
    }
    return objString;
  }
}

/**
 * 传花游戏
 * @param list
 * @param num
 * @returns {{eliminated: [], winner: (undefined|*)}}
 */
export function hotPotato(list,num) {
  const queue = new Queue();
  const newList = [];

  // 遍历列表进队列
  for (let i = 0; i < list.length; i++) {
    queue.enqueue(list[i]);
  }

  while (queue.size() > 1) {
    // 当队列存在的人数大于1 开始游戏
    // 传递num次
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 保存被淘汰的人
    newList.push(queue.dequeue());
  }
  return {
    eliminated: newList,
    winner: queue.dequeue()
  }
}
