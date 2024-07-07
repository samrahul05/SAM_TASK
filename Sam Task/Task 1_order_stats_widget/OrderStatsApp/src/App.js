import React,{useEffect,useState} from 'react'
import WidgetOrderStats from './components/WidgetOrderStats'
import './App.css';

function App() {

   const [data,setData]=useState([]);
 
   useEffect(()=>{
      fetch('/data.json')
      .then(response => response.json())
      .then(data =>setData(data));
    },[]);
 
    return (
          <div className="App">
              <header className="App-header">
                 <h1>Order Statistics</h1>
              </header>
             
              <main>
                <WidgetOrderStats data={data} />
              </main>
          </div>
     )};

export default App;
