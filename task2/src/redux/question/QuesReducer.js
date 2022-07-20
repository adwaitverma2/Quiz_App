import { DISPLAY_QUESTION_REQUEST,DISPLAY_QUESTION_SUCCESS,DISPLAY_QUESTION_FAILURE } from "./QuesType"
const initialState = {
   loading: false,
   ques:[],
   error:'',
   reportFile:[]
} 
const QuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_QUESTION_REQUEST: return {
            ...state,
          loading:true
        }
        case DISPLAY_QUESTION_SUCCESS: return {
            
          loading:false,
          ques: action.payload,
          error:''
        }
        case DISPLAY_QUESTION_FAILURE: return {
            loading:false,
            ques:[],
            error:'action.payload'
          }
          case "report": return {
            ...state,
            reportFile:action.payload
          }
         default: return state
    }
}
export default QuesReducer