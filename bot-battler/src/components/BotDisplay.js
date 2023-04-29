import React from "react";

function BotDisplay ({name,health,damage,armor,bot_class,catchphrase,avatar_url,created_at,updated_at}) {
    return <div className="container">
        <h3>{name} Display</h3>
        <img src={avatar_url} alt={name}/>
        <div>{damage}</div>
        <div>{armor}</div>
        <div>{bot_class}</div>
        <div>{catchphrase}</div>
        <div>{created_at}</div>
        <div>{updated_at}</div>
        </div>
}

export default BotDisplay