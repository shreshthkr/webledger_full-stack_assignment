import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as recepieReducer } from "./reducer";

const rootReducer = combineReducers({
    recepieReducer
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));