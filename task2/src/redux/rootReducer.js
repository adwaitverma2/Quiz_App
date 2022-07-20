import { combineReducers } from 'redux'
import QuesReducer from './question/QuesReducer'
import RegisterReducer from './register/RegisterReducer'
import LoginReducer from './login/loginReducer'
import UserReducer from './user/UserReducer'
import NewQuesReducer from './newQues/NewQuesReducer'
const rootReducer = combineReducers({
    ques: QuesReducer,
    RegUser: RegisterReducer,
    LogUser: LoginReducer,
    userName: UserReducer,
    newQues:NewQuesReducer
})
export default rootReducer