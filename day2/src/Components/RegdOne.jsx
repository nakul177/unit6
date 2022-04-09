import { useContext } from "react";
import { RegistartionContext } from "../Context/RegistartionContext";
import {useNavigate} from "react-router-dom"

export const RegdOne = () => {

  const { name, age, BOD, dispatch } = useContext(RegistartionContext);
  const navigate = useNavigate()

  return (
    <div>
      <h1>From 1</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => dispatch({ type: "NAME", payload:e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => dispatch({ type: "AGE", payload:e.target.value })}
      />
      <input
        type="text"
        placeholder="BOD"
        value={BOD}
        onChange={(e) => dispatch({ type: "BOD", payload:e.target.value })}
      />
      <button disabled={name==="" || age==="" || BOD===""} onClick={() => navigate("/two")}>NEXT</button>
    </div>
  );
};
