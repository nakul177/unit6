import { LOGIN_ERR, LOGIN_LOADING, LOGIN_SUCC , LOGOUT } from "./action";

const initstate = {
  loading: false,
  err: false,
  token: "",
  isAuth: false,
  username: "",
};

export const Login_reducer = (store = initstate, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCC:
      return {
        ...store,
        token:payload.token,
        err: false,
        loading: false,
        isAuth: true,
        username:payload.username
      };
    case LOGIN_ERR:
      return {
        ...store,
        token:"",
        err: true,
        loading: false,
        isAuth: false,
        username: "",
      };
      case LOGOUT:
        return {...initstate}

    default:
      return store;
  }
};
