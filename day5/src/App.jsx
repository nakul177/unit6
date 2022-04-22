import { useState } from 'react';
import React from 'react';
import './App.css';
import { Inputboxes } from './componants/PinInput';

function App() {
 const [value ,setvalue]=useState("");
  return (
    <>
    <div className="App">
     <Inputboxes length={4} onChange={(val)=>setvalue(val)} label="input boxes" perbox={1} />
    </div>
    <h3>{value}</h3>
    </>
  );
}

export default App;
