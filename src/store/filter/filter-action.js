import { ADD_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTER } from './filter-constant'

const addFilter = (filter) => ({
    type: ADD_FILTER,
    payload: filter
})

const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    payload: filter
})

const removeAllFilter = {
    type: REMOVE_ALL_FILTER
}

export { addFilter, removeFilter, removeAllFilter }