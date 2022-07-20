
import { USER_NAME } from "./UserType"

const initialState = {
    userName: ""
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_NAME: return {
            ...state,
            userName: action.payload
        }
        default: return state
    }
}
export default UserReducer