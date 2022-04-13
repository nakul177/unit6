import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { login_err, login_loding, login_success } from "../Redux/Login/action";
import { useNavigate , Navigate} from "react-router-dom";
import axios from "axios";

export const Login = () => {
  // const [username , setusername] = useState("")
  const [email, setemail] = useState("");
  const [password, setPassword] = useState(" ");
  const {token , isAuth} = useSelector((state) => state.sign)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    const userdata = {
      email,
      password,
    };      
        dispatch(login_loding());
        axios
          .post("https://reqres.in/api/login", userdata)
          .then((res) => {
              console.log(res.data);
            dispatch(login_success(res.token));
            navigate('/get-restaurants')
          })
          .catch((err) => {
            dispatch(login_err())
          });
  };
  if(token===""){
    return <Navigate to="/sign"/>
  }

  return (
    <div>
        {/* <input type="text" placeholder='name' value={username}  onChange={(e) =>{
        setusername(e.target.value)
      }}/> */}
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={()=>handleSubmit()}>Submit</button>
    </div>
  );
};
