import React, { Component } from "react";



class Content extends Component {
    render() {
        const { text } = this.props;

        return(
            <div>
                {text ||  'header'}
            </div>
        )
    }
}


const HocFunc = (props) => {
    console.log('.props', props)
    
    return <Content {...props} ></Content>
}


export default HocFunc;

