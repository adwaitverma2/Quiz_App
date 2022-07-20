import axios from 'axios'
import {DISPLAY_QUESTION_REQUEST,
      DISPLAY_QUESTION_SUCCESS,
       DISPLAY_QUESTION_FAILURE } from './QuesType'

export const DisplayQuestionRequest = () => {
    return {
        type: DISPLAY_QUESTION_REQUEST

    }
}
export const DisplayQuestionSuccess = (ques) => {
    return {
        type: DISPLAY_QUESTION_SUCCESS,
        payload: ques

    }
}
export const DisplayQuestionFailure = (error) => {
    return {
        type: DISPLAY_QUESTION_FAILURE,
        payload: error
    }
}
export const fetchQues = () => {
    return (dispatch) => {
        dispatch(DisplayQuestionRequest)
        axios.get('http://localhost:3001/ques').then(response => {
            const data = response.data
            
            dispatch(DisplayQuestionSuccess(data))
        })
            .catch(error => {
                const errorMsg = errorMsg
                dispatch(DisplayQuestionFailure(errorMsg))
            })
    }
}

export const GetAns = (data,marks,userName) => {
      console.log(data,marks,userName);
    return (dispatch) => {
        axios.post('http://localhost:3001/USER',{data:data,marks:marks,userName:userName})
         }
}

export const finalReport = () => {
    return (dispatch) => {
      
        axios.get('http://localhost:3001/USER').then(response => {
            const data = response.data
            
            dispatch({
                type:"report",
                payload:data

            })
        })
            .catch(error => {
                const errorMsg = errorMsg
                dispatch(DisplayQuestionFailure(errorMsg))
            })
    }
}

export const postQuestion = async (question) => {
    try {
      await axios
        .post("http://127.0.0.1:9000/api/quiz/questions", question)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };



