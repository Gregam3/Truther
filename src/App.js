import React, { Component } from 'react';
import { Node } from './Node';
import Draggable from 'react-draggable';

import './App.css';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

export default class App extends Component {

  state = {
    x: CENTER, y: CENTER, radius: RADIUS,
    color: "red", strokeWidth: 0, title: "Example"
  }

  render() {
    return <Node/>
  }
}