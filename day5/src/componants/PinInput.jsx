import PropTypes from "prop-types"
import React, { useRef } from "react"
import { PinItem } from "./PinItem"
export const Inputboxes = ({length , label , perbox , onChange,onBackspace})=>{
    const [values ,setvalues]=React.useState(new Array(length).fill(""));
    const element = useRef(new Array(length).fill(0))
    const handlechange =(value ,index)=>{
      console.log(value , index);
      const val =[...values];
      val[index]=value;
      setvalues(val);
      if( value.length>0 && value.length<=perbox && index <length -1){
        element.current[index+1].focus()
      }
     onChange(val.join(""))
    }

    const handlebackspace  =(value , index)=>{
     if(index>0){
        element.current[index-1].focus()
     }
     const val =[...values];
     val[index]=value;
     setvalues(val);
     onChange(val.join(""))
    }

    const handlepaste =(e)=>{
     e.preventDefault();
     console.log(e.clipboardData.getData("Text"))
    }
    return (
        <div onPaste={handlepaste}>
        <div><h1>{label}</h1></div>
        {values.map((item , index)=><PinItem key={index} 
        onChange={(v)=>handlechange(v,index)}
        ref={n=>element.current[index]=n}
        onBackspace={(v)=>handlebackspace(v,index)}
         max={perbox}/>)}
        </div>
    )
}
Inputboxes.propTypes ={
 length:PropTypes.number,
 perbox:PropTypes.number,
 label:PropTypes.string
}
Inputboxes.defaultProps={
    label:"label",
    perbox:1
}