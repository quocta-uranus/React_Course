import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems]=useState([]); 
  useEffect(() => {
    fetch('https://667c22983c30891b865b7a54.mockapi.io/fruit/fruit')
    .then (res => res.json())
    .then(items => {
      setItems(items)
    })
    
  },[])
 
  return (
    <div className="App">
      {/* <ul>
        {items.map(item => (
          
          <li key={item.id}>{item.name}</li>
          
        ))}
      </ul> */}
      {items.map(item => (
        
        <p>{item.content}</p>
        

      ))}
    </div>
  );
}

export default App;
