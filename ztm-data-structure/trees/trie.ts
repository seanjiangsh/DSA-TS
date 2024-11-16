class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }
    current.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word: string): boolean {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char)!;
    }
    return current.isEndOfWord;
  }

  // Check if any word in the Trie starts with the given prefix
  startsWith(prefix: string): boolean {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char)!;
    }
    return true;
  }
}

// Usage Example
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");

console.log(trie.search("car")); // Output: true
console.log(trie.search("can")); // Output: false
console.log(trie.startsWith("ca")); // Output: true
console.log(trie.startsWith("do")); // Output: true
console.log(trie.startsWith("bat")); // Output: false
