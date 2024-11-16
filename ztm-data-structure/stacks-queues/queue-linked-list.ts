class QueueListNode<T> {
  value: T;
  next: QueueListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue<T> {
  private first: QueueListNode<T> | null = null;
  private last: QueueListNode<T> | null = null;
  private length: number = 0;

  constructor() {
    // Do nothing
  }

  enqueue(value: T): LinkedListQueue<T> {
    const newNode = new QueueListNode(value);
    if (!this.first) {
      this.first = newNode;
    }

    if (this.last) {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;

    return this;
  }

  peek(): T | null {
    return this.first?.value || null;
  }

  dequeue(): T | null {
    if (!this.first) return null;

    const { value } = this.first;
    this.first = this.first.next;

    if (this.length === 1) {
      this.last = null;
    }

    this.length--;

    return value;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  getList(): Array<T> {
    const array: Array<T> = [];
    let currentNode = this.first;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myLinkedListQueue = new LinkedListQueue<number>();

console.log(myLinkedListQueue.peek()); // Output: null
console.log(myLinkedListQueue.dequeue()); // Output: null
console.log(myLinkedListQueue.isEmpty()); // Output: true

myLinkedListQueue.enqueue(1).enqueue(2).enqueue(3);

console.log(myLinkedListQueue.dequeue());
console.log(myLinkedListQueue.getList());

console.log(myLinkedListQueue.isEmpty()); // Output: false

console.log(myLinkedListQueue.dequeue());
console.log(myLinkedListQueue.getList());
console.log(myLinkedListQueue.dequeue());
console.log(myLinkedListQueue.getList());

console.log(myLinkedListQueue.isEmpty()); // Output: true
