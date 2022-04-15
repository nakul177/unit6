import {TODO_ERR , TODO_LOADING , TODO_GET} from './action'

const initstate = {
    loading : false,
    err:false,
    todos:[]
}

export const Todo_reducer = (store=initstate , {type , payload}) =>{
   switch (type) {
       case TODO_LOADING:
           return{
               ...store , loading:true
           }
        case TODO_GET:
            return {
                ...store , loading:false , err:false ,todos:[...payload]
            }
        case TODO_ERR :
            return {
                ...store , err:true , todos:[]
            }
       default:
         return store
   }
}

