import axios from "axios";
const POSTDATA = 'POSTDATA';
const GETDETAILS = 'GETDETAILS';
const SETLOADING = 'SETLOADING';
const ACCEPTREQ = 'ACCEPTREQ';
const postData = (data)=> ({type : POSTDATA, payload : data})
const getData = (data) => ({type : GETDETAILS, payload : data});
const setLoading = (data) => ({type : SETLOADING, payload : data});
const acceptReq = (data)=>({type : ACCEPTREQ, payload : data});
const apiCallData = (id) =>{
    return async function (dispatch){
        try {
            dispatch(setLoading(true))
            const res = await axios.get(`https://dog-server-application.herokuapp.com/data/${id}`)
            localStorage.setItem('Details', JSON.stringify(res.data))
            dispatch(getData(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }
}
const apiCallPost = (data) =>{
    return async function (dispatch){
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`https://dog-server-application.herokuapp.com/data/post`, data)
            dispatch(postData(res.data))
        }
        catch (err) {
            console.log(err);
        }
    }
}
const apiCallUpadate = (url,kk) =>{
    return async function (dispatch) {
        try {
            dispatch(setLoading(true))
            const res = await axios.get(`https://dog-server-application.herokuapp.com/data/reqtolist/${url}?key=${kk}`)
            dispatch(apiCallData(url))
            dispatch(acceptReq(res.data));
        }
        catch (err) {

        }
    }
}
export {
    getData, GETDETAILS,
    apiCallData, apiCallUpadate,ACCEPTREQ, acceptReq,
    SETLOADING, 
    apiCallPost, postData, POSTDATA
}