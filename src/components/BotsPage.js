import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
    const [botCollection, setBotCollection] = useState([])
    const [botArmy, setBotArmy] = useState([])

    useEffect(() => {
        fetch('https://bot-battlr-json.vercel.app/bots')
            .then(res => res.json())
            .then(data => setBotCollection(data))
    }, [])

    function deleteBot(bot) {
        fetch(`https://bot-battlr-json.vercel.app/bots/${bot.id}`, {
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

    function addRemoveBot(bot, inArmy) {
        if (botArmy.includes(bot) && inArmy === true) {
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
        } else if (botArmy.includes(bot) === false) {
            setBotArmy(botArmy => [...botArmy, bot])
        }
    }

    return (
        <div>
            <YourBotArmy botArmy={botArmy} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
            <BotCollection botCollection={botCollection} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
        </div>
    )
}

export default BotsPage
