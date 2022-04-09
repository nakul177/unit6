import axios from "axios"
import { useEffect, useState } from "react"

export const Users = () =>{
const [data , setData] = useState([])

useEffect(() =>{
getDataAll()
},[])


const getDataAll = () =>{
    axios.get("http://localhost:3001/users").then((res) => {
     setData(res.data)
    })
}

    return(
        <div>
      <table style={{border:"1px solid black"}}>
    <tr style={{border:"1px solid black"}}>
 <th style={{border:"1px solid black"}}>Name</th>
 <th style={{border:"1px solid black"}}>Age</th>
 <th style={{border:"1px solid black"}}>BOD</th>
 <th style={{border:"1px solid black"}}>State</th>
 <th style={{border:"1px solid black"}}>Address</th>
 <th style={{border:"1px solid black"}}>pincode</th>
</tr>
   {data.map((e) =>(

<tr style={{border:"1px solid black"}} key={e.id}>
 <td style={{border:"1px solid black"}}>{e.name}</td>
 <td style={{border:"1px solid black"}}>{e.age}</td>
 <td style={{border:"1px solid black"}}>{e.BOD}</td>
 <td style={{border:"1px solid black"}}>{e.stateofresidence}</td>
 <td style={{border:"1px solid black"}}>{e.address}</td>
 <td style={{border:"1px solid black"}}>{e.pincode}</td>
</tr>

    ))}
     </table>

        </div>
    )
}