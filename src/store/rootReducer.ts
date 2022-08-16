import { combineReducers } from "redux"
import { filterReducer } from "./filter/filterReducer"
import { positionReducer } from "./position/positionReducer"

const rootReducer = combineReducers({
    filter: filterReducer,
    position: positionReducer
})

type RootState = ReturnType<typeof rootReducer>

export type { RootState }
export { rootReducer }