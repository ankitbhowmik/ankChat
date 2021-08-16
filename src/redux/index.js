import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import HeaderReducer from "./header-reducer";

const initialStore = combineReducers({
    Header_reducer: HeaderReducer
})

const store = createStore(initialStore, compose(applyMiddleware(thunk)))

export default store;