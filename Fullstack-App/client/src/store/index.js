import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const DEFAULT_STATE = {
    error: {message: null}
};

export const store = createStore(
    rootReducer,
    DEFAULT_STATE,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);