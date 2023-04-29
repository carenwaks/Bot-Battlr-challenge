import React from "react";

function BotDisplay ({name,health,damage,armor,bot_class,catchphrase,avatar_url,created_at,updated_at}) {
    function handleAdd () {
        console.log("handle click");
    }

    function handleDelete () {
        console.log("delete activated");
    }
    return <div className="container" >
        <h3>{name} Display</h3>
        <img src={avatar_url} alt={name} onClick={handleAdd}/>
        <div>{health}</div>
        <div>{damage}</div>
        <div>{armor}</div>
        <div>{bot_class}</div>
        <div>{catchphrase}</div>
        <div>{created_at}</div>
        <div>{updated_at}</div>
        <button onClick={handleDelete}>Delete</button>
    </div>
}

export default BotDisplay