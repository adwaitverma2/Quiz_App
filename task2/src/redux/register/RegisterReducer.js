import {RIGISTER_FAILURE, RIGISTER_REQUEST, RIGISTER_SUCCESS,ADMIN_USER_SUCCESS } from "./RegisterType"
const initialState = {

   RegUser:[],
   AdmUser:[],
  
}
const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case RIGISTER_REQUEST: return {
            ...state,
          loading:true
        }
        case RIGISTER_SUCCESS: return {
            
          loading:false,
          RegUser: action.payload,
          error:''
        }
        case RIGISTER_FAILURE: return {
            loading:false,
            RegUser:[],
            error:action.payload
          }
        case ADMIN_USER_SUCCESS: return{
          
            AdmUser:action.payload,
         
        }
         default: return state
    }
}

export default RegisterReducer