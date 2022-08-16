// const ADD_FILTER = "ADD_FILTER"
// const REMOVE_FILTER = "REMOVE_FILTER"
// const REMOVE_ALL_FILTER = "REMOVE_ALL_FILTER"

enum UserActionTypes {
    ADD_FILTER = "ADD_FILTER",
    REMOVE_FILTER = "REMOVE_FILTER",
    REMOVE_ALL_FILTER = "REMOVE_ALL_FILTER"
}

export interface AddFilterAction {
    type: UserActionTypes.ADD_FILTER,
    payload: string
}
export interface RemoveFilterAction {
    type: UserActionTypes.REMOVE_FILTER,
    payload: string
}
export interface RemoveAllFilterAction {
    type: UserActionTypes.REMOVE_ALL_FILTER,
}

// interface FilterAction {
//     type: string,
//     payload?: string
// }

type FilterAction = AddFilterAction | RemoveFilterAction | RemoveAllFilterAction

const initialState: string[] = []

const filterReducer = (state = initialState, action: FilterAction): string[] => {

    switch (action.type) {
        case UserActionTypes.ADD_FILTER: {
            if (state.includes(action.payload)) {
                return state
            }

            return [...state, action.payload]
        }
        case UserActionTypes.REMOVE_FILTER: {
            return state.filter(item => item !== action.payload)
        }
        case UserActionTypes.REMOVE_ALL_FILTER: {
            return initialState
        }
        default:
            return state
    }
}

export { UserActionTypes }
export { filterReducer }
