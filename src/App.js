import React, { Component } from 'react';
import Node from './Node';
import './App.css';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

let nodeCount = 1;



export default class App extends Component {

  constructor(props) {
    super(props);
    this.addNode();
  }

  state = {nodes: []};

  render() {
    console.log('rendered');

    return <div>
      <button onClick={() => this.addNode(nodeCount)}>Add Node</button>
       {this.state.nodes.map(node => node)}
      </div>
  }

  addNode(title) {
    console.log('added node', this.state.nodes)
    let nodes = this.state.nodes;
    nodes.push(<Node title={title}/>);
    this.setState({nodes});
  }
}