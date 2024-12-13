// * https://leetcode.com/problems/node-with-highest-edge-score/description/

// 2374. Node With Highest Edge Score
// Medium
// Topics
// Companies
// Hint

// You are given a directed graph with n nodes labeled from 0 to n - 1, where each node has exactly one outgoing edge.

// The graph is represented by a given 0-indexed integer array edges of length n, where edges[i] indicates that there is a directed edge from node i to node edges[i].

// The edge score of a node i is defined as the sum of the labels of all the nodes that have an edge pointing to i.

// Return the node with the highest edge score. If multiple nodes have the same edge score, return the node with the smallest index.

// Constraints:

//     n == edges.length
//     2 <= n <= 105
//     0 <= edges[i] < n
//     edges[i] != i

function edgeScore(edges: number[]): number {
  // * 1st try:
  // * time: O(n^2)
  // * space: O(n^2)
  // const n = edges.length;
  // const edgeMap = new Map<number, number>(); // * <node number, edge score>

  // // Populate edgeMap with edge scores
  // for (let i = 0; i < n; i++) {
  //   const edge = edges[i];
  //   edgeMap.set(edge, (edgeMap.get(edge) || 0) + i);
  // }
  // // Time complexity: O(n)

  // // Create an array to store nodes by their edge scores
  // const edgeArr = Array.from(
  //   { length: (n * (n - 1)) / 2 },
  //   () => [] as Array<number>
  // );
  // // Time complexity: O(n^2) (due to the array size)

  // // Populate edgeArr with nodes sorted by their edge scores
  // for (const [node, edge] of edgeMap.entries()) {
  //   edgeArr[edge] = [...edgeArr[edge], node].sort((a, b) => a - b);
  // }
  // // Time complexity: O(m * log(m)), where m is the number of unique nodes (in the worst case, m = n)

  // // Find the node with the highest edge score
  // let highestNodes = edgeArr.pop();
  // while (highestNodes) {
  //   const node = highestNodes[0];
  //   if (typeof node === "number") return node;
  //   highestNodes = edgeArr.pop();
  // }

  // * Copilot's improved solution:
  // * time: O(n)
  // * space: O(n)
  const n = edges.length;
  const scoreMap = new Map<number, number>(); // * <node number, edge score>

  // Populate edgeMap with edge scores O(n)
  for (let i = 0; i < n; i++) {
    const score = edges[i];
    scoreMap.set(score, (scoreMap.get(score) || 0) + i);
  }

  let maxScore = -1;
  let maxNode = -1;
  for (const [node, score] of scoreMap.entries()) {
    if (score > maxScore || (score === maxScore && node < maxNode)) {
      maxScore = score;
      maxNode = node;
    }
  }
  return maxNode;
}

// Example 1:

// const edges = [1, 0, 0, 0, 0, 7, 7, 5];
// Output: 7
// Explanation:
// - The nodes 1, 2, 3 and 4 have an edge pointing to node 0. The edge score of node 0 is 1 + 2 + 3 + 4 = 10.
// - The node 0 has an edge pointing to node 1. The edge score of node 1 is 0.
// - The node 7 has an edge pointing to node 5. The edge score of node 5 is 7.
// - The nodes 5 and 6 have an edge pointing to node 7. The edge score of node 7 is 5 + 6 = 11.
// Node 7 has the highest edge score so return 7.

// Example 2:

const edges = [2, 0, 0, 2];
// Output: 0
// Explanation:
// - The nodes 1 and 2 have an edge pointing to node 0. The edge score of node 0 is 1 + 2 = 3.
// - The nodes 0 and 3 have an edge pointing to node 2. The edge score of node 2 is 0 + 3 = 3.
// Nodes 0 and 2 both have an edge score of 3. Since node 0 has a smaller index, we return 0.

console.log(edgeScore(edges));
