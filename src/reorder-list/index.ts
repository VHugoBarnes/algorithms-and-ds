class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function reorderList(head: ListNode | null): void {
  let slow = head;
  let fast = head?.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;

  let prev = null;

  while (second !== null) {
    const temp = second.next;
    second.next = prev;

    prev = second;
    second = temp;
  }

  let first = head;
  second = prev

  while (second !== null) {
    const temp1 = first.next;
    const temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};