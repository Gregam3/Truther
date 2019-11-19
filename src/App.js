import React, { Component } from 'react';
import Node from './Node';
import './App.css';

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
      <button onClick={() => this.addNode(nodeCount)}>Add Node</button>
      {this.state.nodes.map(node =>
        <Node
          title={node.title}
          positionOffset={node.positionOffset}
          contextMenuVisible={node.contextMenuVisible}
          onContextMenu={e =>
            this.flipContextMenuVisibility(node.nodeIndex)
          }
        />)}
    </div>
  }

  addNode(title) {
    console.log('added node', this.state.nodes)
    let nodes = this.state.nodes;
    nodes.push({
      nodeIndex: nodeCount++,
      title,
      contextMenuVisible: false,
      positionOffset: {
        x: 0, y: 100 * nodes.length
      }
    });
    this.setState({ nodes });
  }

  flipContextMenuVisibility(nodeIndex) {
    let nodes = this.state.nodes;
    nodes[nodeIndex].contextMenuVisible = !nodes[nodeIndex].contextMenuVisible;
    this.setState({ nodes });
  }
}