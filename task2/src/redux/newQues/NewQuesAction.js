import axios from 'axios'
import { NEW_QUESTION_SUCCESS } from "./NewQuesttype"
export const NewQuestionSuccess = (ques) => {
    return {
        type: 'NEW_QUESTION_SUCCESS',
        payload: ques
    }
}
export const NewQues = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/ques',data).then(response =>{
            const data = response.data
            dispatch(NewQuestionSuccess(data))
        })
   
    }
}