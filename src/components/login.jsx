import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import assets from '../assets';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { grey,white } from '@mui/material/colors';

export const ScreenMode={
  SIGN_IN:"SIGN_IN",
  SIGN_UP:"SIGN_UP"
}
export default function Login() {

  const [backgroundImage,setBackgroundImage]=useState(assets.image1);
  const [currentMode,setCurrentMode]=useState("SIGN_IN");
  const [left,setLeft]=useState(0);
  const [right,setRight]=useState("unset");
  const [width,setWidth]=useState(0)
const onSwitchMode=(mode)=>{
  
  setWidth(100)
  const timeout1=setTimeout(()=>{
    setCurrentMode(mode);
  setBackgroundImage(mode==="SIGN_IN"?assets.image1:assets.image2);
  },1100);
  const timeout2 = setTimeout(() => {
    setLeft("unset");
    setRight(0);
    setWidth(0);
  }, 1200);

  const timeout3 = setTimeout(() => {
    setRight("unset");
    setLeft(0);
  }, 2500);

  return () => {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
  };
}
  return (
    <Grid container sx={{height:'100vh'}}>
    <Grid item xs={4}>
{
  currentMode===ScreenMode.SIGN_IN?(<SignInForm ScreenMode={ScreenMode} onSwitchMode={onSwitchMode} />):<SignUpForm ScreenMode={ScreenMode} onSwitchMode={onSwitchMode} />
}
<Box sx={{
  position:"absolute",
  top:0,
  left:left,
  right:right,
  width:`${width}%`,
  height:'100%',
  bgcolor:'grey',
  transition:'all 1s ease-in-out'
}}>

</Box>
    </Grid>
    <Grid item xs={8} sx={{
      position:"relative",
      backgroundImage:`url(${backgroundImage})`,
      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
    }}>
<Box sx={{
  position:"absolute",
  top:0,
  left:left,
  right:right,
  width:`${width}%`,
  height:'100%',
  bgcolor:'white',
  transition:'all 1s ease-in-out'
}}>

</Box>
    </Grid>
  </Grid>
  )
}
