import {useNavigate} from 'react-router-dom'
import axios from "axios";
export const LOGIN_SUCC = "LOGIN_SUCC";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_ERR = "LOGIN_ERR";
export const LOGOUT = "LOGOUT"

export const Login_Succ = (payload) =>({
    type:LOGIN_SUCC,
    payload
})

export const Login_Loading = () => (
 { type: LOGIN_LOADING }
);

export const Login_Err = () => (
{ type: LOGIN_ERR }
);

export const Logout = () =>(
  {type : LOGOUT}
)

export const login = ({username , password}) => (dispatch) => {
  dispatch(Login_Loading());
  axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login",{username ,password})
    .then((res) => {
      dispatch(Login_Succ({username , token:res.data.token}));
    
    })
    .catch((err) => {
      dispatch(Login_Err());
    });
};
