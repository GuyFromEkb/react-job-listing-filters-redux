import { createStore, compose } from "redux"
import { rootReducer } from "./rootReducer"
import { IinitialRootReducerState } from "../interface/interface"

const initialState: IinitialRootReducerState = {
    filter: [],
    position: []
}
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState,composeEnhancers() )

export { store }