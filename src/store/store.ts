import { createStore, combineReducers } from "redux";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
})

interface IinitialState {
    filter: string[]
}

const initialState: IinitialState = {
    filter: ["saaa","masa"]
}

const store = createStore(
    rootReducer,
    initialState
)

type RootState = ReturnType<typeof rootReducer>


export type { RootState }
export { store }