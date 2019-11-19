import React, { Component } from 'react';
import Node from './Node';
import './App.css';
import { Line } from 'react-lineto';


const RADIUS = 40;
const CENTER = RADIUS * 1.25;

let nodeCount = 0;

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.addNode();
  }

  state = { nodes: [] };

  render() {
    console.log('rendered nodes');

    return <div>
      <Line x0={1} y0={0} x1={400} y1={400} />

      <button onClick={() => this.addNode(nodeCount)}>Add Node</button>
      {this.state.nodes.map(node =>
        <Node
          className={"node-" + node.nodeIndex}
          title={node.nodeIndex}
          positionOffset={node.positionOffset}
          contextMenuVisible={node.contextMenuVisible}
          onContextMenu={e =>
            this.flipContextMenuVisibility(node.nodeIndex)
          }
        />)}
        {this.state.nodes.filter(node => node.dependents.length > 0).map(dependentIndex =>
            
        )}
    </div>
  }

  addNode() {
    console.log('added node', this.state.nodes)
    let nodes = this.state.nodes;
    nodes.push({
      nodeIndex: nodeCount++,
      contextMenuVisible: false,
      positionOffset: {
        x: 0, y: 100 * nodes.length
      },
      dependents: [0]
    });
    this.setState({ nodes });
  }

  flipContextMenuVisibility(nodeIndex) {
    let nodes = this.state.nodes;
    nodes[nodeIndex].contextMenuVisible = !nodes[nodeIndex].contextMenuVisible;
    this.setState({ nodes });
  }
}