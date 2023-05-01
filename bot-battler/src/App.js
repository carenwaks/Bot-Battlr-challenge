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
  // console.log(bots);
  function addBotToArmy (bot) {
    if(bots.includes(bot)) {
      setBots(bots.filter((item) => item !== bot))
    } else {
      setBots([...bots,bot])
    }
  }

  const removeBot = (bot) => {
    fetch(`http://localhost:3001/bots/${bots.id}`, {method: ' DELETE'})
    .then((r) => r.json())
    .then((army) => {
      const newBots = army.filter((item) => item !== bot);
      setBots(newBots)
    })
    .catch((error) => alert('error found',error))
  }

  function releaseBot (bot) {
    const newBots= bots.filter((item) => item !== bot)
    setBots(newBots)
  }

  return (
    <div className="App">
      <YourBotArmy bots={bots} removeBot={removeBot} releaseBot={releaseBot}/>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy}/>
    </div>
  );
}

export default App;
