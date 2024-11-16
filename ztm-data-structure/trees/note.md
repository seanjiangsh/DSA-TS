# Trees

## Binary Tree

### The total nodes of each level in a perfect binary tree:

- Level 1: 2^1 - 1 = 1
- Level 2: 2^2 - 1 = 3
- Level 3: 2^3 - 1 = 7
- ...
- Level h(height): 2^h - 1

Given the total number of nodes ($N$) in a perfect binary tree, we can express the height ($h$) in terms of ($N$):

$N = 2^h - 1$

Solving for ($h$):

$h = \log_2(N + 1)$

For large ($N$), the height ($h$) is approximately:

$\log_2(N)$.

## Binary Search Tree

### remove() explained:

Certainly! Visualizing the `remove` function can make it much clearer. Let’s walk through an example of removing nodes in different cases from a Binary Search Tree (BST). We’ll illustrate each step.

Let’s start with a BST that looks like this:

```
        10
       /  \
      5    15
     / \   / \
    3   7 13  20
             /
            18
```

We’ll explore removing nodes in each of the three cases: no children, one child, and two children.

#### Case 1: Removing a Node with No Children

**Example**: Remove `3`

1. Start by searching for the node `3`. We find `3` as the left child of `5`.
2. Since `3` has no children (it’s a leaf), we simply remove it by setting the `left` pointer of its parent (`5`) to `null`.

The tree after removing `3`:

```
        10
       /  \
      5    15
       \   / \
        7 13  20
             /
            18
```

#### Case 2: Removing a Node with One Child

**Example**: Remove `20`

1. Search for the node `20`. We find it as the right child of `15`.
2. Since `20` has only one child (`18`), we remove `20` by connecting its parent (`15`) directly to `20`’s child (`18`).

The tree after removing `20`:

```
        10
       /  \
      5    15
       \   / \
        7 13  18
```

#### Case 3: Removing a Node with Two Children

**Example**: Remove `10`

1. Search for the node `10`, which is the root of the tree.
2. Since `10` has two children, we need to find its **in-order successor** (the smallest node in the right subtree).
   - The right subtree of `10` starts at `15`, and the leftmost node in this subtree is `13`. So `13` is the in-order successor of `10`.
