import './App.css';
import { useEffect,useState } from 'react';
import Colors from './Components/Colors';

import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let[data,setData]=useState([])
  const fetchData=async()=>{
    const response=await axios.get('https://reqres.in/api/unknown');
    setData(response.data.data);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
     //{JSON.stringify(data)}
    <div className="App">
      <h1>Colors-Frontend Task-1</h1>
     {
     data.map((color)=>
     {
      return (
            <Colors name={color.name}/>
            
      )

     }
     
     )}
     <h1>COLORS -- TASK2</h1>
<h1>---------------</h1>
{data.map((color)=>
     {
      return (
     
    <center>
     <h1 style={{color:color.color}}>{color.name}</h1> 
     </center>
      
      );
     })}
      
    </div>
  );
}

export default App;
