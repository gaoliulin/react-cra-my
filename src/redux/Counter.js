import React from "react";
// 导入store对象，通过该对象派发action
import store from "./store";

// 导入actions
// import bindActions from "../redex/actions";

// 创建类组件，实现页面效果
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 将store中的最新的state赋给当前组件的state
            // getState()：获取最新的state tree
            // count是在store.js文件中定义的，初始值为0
            number: store.getState().count,
        }
    }

    componentDidMount() { // 页面加载完成后执行该函数
        // 对store的state进行订阅
        // store.subscribe可以实现订阅，同时该方法会返回一个函数，用于取消订阅
        // 设置this.unSubScribe为当前类的属性，表示可以取消订阅的对象
        this.unSubScribe = store.subscribe(() => {
            this.setState({
                number: store.getState().count
            },()=>{
                this.forceUpdate();
            })
        })
    }


    componentWillUnmount() {
        // 在组件卸载时取消订阅
        this.unSubScribe();
        // this.unSubScribe2();
    }

    render() {
        return (
            <div>
                {/*页面上显示当前状态下的数值*/}
                <p>number:{this.state.number}</p>
                {/*当点击“加1”按钮时派发行为action：ADD*/}
                <button onClick={() => store.dispatch({type: "ADD"})}>加1</button>
                &nbsp;&nbsp;
                <button onClick={() => store.dispatch({type: "MINUS"})}>减1</button>
            </div>
        );
    }
}

export default Counter;
