import React from "react";

function YourBotArmy ({ removeBot, releaseBot}) {
    function handleDelete(bot) {
        removeBot(bot)
    }

    function handleRelease(bot) {
        releaseBot(bot)
    }
    
    return <div className="collection" onClick={() => handleRelease}>
            <h3>Army Display</h3>
    </div>
}
export default YourBotArmy