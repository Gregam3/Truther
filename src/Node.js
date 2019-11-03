import React from 'react';
import Draggable from 'react-draggable';
import _ from 'lodash';
import CustomContext from './CustomContext';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

document.addEventListener('contextmenu', event => event.preventDefault())

export default class Node extends React.Component {

    menu = [{ "label": "Item 1" }, { "label": "Menu item 2" }]

    constructor(props) {
        super(props);
        console.log(props)
        this.state = { title: props.title };
    }

    handleDrag = data => {
        const translateValue = _.get(data, 'target.parentElement.attributes.transform');
        console.log(translateValue );
        this.setState({ svgPosition: translateValue });
    }

    render() {
        return <div>
            <Draggable onDrag={this.handleDrag}>
                <svg height={RADIUS * 2.35} width={RADIUS * 2.35} className="A">
                    <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke={'red'} fill={'red'} className="node" />
                    <text x={CENTER} y={CENTER} fill="black">{this.state.title}</text>
                </svg>
            </Draggable>
            <CustomContext items={this.menu} transform={this.state.translateValue}></CustomContext>
        </div>
    }
}