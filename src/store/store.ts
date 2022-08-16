import { createStore } from "redux"
import { rootReducer } from "./rootReducer"
import { IinitialRootReducerState } from "../interface/interface"

const initialState: IinitialRootReducerState = {
    filter: [],
    position: []
}

const store = createStore(rootReducer, initialState)

export { store }