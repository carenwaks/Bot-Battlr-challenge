import React from "react";

function BotDisplay ({bot, addBotToArmy, removeBot}) {
    function handleAdd (bot) {
       // console.log({bot.id});
        addBotToArmy(bot)
    }

    function handleDelete () {
      //  console.log({bot.id});
      removeBot(bot) 

    }
    return <div className="container" key={bot.id} onClick={() => handleAdd(bot)}>
        <h3>{bot.name} Display</h3>
        <img src={bot.avatar_url} alt={bot.name} />
        <div style={{display: "flex"}}>
            <div ><h3><img src="https://img.icons8.com/ios/50/null/heart-with-pulse--v1.png" style={{width: "20px"}} alt="icon"/>{bot.health}</h3></div>
            <div><h3>Damage:{bot.damage}</h3></div>
            <div><h3>Armor:{bot.armor}</h3></div>
        </div>
        <div><h3>Bot_class:{bot.bot_class}</h3></div>
        <button onClick={() => handleDelete(bot)}>X</button>
    </div>
}

export default BotDisplay