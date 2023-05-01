import React from "react";

function BotDisplay ({id,name,health,damage,armor,bot_class,avatar_url, addBotToArmy}) {
    function handleAdd (bot) {
        console.log({id});
        addBotToArmy(bot)
    }

    function handleDelete ({id}) {
        console.log({id});       
    }
    return <div className="container" key={id} onClick={handleAdd}>
        <h3>{name} Display</h3>
        <img src={avatar_url} alt={name} />
        <div><h3>Health:{health}</h3></div>
        <div><h3>Damage:{damage}</h3></div>
        <div><h3>Armor:{armor}</h3></div>
        <div><h3>Bot_class:{bot_class}</h3></div>
        <button onClick={handleDelete}>X</button>
    </div>
}

export default BotDisplay