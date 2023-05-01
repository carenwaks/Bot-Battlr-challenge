import React from "react";
import BotDisplay from "./BotDisplay";

function BotCollection ({bots, addBotToArmy}) {
    return <div>
        {bots.map(bot => {
            return <BotDisplay key={bot.id}
            id={bot.id}
            name={bot.name}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            bot_class={bot.bot_class}
            avatar_url={bot.avatar_url}
            addBotToArmy={addBotToArmy}
            />
        })}
    </div>    
}

export default BotCollection