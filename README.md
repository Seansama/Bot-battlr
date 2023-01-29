**BOT-BATTLR**

Welcome to **Bot Battlr**, the one and only spot in the known universe where you
can custom build your own Bot Army! This is our app:

**Features**

- See profiles of all bots.
- Add an individual bot to my army by clicking on it.
- Release a bot from my army by clicking on it. 
- Discharge a bot from their service forever, by clicking the button marked
  "x".

You can visit the deployed site [here](https://bot-battlr-fawn.vercel.app/)

**Installation and operation**

- You will need to install a javascript package known as `JSON-server`

- The above can be done by typing `npm i json-server` into the bash prompt.

- Once installed you can now use `npx json-server --watch db.json` to be able to start up the backend json service.

- Now type in `npm start` to get the app started.

**The files in this project are:**

Aside from the files that are generated upon creation of a react app which can be found [here](https://medium.com/@abesingh1/create-react-app-files-folders-structure-explained-df24770f8562), we have:

- BotCard.js - A component that Contains info about individual bots in your army.
- BotCollection.js - Contains all bots available.
- YourBotArmy.js - Contains all bots enlisted to your army from the general collection.
- BotsPage.js - Renders all bots to app.
- db.json - contains the data that will be fetched to give UI output.
- LICENSE - contains an open source licence for this project.
- This README

_This project has been done by:_

Shaun Mwangi

_This project is open source under an MIT open source licence._
