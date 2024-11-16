class AVLNode {
  value: number;
  left: AVLNode | null = null;
  right: AVLNode | null = null;
  height: number = 1;

  constructor(value: number) {
    this.value = value;
  }
}

class AVLTree {
  private root: AVLNode | null = null;

  // Utility function to get the height of a node
  private getHeight(node: AVLNode | null): number {
    return node ? node.height : 0;
  }

  // Utility function to calculate balance factor
  private getBalance(node: AVLNode | null): number {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Right rotate the subtree rooted with y
  private rightRotate(y: AVLNode): AVLNode {
    const x = y.left!;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    // Return new root
    console.log("rightRotate");
    return x;
  }

  // Left rotate the subtree rooted with x
  private leftRotate(x: AVLNode): AVLNode {
    const y = x.right!;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    // Return new root
    console.log("leftRotate");
    return y;
  }

  // Insert a value into the AVL tree and balance the tree if necessary
  insert(value: number): void {
    console.log(`Inserting ${value}`);
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: AVLNode | null, value: number): AVLNode {
    if (node === null) return new AVLNode(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node; // Duplicate values are not allowed in the AVL Tree
    }

    // Update height of the current node
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Check the balance factor and perform rotations if needed
    const balance = this.getBalance(node);

    // Left-Left (LL) Case
    if (balance > 1 && value < node.left!.value) {
      return this.rightRotate(node);
    }

    // Right-Right (RR) Case
    if (balance < -1 && value > node.right!.value) {
      return this.leftRotate(node);
    }

    // Left-Right (LR) Case
    if (balance > 1 && value > node.left!.value) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right-Left (RL) Case
    if (balance < -1 && value < node.right!.value) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node; // Return the unchanged node pointer
  }

  // Helper to get the node with minimum value found in the subtree rooted at node
  private minValueNode(node: AVLNode): AVLNode {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  // Remove a value from the AVL tree and balance the tree if necessary
  remove(value: number): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: AVLNode | null, value: number): AVLNode | null {
    if (!node) return null;

    // Standard BST deletion
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Node with only one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children: get the inorder successor
      const temp = this.minValueNode(node.right);
      node.value = temp.value;
      node.right = this.removeNode(node.right, temp.value);
    }

    // Update height of the current node
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Check balance factor and perform rotations if necessary
    const balance = this.getBalance(node);

    // Left-Left (LL) Case
    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }

    // Left-Right (LR) Case
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right-Right (RR) Case
    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.leftRotate(node);
    }

    // Right-Left (RL) Case
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  graph(
    node: AVLNode | null = this.root,
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
}

// Usage Example
const avl = new AVLTree();

avl.insert(5);
avl.graph();
avl.insert(2);
avl.graph();
avl.insert(4);
avl.graph();
avl.insert(10);
avl.graph();
avl.insert(15);
avl.graph();
avl.insert(20);
avl.graph();
avl.insert(13);
avl.graph();
