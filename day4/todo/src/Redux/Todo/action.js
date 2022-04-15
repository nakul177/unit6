import axios from "axios"

export const TODO_GET = "TODO_GET"
export const TODO_LOADING = "TODO_LOADING"
export const TODO_ERR = "TODO_ERR"

export const Todo_Get = (payload) =>({
    type:TODO_GET,
    payload
})

export const Todo_Loading = () =>({
    type:TODO_LOADING
})

export const Todo_Err = () =>({
    type:TODO_ERR
})

export const getTodo = () => (dispatch) =>{
    dispatch(Todo_Loading())
    axios.get(`http://localhost:3001/Todos`)
    .then((res)=>
    {dispatch(Todo_Get(res.data))})
    .catch((err)=>dispatch(Todo_Err()))
}