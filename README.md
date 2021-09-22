# Discord.js Bot Setup

> Note this project requires Node JS v16.6.0 or higher to work

> Note this is a Basic Bot Setup and has no Proper Commands

Over here I have made a simple discord.js bot setup for anyone to use  

First of all lets download the project shall we  
Open up your terminal ( Powershell or Command Prompt in Windows )

## Setup

I would suggest you to clone the project in some other directory then the home directory so lets switch to desktop  
```bash
cd Desktop
```

After this lets clone the project to your desktop. ( You will need Github CLI for this )  
```bash
git clone https://github.com/pnv28/djs-setup
```

Now to enter the project  
```bash
cd djs-setup
```

Now we got to install the packages which allows the bot to connect to discord, just use the command below to do it  

If you are using npm use the following command  
```bash
npm i
```

If you are using yarn, which I do recomend, use the following command  
```bash
yarn
```

Now thats sorted, go to your desktop and open the folder named *djs-bot* and find the file *config.json*  
Now open that file, I suggest you open it with atom or visual studio code but apps like nodepad will also work  

In there you will see this setup  

```json
{
    "clientId" : "YOUR_BOT_ID",
    "guildId" : "YOUR_SERVER_ID",
    "token" : "YOUR_BOT_TOKEN"
}
```

In the text field `YOUR_BOT_TOKEN`, Keep your bot token  
In the text field `YOUR_SERVER_ID`, Keep the Server ID where you will use the bot  
In the text field `YOUR_BOT_ID`, Keep the User ID of the Bot  

All of this is necessary and essential for the bot to work, or else the bot wont work. If any of the above info is wrong you will get error while using the bot  

Assuming you did all the above steps correctly now we have to register the slash commands to discord, doing this is simple, just use the below command  
```bash
node deploy-commands.js
```

After this you should see the following Response in the console  
```
Started refreshing application (/) commands.
Successfully reloaded application (/) commands.
```

> You may get error if the bot isn't in your server or if the server ID your provided was wrong. If neither of the case is true then go to your [Discord Developer Portal](https://discord.dev) and go in your bot application, go to *OAuth2* and in the scopes section click on `applications.commands`, and go to that URL. Select the server the bot is in and do what you do while inviting a bot  

> Note If you add any commands make sure to run the above command again to register it with discord, also do not run it after a successfull run or else you will have duplicate commands

# Usage

Now to use the bot, go back to terminal and type the following command  
```bash
node .
```
or
```bash
node main.js
```

You should see a message telling that your bot is online, and have fun using it  