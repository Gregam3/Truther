import React from 'react';

class CustomContext extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            position: props.position
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.position !== this.state.position) {
          this.setState({ position: nextProps.position });
        }
      }

    componentDidMount() {
        var self = this;
        document.addEventListener("contextmenu", function (event) {
            event.preventDefault();
            const clickX = event.clientX;
            const clickY = event.clientY;
            self.setState({ visible: true, x: clickX, y: clickY });

        });
        document.addEventListener("click", function (event) {
            event.preventDefault();
            self.setState({ visible: false, x: 0, y: 0 });

        });
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