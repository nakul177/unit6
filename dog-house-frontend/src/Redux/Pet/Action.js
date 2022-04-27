import axios from 'axios';
const UPLOADPET = "UPLOADPET";
const uploadPet = (data)=>({type : UPLOADPET, payload : data}); 
const apiCallPet = (data)=>{
    return async (dispatch)=>{
        try {
            const postData = await axios.post("https://dog-server-application.herokuapp.com/pet/post",data);
            console.log(postData.data)
            dispatch(uploadPet(postData.data.pet))
        }
        catch (err) {
            console.log(err)
        }
    }
}
export {
    UPLOADPET, uploadPet, apiCallPet
}