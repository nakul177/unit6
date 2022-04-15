import {Navigate} from 'react-router-dom'

export const Private = ({isAuth , children}) =>{

    return isAuth ? children : <Navigate to='/login'/>

}