import { ADD_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTER } from "./filterAction"

const filterReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_FILTER: {
            return state.includes(action.payload) ? state : [...state, action.payload]
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.payload)
        }
        case REMOVE_ALL_FILTER: {
            return []
        }
        default:
            return state
    }
}

export { filterReducer }