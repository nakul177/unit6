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

const handleStar = (val) =>{
    if(val === 4){
        let d1 = data.filter((el) =>{
            return el.rating >= 4 && el.rating <= 5
        })
        setData([...d1])
    }
    else if(val === 3){
        let d1 = data.filter((el) =>{
            return el.rating >= 3 && el.rating <4
        })
        setData([...d1])
    }
    else if(val === 2){
        let d1 = data.filter((el) =>{
            return el.rating >= 2 && el.rating <3
        })
        setData([...d1])
    } 
    else if(val === 1){
        let d1 = data.filter((el) =>{
            return el.rating >=0 && el.rating <=1
        })
        setData([...d1])
    }  
    }
  const handlepayment = (val) =>{
       let d1 = data.filter((el) =>{
           return el.payment_method === val
       })
       setData([...d1])
  } 

  const handleADE = () =>{
      const d1 = 
    data.sort((a, b) => {
        if(a.name < b.name) return -1;
       })
       setData([...d1])
  }
  const handleDESC = () =>{
    const d1 = 
  data.sort((a, b) => {
      if(a.name > b.name) return -1;
     })
     setData([...d1])
}

    
    
    return(
     <>
      <h1>Home</h1>
      <div className="Button">
      <Button colorScheme='blue' disabled={page === 1}  onClick={() => setPage((page) => page-1)}>Prev</Button>
      <Button colorScheme='blue' onClick={() => setPage((page)=> page+1)}>Next</Button>
      <div> page no :{page}</div>
      </div>
      <div className="starbutton">
      <Button colorScheme='blue' onClick={() =>{
        handleStar(4)   
      }}>4 star</Button>
      <Button colorScheme='blue' onClick={() =>{
        handleStar(3)   
      }}>3 star</Button>  
      <Button colorScheme='blue' onClick={() =>{
        handleStar(2)   
      }}>2 star</Button>  
      <Button colorScheme='blue' onClick={() =>{
        handleStar(1)   
      }}>1 star</Button>    
      </div>
      <div className="paymentbutton">
      <Button colorScheme='blue' onClick={() =>{
           handlepayment("upi")
      }}>UPI</Button>
      <Button colorScheme='blue' onClick={() =>{
           handlepayment("card")
      }}>Card</Button>  
      <Button colorScheme='blue' onClick={() =>{
           handlepayment("cash")
      }}>Cash</Button>    
      </div>
      <div className="ASE">
      <Button colorScheme='blue' onClick={() =>{
          handleADE()
      }}>Asc</Button>
      <Button colorScheme='blue' onClick={() =>{
          handleDESC()
      }} >Desc</Button>
      </div>

      <Rest data={data} />
       
     </>
   

    )
}