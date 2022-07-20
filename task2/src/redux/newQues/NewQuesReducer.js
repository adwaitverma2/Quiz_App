import { NEW_QUESTION_SUCCESS } from "./NewQuesttype"
const initialState = {
   loading: false,
   newQues:[],
   error:'',
 
}
const NewQuesReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEW_QUESTION_SUCCESS: return {
          loading:false,
          ques: action.payload,
          error:''
        }
        default: return state
    }
}
export default NewQuesReducer