import axios from 'axios'
export const apiUrl = import.meta.env.VITE_API_SERVER;
export const getTechnologies = async () => {
    try {
        const responce = await axios.get(`${apiUrl}/api/getTechnologies`);
        return responce.data;
    }
    catch (e) {
        // console.log(e);
    }
}

export const getStack = async () => {
    try {
        const responce = await axios.get(`${apiUrl}/api/getStack`);
        return responce.data;
    }
    catch (e) {
        // console.log(e);
    }
}
export const sendRequestForm=async(name,email,message)=>{
    try {
        const responce=await axios.post(`${apiUrl}/api/sendForm`,{name:name,email:email,message:message});
        return responce.data
    }
    catch (e) {
        // console.log(e);
    }
   
}
