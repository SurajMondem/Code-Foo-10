import React, {Fragment} from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import { store } from '../store';
import {addError, setCurrentUser, setToken} from "../store/actions";
import decode from 'jwt-decode';
import RouteViews from "./RouteViews";
import NavBar from "./NavBar";

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try{
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    } catch (e) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(e));
    }
}

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavBar/>
                <RouteViews/>
            </Fragment>
        </Router>
    </Provider>
);

export default App;