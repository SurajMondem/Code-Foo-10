import {combineReducers} from "redux";

import error from "./error";
import auth from "./auth";
import {polls, currentPoll} from "./poll";

export default combineReducers({
    auth,
    error,
    polls,
    currentPoll
})