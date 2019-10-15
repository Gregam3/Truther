import React from 'react';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;


export class Node extends React.Component {
    state = {
        x: CENTER, y: CENTER, radius: RADIUS,
        color: "red", strokeWidth: 0, title: "Example"
    }

    render() {
        return <div><svg height={RADIUS * 2.35} width={RADIUS * 2.35}>
            <circle cx={this.state.x} cy={this.state.y} r={this.state.radius} stroke={this.state.color} 
                    stroke-width={this.state.strokeWidth} fill={this.state.color} ref="node"/>
                    <text x={CENTER - 40} y={CENTER} fill="black">{this.state.title}</text>
        </svg> </div>
    }
}