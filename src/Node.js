import React from 'react';
import Draggable from 'react-draggable';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;


export class Node extends React.Component {

    render() {
        return <Draggable>
        <svg> 
          <circle cx={50} cy={50} r={50} stroke={'red'} fill={'red'} className="node" /></svg></Draggable>
    }
}