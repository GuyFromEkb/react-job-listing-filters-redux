import { RootState } from "../rootReducer"

const allPositions = (state: RootState) => state.position

const filterPositions = (state: RootState, filter: string[]) => {

    return state.position.filter(item => {
        const itemFilters = [item.role, item.level, ...item.languages, ...item.tools]

        return filter.every(filter => itemFilters.includes(filter))
    })
}

export { allPositions, filterPositions }