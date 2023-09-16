import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as recepieReducer } from "./Recepie/reducer";
import { RandomRecepiereducer } from "./Recepie/reducer";

const rootReducer = combineReducers({
    recepieReducer,
    RandomRecepiereducer,
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));