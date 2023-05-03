import './App.css';
import React,{useState} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  
  const [botArmy, setBotArmy] = useState([])
  
  function addBotToArmy (bot) {
    if(botArmy.includes(bot)) {
      setBotArmy(botArmy.filter((item) => item !== bot))
    } else {
      setBotArmy([...botArmy,bot])
    }
  };

  // function addBotToArmy(bot) {
  //   if (botArmy.find((addedbot) => addedbot.id === bot.id)) {
  //     return;
  //   }
  //   setBotArmy([...botArmy, bot]);
  // }



  function removeBot(bot) {
    fetch(`http://localhost:3001/bots/${bot.id}`, { method: 'DELETE' })
      .then((r) => r.json())
      .then(() => {
        const newBots = bot.filter((item) => item !== bot);
        setBotArmy(newBots);
      })
      .catch((error) => console.log('error found', error));
  }

  function releaseBot (bot) {
    const newBots= bot.filter((item) => item !== bot)
    setBotArmy(newBots)
  }

  return (
    <div className="App">
      <YourBotArmy botArmy={botArmy} releaseBot={releaseBot}/>
      <BotCollection  addBotToArmy={addBotToArmy} removeBot={removeBot}/>
    </div>
  );
}

export default App;
