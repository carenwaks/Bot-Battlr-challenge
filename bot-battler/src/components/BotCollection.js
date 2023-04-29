import React from "react";
import BotDisplay from "./BotDisplay";

function BotCollection ({bots}) {
    return <div>
        {bots.map(bot => {
            return <BotDisplay key={bot.id}
            name={bot.name}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            bot_class={bot.bot_class}
            catchphrase={bot.catchphrase}
            avatar_url={bot.avatar_url}
            created_at={bot.created_at}
            updated_at={bot.updated_at}
            />
        })}
    </div>    
}

export default BotCollection