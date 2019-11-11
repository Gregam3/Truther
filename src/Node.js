import React from 'react';
import Draggable from 'react-draggable';
import _ from 'lodash';
import CustomContext from './CustomContext';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;

document.addEventListener('contextmenu', event => event.preventDefault())
const TRANSLATE_PATTERN = /translate\(([0-9]*),([0-9]*)\)/i

export default class Node extends React.Component {

    menu = [{ "label": "Item 1" }, { "label": "Menu item 2" }]

    constructor(props) {
        super(props);
        console.log(props)
        this.state = { title: props.title };
    }

    handleDrag = data => {
        const translateValue = _.get(data, 'target.parentElement.attributes.transform.value');

        if (translateValue !== undefined) {
            const translateMatch = translateValue.match(TRANSLATE_PATTERN);
            console.log(translateMatch)

            if (translateMatch !== null) { }
            this.setState({
                translate: {
                    x: Number(translateMatch[1]), y: Number(translateMatch[2])
                }
            });
        }
    }


    render() {
        return <div x>
            <Draggable onDrag={this.handleDrag}>
                <svg height={RADIUS * 2.35} width={RADIUS * 2.35} className="A">
                    <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke={'red'} fill={'red'} className="node" />
                    <text x={CENTER} y={CENTER} fill="black">{this.state.title}</text>
                </svg>
            </Draggable>
            <CustomContext items={this.menu} position={this.state.translate}></CustomContext>
        </div>
    }
}