/*
 * leetCode9 - 合并两个升序链表
 */

function ListNode(val) {
  this.val = val;
  this.next = null;

}

export function mergeTwoLists(l1,l2) {
  // 设置哑结点
  const prehead = new ListNode(-1);
  let pre = prehead;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      pre.next = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }
  pre.next = l1 === null ? l2 : l1;
  return prehead.next;
}
