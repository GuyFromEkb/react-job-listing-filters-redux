import { IPosition } from "./positionReducer"

enum PositionActionTypes {
    ADD_POSITIONS = "ADD_POSITIONS",
}

const addPositions = (positionsData: IPosition[]): any => ({
    type: PositionActionTypes.ADD_POSITIONS,
    payload: positionsData
})


export { PositionActionTypes }
export { addPositions }