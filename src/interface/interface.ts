import { FilterActionTypes } from "../store/filter/filterAction"
import { PositionActionTypes } from "../store/position/positionAction"

export interface AddFilterAction {
    type: FilterActionTypes.ADD_FILTER,
    payload: string
}

export interface RemoveFilterAction {
    type: FilterActionTypes.REMOVE_FILTER,
    payload: string
}

export interface RemoveAllFilterAction {
    type: FilterActionTypes.REMOVE_ALL_FILTER,
}

export type FilterAction = AddFilterAction | RemoveFilterAction | RemoveAllFilterAction

export interface IPosition {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}

export interface IFilterAction {
    type: PositionActionTypes.ADD_POSITIONS,
    payload: IPosition[]
}

export interface IinitialRootReducerState {
    filter: string[],
    position: IPosition[]
}