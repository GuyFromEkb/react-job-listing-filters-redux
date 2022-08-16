import { PositionActionTypes } from "./positionAction"
import { IPosition, IFilterAction } from "../../interface/interface"


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