
const positionsWithFilters = (state, filters) => {
    if (filters.length === 0) {
        return state.position
    }

    return state.position.filter(item => {
        const itemFilter = [].concat(item.role, item.level, ...item.languages, ...item.tools)

        return filters.every(filter => itemFilter.includes(filter))
    })
}

export { positionsWithFilters }