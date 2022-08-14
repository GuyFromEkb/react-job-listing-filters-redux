import { createStore, combineReducers } from "redux";
import { filterReducer } from './filter/filter-reducer'


const rootReducer = combineReducers({
    filter: filterReducer
})

const initialValue = {
    filter: []
}

const store = createStore(rootReducer, initialValue, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }