import React, {Component} from "react";
import api from '../services/api';
import {Provider} from 'react-redux';
import { store } from '../store';
import {addError, setCurrentUser, setToken} from "../store/actions";
import decode from 'jwt-decode';

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
        <div>
            App Works
        </div>
    </Provider>
);

export default App;