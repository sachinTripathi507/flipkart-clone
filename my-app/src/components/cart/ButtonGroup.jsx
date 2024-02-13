import React, { useState } from 'react'
import {Button,ButtonGroup} from '@mui/material';
import styled from '@emotion/styled';


const Comp= styled(ButtonGroup)`
margin-top:30px;
`
const GroupButton = ({count,setCount}) => {
  // const[count,setCount]= useState(1);
  // const[Disabled,setDisabled]=useState(false);
  
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  // if (count===1) {
  //   setDisabled(true);
  // }
  
  return (
    <>
   < Comp>
   <Button onClick={()=>decrement()}  style={{color:'black',borderRadius:'50%'}}>- </Button>
   <Button >{count}</Button>
   <Button onClick={()=>increment()}  style={{color:'black',borderRadius:'50%'}}>+</Button>
   </ Comp>
   </>
  )
}

export default GroupButton;