import React,{useState,useEffect} from "react";
import BotDisplay from "./BotDisplay";

function BotCollection ( {addBotToArmy,removeBot}) {
    const [bots,setBots] =useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/bots")
          .then((r) => r.json())
          .then((bots) => setBots(bots))
      }, []); 

    return <div className="bot-collection"  style={{display: "grid"}}>
        {bots.map(bot => {
            return <BotDisplay key={bot.id}
            bot={bot}
            addBotToArmy={addBotToArmy}
            removeBot={removeBot}
            />
        })}
    </div>    
}

export default BotCollection