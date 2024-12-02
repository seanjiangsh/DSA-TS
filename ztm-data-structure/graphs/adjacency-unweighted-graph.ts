class AdjacencyUndirectedGraph {
  private numberOfNodes = 0;
  private adjacentList: { [key: string]: Array<string> } = {};

  constructor() {
    // Do nothing
  }

  addVertex(node: string) {
    const currentNodes = Object.keys(this.adjacentList);
    if (currentNodes.includes(node)) return;

    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1: string, node2: string) {
    const n1 = this.adjacentList[node1];
    const n2 = this.adjacentList[node2];
    if (!n1?.includes(node2)) n1.push(node2);
    if (!n2?.includes(node1)) n2.push(node1);
  }

  graph() {
    const nodes = Object.keys(this.adjacentList);
    for (const node of nodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      for (const vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myAdjacencyUndirectedGraph = new AdjacencyUndirectedGraph();
myAdjacencyUndirectedGraph.addVertex("0");
myAdjacencyUndirectedGraph.addVertex("1");
myAdjacencyUndirectedGraph.addVertex("2");
myAdjacencyUndirectedGraph.addVertex("3");
myAdjacencyUndirectedGraph.addVertex("4");
myAdjacencyUndirectedGraph.addVertex("5");
myAdjacencyUndirectedGraph.addVertex("6");

myAdjacencyUndirectedGraph.addEdge("3", "1");
myAdjacencyUndirectedGraph.addEdge("3", "4");
myAdjacencyUndirectedGraph.addEdge("4", "2");
myAdjacencyUndirectedGraph.addEdge("4", "5");
myAdjacencyUndirectedGraph.addEdge("1", "2");
myAdjacencyUndirectedGraph.addEdge("1", "0");
myAdjacencyUndirectedGraph.addEdge("0", "2");
myAdjacencyUndirectedGraph.addEdge("6", "5");

myAdjacencyUndirectedGraph.graph();
