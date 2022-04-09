import {Route , Routes}     from "react-router-dom"
import { Home } from "../Components/Home"
import { RegdOne } from "../Components/RegdOne"
import { RegdTwo } from "../Components/RegdTwo"
import { Users } from "../Components/Users"

export const Routing = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/one" element={<RegdOne/>}/>
            <Route path="/two" element={<RegdTwo/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    )
}