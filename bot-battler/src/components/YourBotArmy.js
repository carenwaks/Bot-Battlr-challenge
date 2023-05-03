import React from "react";
// import BotDisplay from "./BotDisplay";

function YourBotArmy ({botArmy, releaseBot}) {
    
    function handleRelease(bot) {
        releaseBot(bot)
    }
    
    return <div className="army-collection">
            <h3>Army Display</h3>
            {botArmy.map( bot => (
                <div key={bot.id} onClick={() => handleRelease(bot)}>
                <img src={bot.avatar_url} alt={bot.name} />
        <div style={{display: "flex"}}>
            <div ><h3><img src="https://img.icons8.com/ios/50/null/heart-with-pulse--v1.png" style={{width: "20px"}} alt="icon"/>{bot.health}</h3></div>
            <div><h3>Damage:{bot.damage}</h3></div>
            <div><h3>Armor:{bot.armor}</h3></div>
        </div>
        <div><h3>Bot_class:{bot.bot_class}</h3></div>
                </div>
            ))}
            
    </div>
}

export default YourBotArmy;