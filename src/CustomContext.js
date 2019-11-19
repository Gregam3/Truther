import React from 'react';
import { getPortPromise } from 'portfinder';

class CustomContext extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ position: nextProps.position, visible: nextProps.visible });
    }

    returnMenu(items) {

        var myStyle = {
            'position': "absolute",
            'top': this.state.position.y,
            'left': this.state.position.x
        }

        return <div className='custom-context' id='text' style={myStyle} transform={this.state.position}>
            {
                items.map((item, index, arr) => {
                    if (arr.length - 1 == index) {
                        return <div key={index} className=' custom-context-item-last'>{item.label}</div>
                    } else {
                        return <div key={index} className=' custom-context-item'>{item.label}</div>
                    }
                })
            }
        </div >;
    }

    render() {
        return (<div id='cmenu'>
            {this.state.visible ? this.returnMenu(this.props.items) : null}
        </div>
        )
    }
}

export default CustomContext;