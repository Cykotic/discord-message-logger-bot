# Discord Message Logger Bot

This bot logs messages from specified channels in a Discord server.

## Setup

1. **Install Node.js and npm**: Make sure you have Node.js and npm installed on your system. If not, you can download them from here.

2. **Clone the repository**: Clone this repository to your local machine.

3. **Install dependencies**: Navigate to the project directory and run `npm install` to install the necessary dependencies.

## Configuration

1. **.env file**: Create a `.env` file in the root directory of the project. Inside this file, you'll need to add your bot token like so:
    ```
    token=YOUR_BOT_TOKEN
    ```
    Replace `YOUR_BOT_TOKEN` with the token of your Discord bot.

2. **Channel IDs**: In the `index.js` file, replace `'CHANNEL_ID'` with the IDs of the channels you want to log messages from. You can add as many channel IDs as you want.

## Running the Bot

To start the bot, navigate to the project directory and run `node index.js`.

## Functionality

Once the bot is running, it will log messages from the specified channels. The log message will include the channel name, the username of the author, and the content of the message.

## Note

This bot will not log messages from bots or messages from channels not specified in the `channelIds` array.
