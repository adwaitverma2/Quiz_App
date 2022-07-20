import UserData from "../../component/UserData"
import { LOGUSER_REQUEST, LOGUSER_SUCCESS, LOGUSER_FAILURE,LOGUSER } from "./loginType"
const initialState = {
   LogUser:[],
   name:""
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGUSER: return {
            ...state,
          name:action.payload
        }
     
       default: return state
    }
}
export default LoginReducer
