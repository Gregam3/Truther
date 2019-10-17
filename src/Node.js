import React from 'react';
import Draggable from 'react-draggable';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

export default class Node extends React.Component {

    state = {};

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {title: props.title};
    }

    render() {
        return <Draggable>
            <svg height={RADIUS * 2.35} width={RADIUS * 2.35}>
                <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke={'red'} fill={'red'} className="node" />
                <text x={CENTER} y={CENTER} fill="black">{this.state.title}</text>
            </svg>
        </Draggable>
    }
}