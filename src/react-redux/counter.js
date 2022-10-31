import React from "react";
import {connect} from "react-redux";
import actions from "./action";

class Counter extends React.Component {
    render() {
        console.log('Counter,this.props', this.props)
        return (
            <>
                <p>Count：{this.props.count}</p>
                <br/>
                <button onClick={this.props.add}>Count++</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.props.minus}>Count--</button>

                {/* 这样的时候需要吧mapDispatchToProps去掉，否则把  dispatch map 丢了 */}
                {/* <br/>
                <button onClick={ ()=> this.props.dispatch({type: 'ADD'})}>Count++</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={ ()=> this.props.dispatch({type: 'MINUS'})}>Count--</button> */}
            </>
        );
    }
}

const mapStateToProps = (state) => state; // 函数，监视store中的state的变化

const mapDispatchToProps = { //对象：保存的action
    ...actions
}

// 将store中的state和需要store派发的action绑定到组件中
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
