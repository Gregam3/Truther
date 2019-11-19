import React from 'react';
import Draggable from 'react-draggable';
import _ from 'lodash';
import CustomContext from './CustomContext';

const RADIUS = 40;
const CENTER = RADIUS * 1.25;
const start = {
    x: 20, y: 50
}

const TRANSLATE_PATTERN = /translate\(([0-9]*),([0-9]*)\)/i

export default class Node extends React.Component {
    menu = [{ "label": "Edit Node" }, { "label": "Connect Node" }];

    constructor(props) {
        super(props);
        this.onContextMenu = props.onContextMenu;

        this.positionOffset = {
            y: props.positionOffset.y
        };
        this.state = {
            title: props.title,
            position: {
                x: 0, y: this.positionOffset.y
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ contextMenuVisible: nextProps.contextMenuVisible });
    }


    handleDrag = data => {
        const translateValue = _.get(data, 'target.parentElement.attributes.transform.value');

        if (translateValue !== undefined) {
            const translateMatch = translateValue.match(TRANSLATE_PATTERN);

            if (translateMatch !== null) {
                this.setState({
                    position: {
                        x: Number(translateMatch[1]) + start.x, y: Number(translateMatch[2]) + start.y 
                    }
                });
            }

            console.log(this.state.position);
        }
    }

    render() {
        return <div>
            <Draggable onDrag={this.handleDrag}>
                <svg height={RADIUS * 2.35} width={RADIUS * 2.35} className="A" onContextMenu={() => this.onContextMenu()}>
                    <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke={'blue'} fill={'blue'} className="clickable" />
                    <text x={CENTER} y={CENTER} fill="black" className="clickable">{this.state.title}</text>
                </svg>
            </Draggable>
            <CustomContext items={this.menu} position={this.state.position}
                visible={this.state.contextMenuVisible}></CustomContext>
        </div>
    }
}