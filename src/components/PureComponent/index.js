import React, { Component, PureComponent } from "react";


class Couent extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.count !== this.props.count;
    }

    render() {
        const {count} = this.props;
        console.log('Component    count update');

        return (
            <div>
                count: {count}
            </div>
        )
    }
} 

class PureCouent extends PureComponent{

    render() {
        const {count} = this.props;

        console.log('PureComponent    count update');

        return (
            <div>
                count: {count}
            </div>
        )
    }
} 

export {
    Couent,
    PureCouent
}