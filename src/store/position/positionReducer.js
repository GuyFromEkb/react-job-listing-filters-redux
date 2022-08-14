import { ADD_POSITIONS } from "./positionAction";

const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            return action.payload
        }

        default:
            return state
    }
}
export { positionReducer }