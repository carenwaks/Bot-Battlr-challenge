import React from "react";

function YourBotArmy ({botArmy, releaseBot}) {
    
    // function handleRelease(bot) {
    //     releaseBot(bot)
    // }
    
    return <div className="army-collection">
            <h3>Army Display</h3>
             {/* {botArmy.map(bot => {
                return <div key={bot.id} onClick={() => handleRelease(bot)}>
                <h3>{bot.name} Display</h3>
                <img src={bot.avatar_url} alt={bot.name} />
                <div><h3>Health:{bot.health}</h3></div>
                <div><h3>Damage:{bot.damage}</h3></div>
                <div><h3>Armor:{bot.armor}</h3></div>
                <div><h3>Bot_class:{bot.bot_class}</h3></div>
                </div>
            })}  */}
    </div>
}

export default YourBotArmy