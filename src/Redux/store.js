import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cityReducer } from "./Reducer";







const rootreducer = combineReducers({
    city:cityReducer
})
const loggermiddleware = applyMiddleware(thunk);
const composeEnhancer = compose(loggermiddleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootreducer,composeEnhancer)