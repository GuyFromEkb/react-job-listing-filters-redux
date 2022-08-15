const ADD_FILTER = "ADD_FILTER"
const REMOVE_FILTER = "REMOVE_FILTER"
const REMOVE_ALL_FILTER = "REMOVE_ALL_FILTER"


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
export { ADD_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTER }