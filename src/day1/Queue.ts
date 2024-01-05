type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    let new_tail: Node<T> = {
      value: item,
      next: undefined
    };

    if (this.tail) {
      this.tail.next = new_tail;
    }

    if (!this.head) {
      this.head = new_tail;
    }

    this.tail = new_tail;
    this.length++;
  }

  deque(): T | undefined {
    let dequed_head = this.head;
    if (!dequed_head) return undefined;

    this.head = dequed_head.next;
    dequed_head.next = undefined;

    this.length--;
    return dequed_head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
