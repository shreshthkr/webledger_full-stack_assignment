import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as recepieReducer,Detailreducer } from "./Recepie/reducer";
import { SavedReducer } from "./Recepie/reducer";

const rootReducer = combineReducers({
    recepieReducer,
    Detailreducer,
    SavedReducer
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));