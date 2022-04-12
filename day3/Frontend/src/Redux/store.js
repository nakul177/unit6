import {createStore , combineReducers} from "redux"
import { login_reducer } from "./Login/reducer"
import { sign_reducer } from "./Signup/reducer"

export const root_reducer = combineReducers({
   login:login_reducer,
   sign : sign_reducer 
})

export const store = createStore(root_reducer)