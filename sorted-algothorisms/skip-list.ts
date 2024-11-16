class SkipListNode {
  value: number;
  next: SkipListNode[];

  // Constructor: O(level)
  constructor(value: number, level: number) {
    this.value = value;
    this.next = new Array(level).fill(null);
  }
}

class SkipList {
  private head: SkipListNode;
  private maxLevel: number;
  private probability: number;

  // Constructor: O(maxLevel)
  constructor(maxLevel: number = 16, probability: number = 0.5) {
    this.head = new SkipListNode(-Infinity, maxLevel);
    this.maxLevel = maxLevel;
    this.probability = probability;
  }

  // randomLevel Function: O(1) on average
  private randomLevel(): number {
    let level = 1;
    while (Math.random() < this.probability && level < this.maxLevel) {
      level++;
    }
    return level;
  }

  // insert Function: O(log n)
  insert(value: number): void {
    const update = new Array(this.maxLevel).fill(this.head);
    let current = this.head;

    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    const level = this.randomLevel();
    const newNode = new SkipListNode(value, level);

    for (let i = 0; i < level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  // getAllElements Function: O(n)
  getAllElements(): number[] {
    const elements: number[] = [];
    let current = this.head.next[0];
    while (current) {
      elements.push(current.value);
      current = current.next[0];
    }
    return elements;
  }
}

// Example usage
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(1);
skipList.insert(2);
console.log(skipList.getAllElements()); // Output: [1, 2, 3]
