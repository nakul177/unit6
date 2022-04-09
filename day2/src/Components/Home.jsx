import {useNavigate} from "react-router-dom"

export const Home = () => {
 const Navigate = useNavigate()
  return (
    <div>
     <button  onClick={()=>Navigate("/One")}>ONE</button>
     <button  onClick={()=>Navigate("/Two")}>TWO</button>
     <button  onClick={()=>Navigate ("/users")}>USERS</button>
    </div>
  );
};
