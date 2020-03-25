import React from "react";
import {Provider} from 'react-redux';
import { store } from '../store';
import {addError, setCurrentUser, setToken} from "../store/actions";
import decode from 'jwt-decode';
import Authentication from "../components/authentication";
import ErrorMessage from '../components/ErrorMessage';

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
            <Authentication authType={'login'} />
            <ErrorMessage />
    </Provider>
);

export default App;