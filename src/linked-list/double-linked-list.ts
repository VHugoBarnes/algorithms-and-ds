import { DoubleListNode } from "./double-list-node";
import { SingleLinkedList } from "./single-linked-list";

export class DoubleLinkedList<T> extends SingleLinkedList<T> {
  append(value: T): void {
    const newNode = new DoubleListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail as DoubleListNode<T>;
      }
      this.tail = newNode;
    }
  }

  prepend(value: T): void {
    const newNode = new DoubleListNode(value);
    newNode.next = this.head;
    if (this.head) (this.head as DoubleListNode<T>).prev = newNode;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  remove(value: T): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head) (this.head as DoubleListNode<T>).prev = null;
      return;
    }

    let current = this.head as DoubleListNode<T>;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (current.next) (current.next as DoubleListNode<T>).prev = current;
        return;
      }
      current = current.next as DoubleListNode<T>;
    }
  }

  reverse(): void {
    let current = this.head as DoubleListNode<T> | null;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next as DoubleListNode<T> | null;
      current.next = temp;
      current = current.prev as DoubleListNode<T> | null;
    }
    [this.head, this.tail] = [this.tail, this.head];
  }
}
