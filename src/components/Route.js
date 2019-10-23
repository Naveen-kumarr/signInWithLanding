import React, { Component } from 'react'
import Login from './Login'
import Landing from './Landingpage'
import { Route,BrowserRouter } from "react-router-dom";
export default class Routepath extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                
                <Route exact path="/" component={Login} />
                <Route exact path="/landing" component={Landing} />
                </BrowserRouter>
            </div>
        )
    }
}
