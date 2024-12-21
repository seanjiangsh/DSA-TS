// 61. Rotate List

// Medium
// Topics
// Companies

// Given the head of a linked list, rotate the list to the right by k places.

// Constraints:

//  The number of nodes in the list is in the range [0, 500].
//  -100 <= Node.val <= 100
//  0 <= k <= 2 * 109

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// * can't test this, so just copy from the others for now
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  if (k === 0) return head;

  // get the length of the list
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // rotation count
  const rotateCount = k % length;
  if (rotateCount === 0) return head;

  // find the new tail (the node before the new head)
  let newTail = head;
  for (let i = 0; i < length - rotateCount - 1; i++) {
    newTail = newTail.next!;
  }

  // set the new head and adjust the connections
  let newHead = newTail.next!;
  newTail.next = null;
  tail.next = head;

  return newHead;
}

// Example 1:

const head = [1, 2, 3, 4, 5];
const k = 2;
// Output: [4,5,1,2,3]

// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// console.log(rotateRight(head, k));
