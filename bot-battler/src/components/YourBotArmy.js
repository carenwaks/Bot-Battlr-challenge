import React from "react";

function YourBotArmy ({ bots, removeBot, releaseBot}) {
    function handleDelete(bot) {
        removeBot(bot)
    }

    function handleRelease(bot) {
        releaseBot(bot)
    }
    
    return <div className="collection" onClick={() => handleRelease}>
            <h3>Army Display</h3>
            {bots.map(bot=> {
                return <div key={bot.id} className="bot-in-army" >
                <h3>{bot.name} Display</h3>
                <img src={bot.avatar_url} alt={bot.name} />
                <div><h3>Health:{bot.health}</h3></div>
                <div><h3>Damage:{bot.damage}</h3></div>
                <div><h3>Armor:{bot.armor}</h3></div>
                <div><h3>Bot_class:{bot.bot_class}</h3></div>
                <button onClick={() => handleDelete(bot)}>X</button>
                </div>
            })}
    </div>
}
export default YourBotArmy