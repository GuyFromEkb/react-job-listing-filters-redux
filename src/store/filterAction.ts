import { AddFilterAction, RemoveFilterAction, RemoveAllFilterAction, UserActionTypes } from "./filterReducer";

const addFilter = (filter: string): AddFilterAction => ({
    type: UserActionTypes.ADD_FILTER,
    payload: filter
})
const removeFilter = (filter: string): RemoveFilterAction => ({
    type: UserActionTypes.REMOVE_FILTER,
    payload: filter
})

const removeAllFilter: RemoveAllFilterAction = {
    type: UserActionTypes.REMOVE_ALL_FILTER,
}

export { addFilter, removeFilter, removeAllFilter }