import axios from 'axios';
const url='http://localhost:8000';

export const authenticateSignup =async(data)=>{
   
try {
    let response=await axios.post(`${url}/signup`,data);
    return response;
} catch (error) {
    console.log(error.message);
}
}

export const authenticateLogin =async(data)=>{
    
try {
   let response= await axios.post(`${url}/login`,data);
    return response;
} catch (error) {
    console.log(error.message);
}
}