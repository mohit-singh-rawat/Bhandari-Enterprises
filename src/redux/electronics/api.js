import axios from 'axios';
import { ELECTRONICS_URL } from '../../components/helper/apiCore/Endpoint';

export const electronicsApi= async(data)=>{
    const response = await axios.get(ELECTRONICS_URL)
    return response.data 
}