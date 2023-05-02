import './App.css';
import React,{useState,useEffect} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBots] =useState([]);
  const [botArmy, setBotArmy] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((r) => r.json())
      .then((bots) => setBots(bots))
  }, []); 
  // console.log(bots);
  
  function addBotToArmy (bot) {
    if(botArmy.includes(bot)) {
      setBotArmy(botArmy.filter((item) => item !== bot))
    } else {
      setBotArmy([...botArmy,bot])
    }
  }

  function removeBot  (bot)  {
    fetch(`http://localhost:3001/bots/${bot.id}`, {method: ' DELETE'})
    .then((r) => r.json())
    .then((army) => {
      const newBots = army.filter((item) => item !== bot);
      setBots(newBots)
    })
    .catch((error) => console.log('error found',error))
  }

  function releaseBot (bot) {
    const newBots= bots.filter((item) => item !== bot)
    setBots(newBots)
  }

  return (
    <div className="App">
      <YourBotArmy botsArmy={botArmy} releaseBot={releaseBot}/>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} removeBot={removeBot}/>
    </div>
  );
}

export default App;
