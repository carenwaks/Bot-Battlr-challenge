import React from "react";
import BotDisplay from "./BotDisplay";

function BotCollection ({bots, addBotToArmy,removeBot}) {
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