import { AddFilterAction, RemoveFilterAction, RemoveAllFilterAction, } from '../../interface/interface'

enum FilterActionTypes {
    ADD_FILTER = "ADD_FILTER",
    REMOVE_FILTER = "REMOVE_FILTER",
    REMOVE_ALL_FILTER = "REMOVE_ALL_FILTER"
}

const addFilter = (filter: string): AddFilterAction => ({
    type: FilterActionTypes.ADD_FILTER,
    payload: filter
})
const removeFilter = (filter: string): RemoveFilterAction => ({
    type: FilterActionTypes.REMOVE_FILTER,
    payload: filter
})

const removeAllFilter: RemoveAllFilterAction = {
    type: FilterActionTypes.REMOVE_ALL_FILTER,
}

export { FilterActionTypes}
export { addFilter, removeFilter, removeAllFilter }
