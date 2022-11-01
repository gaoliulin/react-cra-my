import React,{ Component } from "react";

import {BrowserRouter as Router, Route, Link , Switch} from 'react-router-dom';



const HomePage = () => {
    return(
        <div>HomePage</div>
    )
}


const UserPage = () => {
    return(
        <div>UserPage</div>
    )
}

const ContentPage = () => {
    return(
        <div>ContentPage</div>
    )
}

class RouterPage extends React.Component{

    render(){
        return(
            <div>
                Router
                <Router>
                    <Link to='/' > home </Link> | 
                    <Link to='/user' > user </Link> | 
                    <Link to='/content' > content </Link>

                    {/* <Route path='/' component={HomePage} />
                    <Route path='/home' component={HomePage} />
                    <Route path='/user' component={UserPage} />
                    <Route path='/content' component={ContentPage} /> */}

                    {/* <Router>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/user' element={<UserPage />} />
                        <Route path='/content' element={<ContentPage />} />
                    </Router> */}
                    
                    {/* <Route path='/' element={<HomePage />} />
                    <Route path='/user' element={<UserPage />} />
                    <Route path='/content' element={<ContentPage />} /> */}


                    <Route path='/' exact component={HomePage} />
                    <Route path='/user' component={UserPage} />
                    <Route path='/content' component={ContentPage} />

                </Router>
            </div>
        )
    }
}

export default RouterPage;
