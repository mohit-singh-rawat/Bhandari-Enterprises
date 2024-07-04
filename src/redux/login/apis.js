import axios from 'axios';
import { LOGIN_URL } from '../../components/helper/apiCore/Endpoint';


export const loginApi= async(email,password)=>{
    const response = await axios.post(LOGIN_URL,{email,password})
    return response.data
    
}
