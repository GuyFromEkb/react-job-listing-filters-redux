import { PositionActionTypes } from "./positionAction"
import { IPosition, IPositionAction } from "../../interface/interface"


const initialState: IPosition[] = []

const positionReducer = (state = initialState, action: IPositionAction): IPosition[] => {

    switch (action.type) {
        case PositionActionTypes.ADD_POSITIONS: {
            return action.payload
        }
        default:
            return state
    }
}
export { positionReducer }