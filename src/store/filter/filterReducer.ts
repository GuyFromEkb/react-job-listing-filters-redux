import { FilterAction } from '../../interface/interface'
import { FilterActionTypes } from './filterAction'

const initialState: string[] = []

const filterReducer = (state = initialState, action: FilterAction): string[] => {

    switch (action.type) {
        case FilterActionTypes.ADD_FILTER: {
            if (state.includes(action.payload)) {
                return state
            }
            return [...state, action.payload]
        }
        case FilterActionTypes.REMOVE_FILTER: {
            return state.filter(item => item !== action.payload)
        }
        case FilterActionTypes.REMOVE_ALL_FILTER: {
            return initialState
        }
        default:
            return state
    }
}
export { filterReducer }
