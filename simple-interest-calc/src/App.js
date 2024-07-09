import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./App.css"



const  App=()=> {
  const[P,setP]= useState(0)
  const[T,setT]= useState(0)
  const[R,setR]= useState(0)
  const[Si,setSi]= useState(0)
  return (
    <div >
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar> 
      </AppBar>
      <br/>
      <center>
       <div className="main">
      <TextField onChange={(evt)=>setP(evt.target.value)} id="outlined-basic" label="Enter Principle" variant="outlined" /><br/><br/>
      <TextField onChange={(evt)=>setT(evt.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" /><br/><br/>
      <TextField onChange={(evt)=>setR(evt.target.value)} id="outlined-basic" label="Enter Rate" variant="outlined" /><br/><br/>
      <Button onClick={()=>setSi((P*T*R)/100)} variant="contained">Calculate</Button>
      <Typography variant="h6" gutterBottom>
       The simple interest is: {Si}
      </Typography>
      </div>
      </center>
    </div>
  );
}

export default App;
