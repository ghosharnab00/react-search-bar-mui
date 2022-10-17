import { useState, useEffect } from 'react';
import './App.css';
import {Typography, Box, TextField, Autocomplete} from '@mui/material'
import FilterPrducts from './filterProducts';
import { fetchdata } from './fetchdata';



function App() {
const [input, setInput] = useState('')
const [list, setList]= useState([]);


useEffect(()=>{
    fetchdata()
    .then(res=>setList(res))
},[])


const handleInput = (e)=>{
  console.log(e.target.value)
  setInput(e.target.value.toLowerCase())
}


  return (
    <Box className="App"
    sx={{
      width: 400,
      height: 660,
     margin:'100px auto',
     
     display:'flex',
     flexDirection:'column',
     justifyContent:'space-evenly'
     }}>
      <Typography variant='h4' component={'h1'}>React Search Bar</Typography>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={list.map(item=>item.title)}
    
      renderInput={(params) => <TextField {...params} 
      label="Search title"
      onSelect={handleInput}
      sx={{
        width: 350,
        margin:'10px auto',
      }}  />}
    />
    
   
  <FilterPrducts searchstring={input} list={list}/>
    </Box>
  );
}

export default App;
