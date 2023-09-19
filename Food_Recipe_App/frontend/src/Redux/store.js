import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as recepieReducer,Detailreducer } from "./Recepie/reducer";
import { RandomRecepiereducer, SavedReducer } from "./Recepie/reducer";

const rootReducer = combineReducers({
    recepieReducer,
    RandomRecepiereducer,
    Detailreducer,
    SavedReducer
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));