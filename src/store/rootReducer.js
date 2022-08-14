import { createStore, combineReducers } from "redux";
import { filterReducer } from './filter/filterReducer'
import { positionReducer } from "./position/positionReducer";


const rootReducer = combineReducers({
    position: positionReducer,
    filter: filterReducer
})

const initialValue = {
    position: [],
    filter: []
}

const store = createStore(rootReducer, initialValue, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }