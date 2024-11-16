class ArrayQueue<T> {
  private queue: Array<T> = [];

  constructor() {
    // Do nothing
  }

  enqueue(value: T): ArrayQueue<T> {
    this.queue.push(value);
    return this;
  }

  peek(): T | null {
    return this.queue[0] || null;
  }

  dequeue(): T | null {
    return this.queue.shift() || null;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  getList(): Array<T> {
    return this.queue;
  }
}

const myArrayQueue = new ArrayQueue<number>();

console.log(myArrayQueue.peek()); // Output: null
console.log(myArrayQueue.dequeue()); // Output: null
console.log(myArrayQueue.isEmpty()); // Output: true

myArrayQueue.enqueue(1).enqueue(2).enqueue(3);

console.log(myArrayQueue.dequeue()); // Output: 1
console.log(myArrayQueue.getList()); // Output: [2, 3]

console.log(myArrayQueue.isEmpty()); // Output: false

console.log(myArrayQueue.dequeue()); // Output: 2
console.log(myArrayQueue.getList()); // Output: [3]
console.log(myArrayQueue.dequeue()); // Output: 3
console.log(myArrayQueue.getList()); // Output: []

console.log(myArrayQueue.isEmpty()); // Output: true
