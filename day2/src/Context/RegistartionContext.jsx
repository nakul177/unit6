import axios from "axios"
import { createContext, useReducer } from "react"

const initState = {
  name : "",
  age:"",
  BOD :"",
  stateofresidence:"",
  address:"",
  pincode:"",  
}



const reducer = (state , { type, payload }) => {
  switch (type) {

  case "NAME":
    return { ...state, name:payload }

    case "AGE" :
    return {...state, age:payload}

    case "BOD" :
    return {...state, BOD:payload}

    case "RESIDENCESTATE" :
        return {...state , stateofresidence:payload}

     case "ADDERSS" :
           return {...state , address:payload}

      case "PINCODE" :
          return {...state , pincode:payload}    
  default:
    throw new Error();
  }
}

export const RegistartionContext = createContext()


export function RegistartionContextProvider({children}){
const [state , dispatch] = useReducer(reducer,initState)

const handleSubmit = () =>{
  axios.post("http://localhost:3001/users" , state).then(()=>{
    alert("thanks")
  })
  .catch((err)=>{
    console.log(err)
  })
 
}

const {name , age , BOD , stateofresidence , address , pincode} = state

    return(
        <RegistartionContext.Provider value={{name , age , BOD ,  stateofresidence , address , pincode , dispatch , handleSubmit}}>{children}</RegistartionContext.Provider>
    )
}