import axios from "axios"
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import './home.css'
import { Rest } from "./Rest"


export const Home = () =>{

    const [data, setData] = useState([])
    const [page , setPage] = useState(1)
    const limit = 5
 
     useEffect(() =>{
        getData(page, limit) 
     },[page , limit])
    
    const getData = (page , limit) =>{
        axios.get(`http://localhost:3001/get-restaurants?_page=${page}&_limit=${limit}`).then((res) =>{
           setData(res.data)
    })
    
}
    
    
    return(
     <>
      <h1>Home</h1>
      <div className="Button">
      <Button colorScheme='blue' disabled={page === 1}  onClick={() => setPage((page) => page-1)}>Prev</Button>
      <Button colorScheme='blue' onClick={() => setPage((page)=> page+1)}>Next</Button>
      <div> page no :{page}</div>
      </div>
      <div>
      <Button colorScheme='blue'>Prev</Button>  
      </div>
      

      <Rest data={data} />
       
     </>
   

    )
}