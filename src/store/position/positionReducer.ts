import { PositionActionTypes } from "./positionAction"

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

const initialState: IPosition[] = []

const positionReducer = (state = initialState, action: IFilterAction): IPosition[] => {

    switch (action.type) {
        case PositionActionTypes.ADD_POSITIONS: {
            return action.payload
        }
        default:
            return state
    }
}

export { positionReducer }