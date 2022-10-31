import React from 'react';
import './index.css';

import HocFunc from '../components/HOC';


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
                    <h1>
                        <HocFunc text="homepage2"/>
                    </h1>
                </header>
                <HocFunc text="content"/>
                <HocFunc text="button"/>
            </div>
        );
    }
}

export default HomePage;