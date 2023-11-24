import { ListNode } from "./list-node";

export class DoubleListNode<T> extends ListNode<T> {
  prev: DoubleListNode<T> | null;

  constructor(value: T) {
    super(value);
    this.prev = null;
  }
}
