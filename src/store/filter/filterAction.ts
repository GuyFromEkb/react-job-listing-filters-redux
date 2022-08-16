import { IAddFilterAction, IRemoveFilterAction, IRemoveAllFilterAction, } from '../../interface/interface'

enum FilterActionTypes {
    ADD_FILTER = "ADD_FILTER",
    REMOVE_FILTER = "REMOVE_FILTER",
    REMOVE_ALL_FILTER = "REMOVE_ALL_FILTER"
}

const addFilter = (filter: string): IAddFilterAction => ({
    type: FilterActionTypes.ADD_FILTER,
    payload: filter
})
const removeFilter = (filter: string): IRemoveFilterAction => ({
    type: FilterActionTypes.REMOVE_FILTER,
    payload: filter
})

const removeAllFilter: IRemoveAllFilterAction = {
    type: FilterActionTypes.REMOVE_ALL_FILTER,
}

export { FilterActionTypes}
export { addFilter, removeFilter, removeAllFilter }
