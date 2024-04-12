"use client";
import React from "react";
import { GraphCanvas } from "reagraph";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Graph as GraphClass } from "./GraphClass";
// // target requires source
// interface Edge {
//   id: number;
//   source: Node | null;
//   target: Node | null;
// }

// // initial raw materials or intermediate materials
// interface Node {
//   id: number;
//   label: string;
//   child: Node | null;
//   parent: Node | null;
//   incomingEdges: Edge[];
//   outgoingEdges: Edge[];
//   cost: number;
// }

// Example usage
const TestGraph = new GraphClass<string>();

const nodeA = TestGraph.addNode(
  "Package propellors, Ghost body components and rifle case together",
  1,
  "Anduril order #1"
);
const nodeB = TestGraph.addNode(
  "Balance test propellor",
  1,
  "Finished Propellor"
);
const nodeC = TestGraph.addNode(
  "Polish freshly pressed propellor",
  1,
  "Untested propellor"
);
const nodeD = TestGraph.addNode(
  "Press propellor layers together",
  1,
  "Unpolished propellor"
);
const nodeE = TestGraph.addNode(
  "Layer propellor-shaped carbon fiber sheets",
  1,
  "Unpressed propellor"
);
const nodeF = TestGraph.addNode(
  'Cut propellor shaped "stickers" of carbon fiber',
  1,
  "Propellor shaped stickers"
);
const nodeG = TestGraph.addNode(
  "Roll out enough carbon fiber",
  1,
  "Rolls of carbon fiber sheets"
);

const nodeI = TestGraph.addNode("Mill aluminum for the stands", 1, "Stands");
const nodeJ = TestGraph.addNode(
  "Fetch aluminum blocks for the stand",
  1,
  "Aluminum block for stands"
);

const nodeK = TestGraph.addNode(
  "Mill aluminum for the main body",
  1,
  "Ghost Main Body"
);
const nodeL = TestGraph.addNode(
  "Fetch aluminum block for the main body",
  1,
  "Aluminum block for main body"
);

const nodeM = TestGraph.addNode("Mill aluminum for the tail", 1, "Ghost Tail");
const nodeN = TestGraph.addNode(
  "Fetch aluminum blocks for the tail",
  1,
  "Aluminum block for tail"
);

const nodeP = TestGraph.addNode(
  "Mill aluminum for the payload cartridges",
  1,
  "Payload Cartridges"
);
const nodeQ = TestGraph.addNode(
  "Fetch aluminum blocks for the payload cartridges",
  1,
  "Aluminum block for payload cartridges"
);

const nodeR = TestGraph.addNode(
  "Join rifle casing top and bottom",
  1,
  "Rifle case"
);
const nodeS = TestGraph.addNode(
  "Connect base liner and shell",
  1,
  "Base section of rifle case"
);
const nodeT = TestGraph.addNode(
  "Mill aluminum for base shell",
  1,
  "Base shell of rifle case"
);
const nodeU = TestGraph.addNode(
  "Fetch aluminum blocks for the base shell",
  1,
  "Aluminum block for base shell"
);
const nodeV = TestGraph.addNode(
  "Cut foam sheets for base of rifle case",
  1,
  "Base foam outline of rifle case"
);
const nodeW = TestGraph.addNode("Fetch foam sheets", 1, "Foam sheets");

const nodeX = TestGraph.addNode(
  "Connect cover liner and shell",
  1,
  "Cover section of rifle case"
);

const nodeY = TestGraph.addNode(
  "Mill aluminum for cover shell",
  1,
  "Aluminum shell for rifle's cover case"
);

const nodeZ = TestGraph.addNode(
  "Fetch aluminum blocks for the cover shell",
  1,
  "Aluminum block for cover shell"
);

const nodeAA = TestGraph.addNode(
  "Cut foam sheets for cover of rifle case",
  1,
  "Cover foam outline of rifle case"
);
const nodeAB = TestGraph.addNode("Fetch foam sheets", 1, "Foam sheets");

TestGraph.addEdge(nodeB, nodeA);
TestGraph.addEdge(nodeI, nodeA);
TestGraph.addEdge(nodeK, nodeA);
TestGraph.addEdge(nodeM, nodeA);
TestGraph.addEdge(nodeP, nodeA);
TestGraph.addEdge(nodeR, nodeA);

TestGraph.addEdge(nodeC, nodeB);
TestGraph.addEdge(nodeD, nodeC);
TestGraph.addEdge(nodeE, nodeD);
TestGraph.addEdge(nodeF, nodeE);
TestGraph.addEdge(nodeG, nodeF);
TestGraph.addEdge(nodeJ, nodeI);
TestGraph.addEdge(nodeL, nodeK);
TestGraph.addEdge(nodeN, nodeM);
TestGraph.addEdge(nodeQ, nodeP);

TestGraph.addEdge(nodeS, nodeR);
TestGraph.addEdge(nodeX, nodeR);
TestGraph.addEdge(nodeT, nodeS);
TestGraph.addEdge(nodeV, nodeS);
TestGraph.addEdge(nodeU, nodeT);
TestGraph.addEdge(nodeW, nodeV);
TestGraph.addEdge(nodeAA, nodeX);
TestGraph.addEdge(nodeY, nodeX);
TestGraph.addEdge(nodeAB, nodeAA);
TestGraph.addEdge(nodeZ, nodeY);

export default function Graph() {
  console.log("GRAPH");
  console.log(TestGraph);

  return (
    <div className="relative w-full h-full">
      <GraphCanvas
        // onNodeClick={n => {
        //   console.log("node just clicked")
        //   console.log(n)
        // }}
        onEdgeClick={(e) => {
          console.log("edge just clicked");
          console.log(e);
        }}
        draggable={true}
        sizingType={"pagerank"}
        nodes={
          //   [
          //   {
          //     id: 'n-1',
          //     label: '1'
          //   },
          //   {
          //     id: 'n-2',
          //     label: '2'
          //   }
          // ]
          TestGraph.getNodes().map((node) => {
            return {
              id: node.result,
              label: node.result,
              data: node,
            };
          })
        }
        edges={
          //   [
          //   {
          //     id: '1->2',
          //     source: 'n-1',
          //     target: 'n-2',
          //     label: 'Edge 1-2'
          //   }
          // ]
          // []
          TestGraph.getEdges().map((edge, idx) => {
            return {
              id: idx.toString(),
              source: `${edge.start.result}`,
              target: `${edge.end.result}`,
              label: `${edge.start.value}`,
              data: edge,
            };
          })
        }
        contextMenu={({ data, onClose }) => (
          // <div className="bg-background w-[300px] p-[5px] rounded-md text-center">
          //   <h1>{data.label}</h1>

          //   <div className="w-full border" />
          //   <button onClick={onClose}>Close Menu</button>
          // </div>
          <Card className="min-w-[300px]">
            <CardHeader>
              <CardTitle>{data.label}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <button onClick={onClose}>Close Menu</button>
            </CardFooter>
          </Card>
        )}
      />
    </div>
  );
}
