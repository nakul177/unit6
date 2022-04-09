import { useContext } from "react";
import { RegistartionContext } from "../Context/RegistartionContext";
import { Navigate , useNavigate } from "react-router-dom";


export const RegdTwo = () => {
 const nav = useNavigate()

  const {
    stateofresidence,
    address,
    pincode,
    name,
    age,
    BOD,
    dispatch,
    handleSubmit,
  } = useContext(RegistartionContext);

    if(!age || !name || !BOD){
        return <Navigate to="/one" />
    }

  return (
    <div>
      <h1>From 2</h1>
      <input
        type="text"
        placeholder="State"
        value={stateofresidence}
        onChange={(e) => dispatch({ type: "RESIDENCESTATE", payload:e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => dispatch({ type: "ADDERSS", payload:e.target.value })}
      />
      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => dispatch({ type: "PINCODE", payload:e.target.value })}
      />
      <button disabled={stateofresidence==="" || address==="" || pincode===""} onClick={() => handleSubmit()}>Submit</button>
      <button onClick={ () => nav("/users")}>Show Users</button>
    </div>
  );
};
