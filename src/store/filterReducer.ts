const ADD_FILTER = "ADD_FILTER"
const REMOVE_FILTER = "REMOVE_FILTER"
const REMOVE_ALL_FILTER = "REMOVE_ALL_FILTER"

interface AddFilterAction {
    type: ADD_FILTER,
    payload: string
}
interface RemoveFilterAction {
    type: ADD_FILTER,
    payload: string
}
interface AddFilterAction {
    type: ADD_FILTER,
    payload: string
}

interface FilterAction {
    type: string,
    payload?: string
}
const initialState: string[] = []

const filterReducer = (state = initialState, action: FilterAction): string[] => {

    switch (action.type) {
        case ADD_FILTER: {
            return [...state, action.payload]
        }
        case REMOVE_FILTER: {
            return state
        }
        case REMOVE_ALL_FILTER: {
            return initialState
        }
        default:
            return state
    }
}

export { filterReducer }