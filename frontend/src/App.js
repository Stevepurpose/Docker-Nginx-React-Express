import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [myarr, setMyArr] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_APIURL)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setMyArr(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    console.log(process.env.REACT_APP_APIURL)
  return (
    <div className="App">
      <h1>Even Numbers Greater than 6 and Less than 20 When Multiplied By 2</h1>
      <div>
        {myarr.map((element, index) => (
          <p key={index}>{element * 2}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
