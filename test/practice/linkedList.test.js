import { reverseLinkedList, ListNode } from "../../practice/specialTopic/linkedList/原地反转链表";


test('原地链表反转', () => {
  const A = new ListNode(1);
  const B = new ListNode(2);
  const C = new ListNode(3);
  A.next = B;
  B.next = C;
  expect(reverseLinkedList(A).next.next).toEqual(A);
})
