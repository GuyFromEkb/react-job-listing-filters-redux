import { createStore, combineReducers } from "redux";
import { filterReducer } from "./filter/filterReducer";
import { positionReducer } from "./position/positionReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    position: positionReducer
})

interface IinitialState {
    filter: string[]
}

const initialState: IinitialState = {
    filter: []
}

const store = createStore(
    rootReducer,
    initialState
)

type RootState = ReturnType<typeof rootReducer>


export type { RootState }
export { store }