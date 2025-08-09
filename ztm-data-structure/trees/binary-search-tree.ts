export class BinarySearchTreeNode<T> {
  left: BinarySearchTreeNode<T> | null;
  right: BinarySearchTreeNode<T> | null;
  value: T;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export default class BinarySearchTree<T> {
  public root: BinarySearchTreeNode<T> | null = null;

  constructor() {
    // Do nothing
  }

  traverse(node: BinarySearchTreeNode<T> | null = this.root) {
    if (!node) return;
    const left = node.right ? this.traverse(node.left) : null;
    const right = node.right ? this.traverse(node.right) : null;
    const tree = { left, right, value: node.value };
    return tree;
  }

  insert(value: T): BinarySearchTree<T> {
    const newNode = new BinarySearchTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode: BinarySearchTreeNode<T> = this.root;
    if (value === currentNode.value) return this;

    while (true) {
      const nodeValue = currentNode.value;
      if (value < nodeValue) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value: T): BinarySearchTreeNode<T> | null {
    if (!this.root) return null;

    let currentNode: BinarySearchTreeNode<T> = this.root;

    while (true) {
      const { left, right, value: nodeValue } = currentNode;

      if (value === nodeValue) {
        return currentNode;
      } else if (value < nodeValue && left) {
        currentNode = left;
      } else if (value > nodeValue && right) {
        currentNode = right;
      } else {
        return null;
      }
    }
  }

  // * recursive loopup (while loop is better)
  // lookup(
  //   value: T,
  //   node: BinarySearchTreeNode<T> | null = this.root
  // ): BinarySearchTreeNode<T> | null {
  //   if (!node) return null;

  //   const currentNode =
  //   const { left, right, value: nodeValue } = node;

  //   if (value === nodeValue) {
  //     return node;
  //   } else if (value < nodeValue && left) {
  //     return this.lookup(value, left);
  //   } else if (value > nodeValue && right) {
  //     return this.lookup(value, right);
  //   } else {
  //     return null;
  //   }
  // }

  remove(value: T): BinarySearchTreeNode<T> | null {
    if (!this.root) return null;

    // Start from the root and initialize parentNode to null
    let currentNode: BinarySearchTreeNode<T> | null = this.root;
    let parentNode: BinarySearchTreeNode<T> | null = null;

    // Search for the node to remove, tracking its parent
    while (currentNode && currentNode.value !== value) {
      parentNode = currentNode;
      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }
    // If we didn't find the node, return false
    if (!currentNode) return null;

    const { left, right } = currentNode;
    // Case 1: Node to be deleted has no child
    if (!left && !right) {
      if (!parentNode) {
        // The node to delete is the root
        this.root = null;
      } else if (parentNode.left === currentNode) {
        // Disconnect from the parent's left pointer
        parentNode.left = null;
      } else {
        // Disconnect from the parent's right pointer
        parentNode.right = null;
      }
    }
    // Case 2: Node to be deleted has 1 child
    else if (!left || !right) {
      // Get the non-null child
      const childNode = left || right;
      if (!parentNode) {
        // Node to delete is the root
        this.root = childNode; // Set root to the child node
      } else if (parentNode.left === currentNode) {
        // Attach child node to the parent's left pointer
        parentNode.left = childNode;
      } else {
        // Attach child node to the parent's right pointer
        parentNode.right = childNode;
      }
    }
    // Case 3: Node to be deleted has 2 child
    else {
      // Find the in-order successor (smallest node in the right subtree)
      let successorParent: BinarySearchTreeNode<T> = currentNode;
      let successor: BinarySearchTreeNode<T> = currentNode.right!;

      // Move left until we find the smallest node in the right subtree
      while (successor?.left) {
        successorParent = successor;
        successor = successor.left;
      }

      // If the successor isn't the immediate right child
      if (successorParent !== currentNode) {
        // Reconnect the successor's right child (if any) to successor's parent
        successorParent.left = successor.right;
        // Successor replaces currentNode, so it takes over the right subtree
        successor.right = currentNode.right;
      }
      // Complete the connection to currentNode's left subtree
      successor.left = currentNode.left;

      // If the node to delete is the root, make successor the new root
      if (!parentNode) {
        this.root = successor;
      } else if (parentNode.left === currentNode) {
        // Replace left child with successor
        parentNode.left = successor;
      } else {
        // Replace right child with successor
        parentNode.right = successor;
      }
    }

    return currentNode;
  }

  graph(
    node: BinarySearchTreeNode<T> | null = this.root,
    prefix: string = "",
    isLeft: boolean = true
  ): void {
    if (node === null) {
      console.log("Empty tree");
      return;
    }

    if (node.right !== null) {
      this.graph(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

    if (node.left !== null) {
      this.graph(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  breadthFirstSearch(): Array<T> {
    const queue: Array<BinarySearchTreeNode<T>> = [];
    const result: Array<T> = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode) {
        result.push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    return result;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(9)
  .insert(4)
  .insert(6)
  .insert(20)
  .insert(170)
  .insert(15)
  .insert(1)
  .insert(180);
let tree = binarySearchTree.traverse();
// console.log(binarySearchTree.traverse());
binarySearchTree.graph();

// let removedNode = binarySearchTree.remove(170);
// console.log(removedNode);
// binarySearchTree.graph();

let removedNode = binarySearchTree.remove(9);
console.log(removedNode);
binarySearchTree.graph();

// tree = binarySearchTree.traverse();
// console.log(JSON.stringify(tree, null, 2));

// console.log(binarySearchTree.lookup(20));
// console.log(binarySearchTree.lookup(5));
//     9
//  4     20
// 1  6  15  170
//            180

console.log(binarySearchTree.breadthFirstSearch());
// [15, 4, 20, 1, 6, 170, 180]
