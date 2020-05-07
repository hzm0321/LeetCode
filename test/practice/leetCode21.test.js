import { mergeTwoLists } from "../../practice/easy/leetCode21";

test('合并链表', () => {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(3);
  const l2 = new ListNode(1);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(4);
  expect(mergeTwoLists(l1,l2)).toEqual(null)
})
