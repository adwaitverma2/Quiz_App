
import { USER_NAME } from "./UserType"
export const UserName=(name)=>{
    console.log(name);
    return{
        type:'USER_NAME',
        payload: name
    }
}