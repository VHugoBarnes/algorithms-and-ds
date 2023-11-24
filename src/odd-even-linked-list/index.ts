export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let odd = head;
  let even = head?.next;

  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = odd.next?.next!;
    odd = odd.next; // iterate

    even.next = even.next.next!;
    even = even.next; // iterate
  }

  odd.next = evenHead;

  return head;
};