import axios from 'axios'
export const apiUrl=import.meta.env.VITE_API_SERVER;
export const getTechnologies= async ()=>{
try{
   const responce=await axios.get(`${apiUrl}/getPortfolio`);
    return responce.data;
}
catch(e){
    // console.log(e);
}
}

export const getStack= async ()=>{
    try{
       const responce=await axios.get(`${apiUrl}/getStack`);
        return responce.data;
    }
    catch(e){
        // console.log(e);
    }
    }
