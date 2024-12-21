class LinkListNode<T> {
  value: T;
  prev: LinkListNode<T> | null;
  next: LinkListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkListNode<T> | null = null;
  tail: LinkListNode<T> | null = null;
  length: number = 0;

  constructor(value?: T) {
    if (!value) return;

    this.append(value);
  }

  append(value: T): LinkedList<T> {
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend(value: T): LinkedList<T> {
    const newNode = new LinkListNode(value);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    this.length++;
    return this;
  }

  private triverseToIndex(index: number) {
    if (index <= 0) return this.head;
    if (index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      const nextNode = currentNode?.next;
      if (!nextNode) throw new Error("Node links are corrupted");

      currentNode = nextNode;
    }

    return currentNode;
  }

  get(index: number): T | null {
    const targetNode = this.triverseToIndex(index);
    return targetNode?.value || null;
  }

  insert(index: number, value: T): LinkedList<T> {
    if (index >= this.length) {
      // * insert to the end
      return this.append(value);
    } else if (index <= 0) {
      // * insert to the head
      return this.prepend(value);
    } else {
      // * insert to the index
      const newNode = new LinkListNode(value);
      const leaderNode = this.triverseToIndex(index - 1);
      if (!leaderNode) throw new Error("Node links are corrupted");

      const holdingPointer = leaderNode.next;
      leaderNode.next = newNode;
      newNode.prev = leaderNode;
      newNode.next = holdingPointer;

      this.length++;
      return this;
    }
  }

  remove(index: number): T | null {
    if (index >= this.length) {
      // * remove the last element
      return null;
    } else if (index <= 0) {
      // * remove the head element
      const head = this.head;
      if (!head) return null;

      const value = head.value;
      this.head = head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // List is now empty
      }

      this.length--;
      return value;
    } else {
      // * remove the index element
      const leaderNode = this.triverseToIndex(index - 1);
      if (!leaderNode) throw new Error("Node links are corrupted");

      const targetNode = leaderNode.next;
      if (!targetNode) return null;

      const nextNode = targetNode.next;

      if (nextNode) {
        leaderNode.next = nextNode;
        nextNode.prev = leaderNode;
      } else {
        leaderNode.next = null;
        this.tail = leaderNode; // Update tail if last element is removed
      }

      this.length--;
      return targetNode.value;
    }
  }

  reverse(): LinkedList<T> {
    if (this.length < 2) return this;

    let currentNode = this.head;
    let prevNode: LinkListNode<T> | null = null;
    this.tail = this.head;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
    return this;
  }

  getList(): Array<T> {
    const array: Array<T> = [];
    let currentNode: LinkListNode<T> | null = this.head;
    // console.log(currentNode);

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
      // console.log(currentNode);
    }

    return array;
  }
}

const myLinkedList = new LinkedList<number>(10);
myLinkedList.append(5);
console.log(myLinkedList.getList());
// console.log(myLinkedList);

myLinkedList.prepend(7);
console.log(myLinkedList.getList());
// console.log(myLinkedList);

myLinkedList.insert(999, 999);
console.log(myLinkedList.getList());
// console.log(myLinkedList);

myLinkedList.insert(0, 99);
console.log(myLinkedList.getList());
// console.log(myLinkedList);

let removedElem = myLinkedList.remove(3);
console.log({ currentList: myLinkedList.getList(), removedElem });
// console.log(myLinkedList);

removedElem = myLinkedList.remove(0);
console.log({ currentList: myLinkedList.getList(), removedElem });
// console.log(myLinkedList);

myLinkedList.reverse();
console.log(myLinkedList.getList());
myLinkedList.getList();
