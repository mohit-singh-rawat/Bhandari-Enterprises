import axios from 'axios';
import { SIGNUP_URL } from '../../components/helper/apiCore/Endpoint';


export const signUpApi= async(name,email,password)=>{
    const response = await axios.post( SIGNUP_URL,{name,email,password})
    return response.data
    
}