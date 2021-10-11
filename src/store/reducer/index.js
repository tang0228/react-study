import {combineReducers} from "redux"

import countReducer from "./count";
import navReducer from "./nav";

export default combineReducers({
    countReducer,
    navReducer
})