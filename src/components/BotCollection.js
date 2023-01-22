import React, {useState} from "react";
import BotCard from "./BotCard";

function BotCollection({botCollection, addOrRemoveBot}) {
    return (
        <div className="ui four column grid">
            <div className="row">
                {botCollection.map(bot => (
                    <BotCard key={bot.id} bot={bot} addOrRemoveBot={addOrRemoveBot} army={false}/>
                ))}
            </div>
        </div>
    );
}
export default BotCollection