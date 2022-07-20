import axios from 'axios'
import {LOGUSER_REQUEST, LOGUSER_SUCCESS,LOGUSER_FAILURE} from './loginType'
export const DisplayUserLoginRequest = () => {
    return {
        type: 'LOGUSER_REQUEST'

    }
}
export const DisplayUserLoginSuccess = (data) => {
    return {
        type: 'LOGUSER_SUCCESS',
        payload: data

    }
}
export const DisplayUserLoginFailure = (error) => {
    return {
        type: 'LOGUSER_FAIURE',
        payload: error

    }
}
export const LoginUser = () => {
    return (dispatch) => {
        dispatch(DisplayUserLoginRequest)
        axios.get('http://localhost:3001/reg').then(response => {
            const data = response.data
            
            dispatch(DisplayUserLoginSuccess(data))
        })
            .catch(error => {
                const errorMsg = errorMsg
                dispatch(DisplayUserLoginFailure(errorMsg))
            })
    }

}
export const AdminScores = () => {
    return (dispatch) => {
        dispatch(DisplayUserLoginRequest)
        axios.get('http://localhost:3001/USER').then(response => {
            const data = response.data
            
            dispatch(DisplayUserLoginSuccess(data))
        })
            .catch(error => {
                const errorMsg = errorMsg
                dispatch(DisplayUserLoginFailure(errorMsg))
            })
    }

}


