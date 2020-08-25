/*
 * 三元 - 原地反转链表
 * @date: 2020/8/25
 */
export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export const reverseLinkedList = (node) => {
  if (!node) return null;
  let pre = null, // 上一个节点
    cur = node; // 当前节点
  while (cur) {
    // 保存
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
