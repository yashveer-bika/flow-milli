 export class Node<T> {
  value: T;
  cost: number;
  edges: Edge<T>[];
  result: string;

  constructor(value: T, cost: number, result: string) {
    this.value = value;
    this.cost = cost;
    this.edges = [];
    this.result = result;
  }
}

 export class Edge<T> {
  start: Node<T>;
  end: Node<T>;

  constructor(start: Node<T>, end: Node<T>) {
    this.start = start;
    this.end = end;
  }
}

 export class Graph<T> {
  adjacencyList: Map<Node<T>, Set<Node<T>>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value: T, cost: number, result: string): Node<T> {
    const newNode = new Node(value, cost, result);
    this.adjacencyList.set(newNode, new Set());
    return newNode;
  }

  addEdge(start: Node<T>, end: Node<T>): void {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw new Error("Nodes do not exist in the TestGraph");
    }
    this.adjacencyList.get(start)!.add(end);

    const newEdge = new Edge(start, end)
    start.edges.push(newEdge)
    end.edges.push(newEdge)

  

    // For undirected TestGraph, you can add the reverse edge as well
    // this.adjacencyList.get(end)!.add(start);
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys())
  }

  getEdges() {
    return Array.from(new Set(this.getNodes().flatMap(node => node.edges)))
  }
}
