import { ListNode } from "./list-node";

export class SingleLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value: T): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  remove(value: T): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  search(value: T): ListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  print(): void {
    const values = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values);
  }

  insert(index: number, value: T): void {
    if (index === 0) {
      this.prepend(value);
    }

    const newNode = new ListNode(value);

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if ((currentIndex + 1) === index) {
        const nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  reverse(): void {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    [this.head, this.tail] = [this.tail, this.head];
  }
}

const sll = new SingleLinkedList();
sll.append(5);
sll.append(10);
sll.append(12);
sll.append(104);
sll.insert(2, 666);
sll.print();