3. Replace `10` with `13`:
   - The root `10` is replaced by `13`.
   - We then need to reconnect `13`’s original parent (`15`) to bypass `13` (we set `15`'s left child to `null` because `13` has no left child).

The tree after removing `10`:

```
        13
       /  \
      5    15
       \     \
        7     18
```

This series of steps ensures that after each removal, the BST properties are preserved. Here’s a summary of how each case was handled:

- **No children**: Disconnect the node.
- **One child**: Link the parent directly to the child of the removed node.
- **Two children**: Find the in-order successor, replace the node with it, and adjust pointers to maintain structure.

## Rotations of AVL Tree

### 1. Left-Left (LL) Rotation

Occurs when a node is inserted into the **left subtree of the left child** of an unbalanced node. This makes the tree "left-heavy."

**Example**: Inserting `2` causes an LL imbalance at node `3`.

```
    3                   2
   /                   / \
  2        =>         1   3
 /
1
```

**Solution**: Perform a **right rotation** on node `3`. The tree becomes balanced as node `2` moves up.

### 2. Right-Right (RR) Rotation

Occurs when a node is inserted into the **right subtree of the right child** of an unbalanced node. This makes the tree "right-heavy."

**Example**: Inserting `6` causes an RR imbalance at node `4`.

```
  4                      5
   \                    / \
    5      =>          4   6
     \
      6
```

**Solution**: Perform a **left rotation** on node `4`. Node `5` moves up to balance the tree.

### 3. Left-Right (LR) Rotation

Occurs when a node is inserted into the **right subtree of the left child** of an unbalanced node. This creates a "zig-zag" shape on the left.

**Example**: Inserting `3` causes an LR imbalance at node `5`.

```
      5                  5                    4
     /                  /                    / \
    2      =>         4         =>         2   5
     \               /
      4             2
     /
    3
```

```
      5
     /
    2
     \
      4
     /
    3
```

**Solution**: First, perform a **left rotation** on `2` to straighten the left subtree, and then perform a **right rotation** on `5` to balance the tree.

### 4. Right-Left (RL) Rotation

Occurs when a node is inserted into the **left subtree of the right child** of an unbalanced node. This creates a "zig-zag" shape on the right.

**Example**: Inserting `4` causes an RL imbalance at node `2`.

```
  2                     2                     3
   \                     \                   / \
    5        =>          3        =>        2   5
   /                       \
  3                         5
   \
    4
```

**Solution**: First, perform a **right rotation** on `5` to straighten the right subtree, and then perform a **left rotation** on `2` to balance the tree.

### Summary of Rotations

- **LL (Left-Left)**: Right rotation.
- **RR (Right-Right)**: Left rotation.
- **LR (Left-Right)**: Left rotation, then right rotation.
- **RL (Right-Left)**: Right rotation, then left rotation.

Each of these rotations adjusts the tree structure to maintain balance, keeping the AVL tree efficient for all operations.

## Binary Heap vs. Sorting algorithm

Using a sorting algorithm to retrieve the minimum element from an array is less efficient than using a binary heap when repeatedly accessing the minimum. Here’s why:

### Efficiency of Sorting vs. Binary Heap

1. **Sorting Complexity**:

   - Even the fastest general-purpose sorting algorithms, like **Quicksort**, **Mergesort**, or **Heapsort**, have a time complexity of \(O(n \log n)\).
   - Sorting the array each time to retrieve the minimum element would require \(O(n \log n)\) for every operation, which becomes costly with repeated calls.

2. **Binary Heap Complexity**:
   - In a **Min-Heap**, the smallest element is always at the root, and **accessing it is \(O(1)\)**.
   - Inserting a new element or extracting the minimum (removing it) both require **\(O(\log n)\)** due to the heap’s balancing operations.
   - Therefore, using a binary heap to repeatedly get the minimum element is more efficient, as each operation only takes \(O(\log n)\) rather than \(O(n \log n)\).

### When Sorting Could Be Useful

Sorting the array once upfront could be beneficial if you:

- Only need a **one-time minimum or maximum** and then don't need further operations.
- Are performing **one-time batch operations** on the data (e.g., finding all minimums or maximums at once).

### Example Comparison

Imagine you have an array of 1M elements and want to retrieve the minimum value multiple times while adding new elements:

- **Binary Heap**: For each insertion or minimum retrieval, the cost is \(O(\log n)\). Over many operations, this is manageable and efficient.
- **Sorting**: Sorting initially takes \(O(n \log n)\). If we re-sort the array with each new element, this becomes highly inefficient compared to heap operations.

### Summary

Using a binary heap for repeated minimum/maximum retrievals is far more efficient than sorting each time, especially as the size of the data grows and with frequent updates.

## Trie

A **Trie** (pronounced "try") is a tree-like data structure that is highly efficient for storing and retrieving strings, especially useful for applications involving dictionaries, prefix-based search, or auto-completion systems. Each node in a Trie represents a character of the stored strings, and the tree branches based on each character, allowing for quick retrieval of words or prefixes.

### Structure of a Trie

- **Nodes and Characters**: Each node in a Trie represents a single character in a string. The paths from the root to any node represent prefixes of strings in the Trie.
- **Edges**: An edge connects two nodes and corresponds to a character in a word.
- **End of Word Marker**: To distinguish between a prefix and a complete word, each node has an indicator (often a Boolean) to mark if it completes a word.

### Trie Properties

- **Efficient Prefix Search**: Tries allow for quick prefix searches because they branch based on characters. You only need to traverse one level per character, making prefix lookups extremely fast.
- **Space Efficiency**: Tries can be space-efficient for storing a large set of words that share prefixes, as common prefixes are stored only once.

### Operations in a Trie

1. **Insert**: Add a word character by character. If a character node doesn’t exist, create a new node for it.
2. **Search**: Traverse the Trie along the path defined by the characters of the word. If you reach the end of the word path and find the end marker, the word is present.
3. **Starts With (Prefix Search)**: Similar to search, but you don’t need to reach a word’s end marker; just follow the characters of the prefix.

### Example

Let’s insert the words `"cat"`, `"car"`, and `"dog"` into a Trie. The resulting structure would look like this:

```
         (root)
        /      \
       c        d
      / \        \
     a   a        o
    /     \        \
   t       r        g
(end)    (end)    (end)
```

- Here, `"cat"` and `"car"` share the prefix `"ca"`.
- Nodes are created only as needed, making the Trie efficient in both structure and search.

### Explanation of Core Functions

1. **Insert**: Inserts a word into the Trie by creating new nodes as needed for each character and marking the end of the word.
2. **Search**: Searches for a word by traversing the nodes that match each character. If it finds the end marker at the final character, the word exists in the Trie.
3. **Starts With**: Checks for the presence of a prefix by traversing the Trie nodes, following each character in the prefix.

### Applications of Tries

Tries are highly useful for:

- **Autocomplete**: Quickly retrieving all words that start with a given prefix.
- **Spell-checking and Dictionary Lookup**: Efficiently checking if a word is valid in a dictionary.
- **IP Routing**: Used in networking to store routing tables, as prefixes often represent hierarchical paths.
- **DNA Sequence Matching**: In bioinformatics, where sequences often share common prefixes.

### Performance

The time complexity for Trie operations in TypeScript (or any language) depends primarily on the length of the word or prefix \( m \) rather than the total number of words \( n \) in the Trie. Here’s an overview of the time complexity for the core operations in a Trie:

#### 1. **Insert Operation**

- **Time Complexity**: \( O(m) \), where \( m \) is the length of the word being inserted.
- **Explanation**: To insert a word, we traverse through \( m \) characters, creating nodes if they do not exist. Each character requires constant-time operations, making the complexity linear with respect to the length of the word.

#### 2. **Search Operation**

- **Time Complexity**: \( O(m) \), where \( m \) is the length of the word being searched.
- **Explanation**: We traverse \( m \) characters, checking each character node in sequence. If a node doesn’t exist at any step, the search fails immediately. Otherwise, if all \( m \) nodes exist and the end marker is found, the word exists in the Trie.

#### 3. **Starts With Operation (Prefix Search)**

- **Time Complexity**: \( O(m) \), where \( m \) is the length of the prefix being searched.
- **Explanation**: Similar to `search`, we traverse \( m \) characters to determine if a path exists for the given prefix. Since we don’t need to find an end marker, the operation is slightly simpler but still \( O(m) \).

#### 4. **Space Complexity**

- **Space Complexity**: \( O(n \times m) \), where \( n \) is the number of words and \( m \) is the average length of the words.
- **Explanation**: Each unique character in a word creates a unique node in the Trie. For large datasets with many unique prefixes, this can lead to high memory usage. However, common prefixes are only stored once, which reduces space compared to storing each word separately.

#### Summary

| Operation   | Time Complexity     |
| ----------- | ------------------- |
| Insert      | \( O(m) \)          |
| Search      | \( O(m) \)          |
| Starts With | \( O(m) \)          |
| Space       | \( O(n \times m) \) |

#### Comparison with Other Data Structures

For word or prefix searches, the Trie is more efficient than data structures like arrays or binary search trees, which have \( O(n \log n) \) search complexity (since each word must be compared in its entirety). Tries excel at handling word-based datasets, especially for prefix-based queries, due to their \( O(m) \) operation time.
