import React from 'react';
import './index.css';

import HocFunc from '../components/HOC';
import Header from '../components/Header';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
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
            </div>
        );
    }
}

export default HomePage;