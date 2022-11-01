import React from 'react';
import './index.css';

import HocFunc from '../components/HOC';
import Header from '../components/Header';

import Hooks from '../components/Hooks'

import { Couent,PureCouent } from '../components/PureComponent'
import RouterPage from '../router/index';



import Counter from '../redux/Counter'
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
        
    }

    componentDidMount(){
        
        // 测试 props 相同 多 PureComponent  Component 的 showComponentUpdate 钩子的使用
        // setInterval(()=>{
        //     this.setState({
        //         count: 1
        //     })
        //     console.log('setcount update');
        // }, 1000)

    }

    render(){
        const { count } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <HocFunc text="header"/>
                    <Header>
                        <div>组价复合</div>
                    </Header>
                </header>
                <HocFunc text="homepage2"/>
                <HocFunc text="button"/>

                <Hooks/>

                <Couent count={count}/>
                <PureCouent count={count}/>


                <Counter />


                <RouterPage />
            </div>
        );
    }
}

export default HomePage;