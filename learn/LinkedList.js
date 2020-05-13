/*
 * LinkedList - 链表
 * @date: 2020/5/8
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node
    }
    this.count++;
  }

  /**
   * 插入元素
   * @param element
   * @param index
   * @returns {boolean}
   */
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const pre = this.getElementAt(index - 1);
        const cur = pre.next;
        pre.next = node;
        node.next = cur;
      }
      this.count++;
      return true
    }
    return false;
  }

  /**
   * 根据索引查找节点
   * @param index
   * @returns {undefined}
   */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== undefined; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let cur = this.head;
    let i = 0;
    while (cur !== undefined) {
      if (element === cur.value) {
        return i;
      }
      cur = cur.next;
      i++;
    }
    return -1
  }

  removeAt(index) {
    // 越界检查
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let pre = this.getElementAt(index - 1);
        current = pre.next;
        pre.next = current.next;
      }
      this.count--;
      return current.value;
    }
    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head === undefined) {
      return '';
    }
    let objString = `${this.head.value}`;
    let cur = this.head.next;
    for (let i = 1; i < this.size() && cur !== undefined ; i++) {
      objString += `,${cur.next.value}`
      cur = cur.next;
    }
    return objString;
  }
}
