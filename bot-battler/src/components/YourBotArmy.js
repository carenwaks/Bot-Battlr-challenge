import React from "react";

function YourBotArmy ({bots, removeBot, releaseBot}) {
    function handleDelete(bot) {
        removeBot(bot)
    }

    function handleRelease(bot) {
        releaseBot(bot)
    }
    
    return <div className="collection" onClick={() => handleRelease}>
            <h3>Army Display</h3>
            <button onClick={() => handleDelete(bots)}>X</button>
    </div>
}
export default YourBotArmy