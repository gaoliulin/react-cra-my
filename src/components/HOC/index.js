import React, { Component } from "react";



class Content extends Component {
    render() {
        const { text } = this.props;

        return(
            <div>
                <h1>
                    {text ||  'header'}
                </h1>
            </div>
        )
    }
}


const HocFunc = (props) => {
    console.log('.props', props)
    
    return <Content {...props} ></Content>
}


export default HocFunc;

