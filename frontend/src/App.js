import './App.css';
import { useEffect, useState } from 'react';

function App() {
 let[myarr, setMyArr]=useState([])

useEffect(()=>{
   
      fetch(process.env.REACT_APP_API_URL).then(res=>{
       return res.json() 
     })
     .then(myarr=>
      
  setMyArr(myarr)
     )
  
},[])


  return (
    <div className="App">
      <h1>Some Even Numbers Greater than 6  and Less than 20 When Multilied By 2</h1>
      <div>
      {myarr.map((element, index) =>(
        <p key={index}>{element * 2}</p>
      ))}
      
      </div>
    </div>
  );
}

export default App;
