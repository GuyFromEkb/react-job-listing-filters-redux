import { FilterActionTypes } from "../store/filter/filterAction"
import { PositionActionTypes } from "../store/position/positionAction"

export interface IAddFilterAction {
    type: FilterActionTypes.ADD_FILTER,
    payload: string
}

export interface IRemoveFilterAction {
    type: FilterActionTypes.REMOVE_FILTER,
    payload: string
}

export interface IRemoveAllFilterAction {
    type: FilterActionTypes.REMOVE_ALL_FILTER,
}

export type FilterActionType = IAddFilterAction | IRemoveFilterAction | IRemoveAllFilterAction

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

export interface IPositionAction {
    type: PositionActionTypes.ADD_POSITIONS,
    payload: IPosition[]
}

export interface IinitialRootReducerState {
    filter: string[],
    position: IPosition[]
}