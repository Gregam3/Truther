import React from 'react';
import Draggable from 'react-draggable';
import { _ } from 'lodash';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

export default class Node extends React.Component {

    state = {};

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {title: props.title};
    }

    handleDrag = data => {

        console.log(_.get(data, 'target.parentElement.transform.animVal[0].matrix'));
    }

    render() {
        return <Draggable onDrag={this.handleDrag}>
            <svg height={RADIUS * 2.35} width={RADIUS * 2.35} className="A">
                <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke={'red'} fill={'red'} className="node" />
                <text x={CENTER} y={CENTER} fill="black">{this.state.title}</text>
            </svg>
        </Draggable>
    }
}