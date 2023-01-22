import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import botCard from "./BotCard";

function BotsPage() {
    const [botCollection, setBotCollection] = useState([])
    const [botArmy, setBotArmy] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/bots')
            .then(res => res.json())
            .then(data => setBotCollection(data))
    }, [])

    function deleteBot(bot) {
        fetch(`http://localhost:8002/bots/${bot.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setBotCollection(botCollection.filter(({id}) => id !== bot.id));
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
            console.log(res)
        })
    }

    function addRemoveBot(bot, army) {
        if (!botArmy.includes(bot)) {
            setBotArmy(botArmy => [...botArmy, bot])
        } else if (botArmy.includes(bot) && army) {
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
        }
    }

    return (
        <div>
            <YourBotArmy botArmy={botArmy} addRemoveBot={addRemoveBot}/>
            <BotCollection botCollection={botCollection} addRemoveBot={addRemoveBot}/>
        </div>
    )
}

export default BotsPage
