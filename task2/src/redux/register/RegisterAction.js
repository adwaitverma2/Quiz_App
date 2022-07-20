import axios from 'axios'
import {RIGISTER_REQUEST,RIGISTER_SUCCESS,RIGISTER_FAILURE} from './RegisterType'
export const DisplayUserLoginRequest = () => {
    return {
        type: 'LOGUSER_REQUEST'

    }
}
export const DisplayUserLoginSuccess = (ques) => {
    return {
        type: 'LOGUSER_SUCCESS'
      }
}
export const DisplayAdminSuccess= (data)=>{
    return{
        type:'ADMIN_USER_SUCCESS',
        payload:data
    }
}
export const DisplayUserLoginFailure = (error) => {
    return {
        type: 'LOGUSER_FAIURE',
        payload: error
 }
}
export const fetchlogUser = () => {
    return (dispatch) => {
        dispatch(DisplayUserLoginRequest)
        axios.get('http://localhost:3001/reg').then(response => {
            const data = response.data
              
        })
            .catch(error => {
                const errorMsg = errorMsg
                dispatch(DisplayUserLoginFailure(errorMsg))
            })
    }
}
export const RegisterUser = (user) => {
    return (dispatch) => {
        dispatch( DisplayUserLoginRequest )
        axios.post('http://localhost:3001/reg',user).then(response => {
            const data = response.data
              console.log(user);
              console.log(data);
        })
            .catch(error => {
                const errorMsg = errorMsg
                dispatch(DisplayUserLoginFailure (errorMsg))
            })
    }

}
export const UserAdmin = () => {
    return (dispatch) => {
      
        axios.get('http://localhost:3001/admin').then(response => {
            const data = response.data
         
            dispatch( DisplayAdminSuccess(data))
        })
            
    }

}
