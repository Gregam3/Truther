import React from 'react';
import './App.css';
import {Node} from './Node';
import * as d3 from 'd3';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Node  />
          <Node  />
        </header>
      </div>);
  }
}

export default App;
