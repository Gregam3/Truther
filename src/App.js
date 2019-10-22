import React, { Component } from 'react';
import Node from './Node';
import { SteppedLineTo } from 'react-lineto';
import { _ } from 'lodash';

import './App.css';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.addNode();
  }

  state = {nodes: [1,2,3]};

  render() {
    console.log('rendered');

    return <div>
      <button onClick={() => this.addNode()}>Add Node</button>
       {this.state.nodes.map(node => node)}
      </div>
  }

  addNode() {
    console.log('added node', this.state.nodes)
    let nodes = this.state.nodes;
    nodes.push(<Node title={Math.random().toFixed(2)}></Node>);
    this.setState({nodes});
  }
}