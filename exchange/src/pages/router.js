import { Route } from "react-router-dom";
import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';


export default function router() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={Register} />
        </div>
    )
}
