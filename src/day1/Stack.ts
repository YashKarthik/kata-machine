type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    let new_head = {
      value: item,
      next: this.head
    } as Node<T>;

    this.head = new_head;
    this.length++;
  }

  pop(): T | undefined {
    let del_head = this.head;
    if (!del_head) return undefined;

    this.head = del_head.next;
    del_head.next = undefined;
    this.length--;
    return del_head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
