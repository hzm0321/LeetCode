/*
 * leetCode160 - 相交链表
 * @date: 2020/5/30
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function getIntersectionNode(headA, headB) {
  // 双指针清除高度差
  let pA = headA, pB = headB;
  while (pA || pB) {
    if (pA === pB) {
      return pA;
    }
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;

}
