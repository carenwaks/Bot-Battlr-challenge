import './App.css';
import React,{useState,useEffect} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBots] =useState([])
  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((r) => r.json())
      .then((bots) => setBots(bots))
  }, []); 
  console.log(bots);

  return (
    <div className="App">
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  );
}

export default App;
