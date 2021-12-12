---
sidebar_position: 4
---

# Selfhosting

If you want to run this bot on your own computer you're probably looking at selfhosting.

## Intents

One thing to keep in mind is that this bot relies heavily on the presence intent in Discord's bot config. Without it the bot will not function correctly. Read more about intents [here](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## Environment Variables

In the following examples environment variables are defined.

If you're running Dynamica without docker they should be placed in a `.env` file in the Dynamica folder using the following structure:

```env
CLIENT_ID=<client_id>
TOKEN=<token>
GUILD_ID=<guild_id>
DATABASE_URL=<database_url>
```

With the database url by default the location is `file:/app/config/db.sqlite`. If you want to change this make sure you have a volume corresponding to the file path. Otherwise your data won't be saved across restarts.

:::warning

Make sure to replace `<client_id>`,`<token>` and `<guild_id>` with the correct values.

:::

## Without Docker

:::info Prerequisites

You must have the following items installed:

- [NodeJS](https://nodejs.org)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Git](https://git-scm.com/)

:::

1. Clone the repository [here](https://github.com/sebasptsch/Dynamica).
2. Run `yarn install` to install the dependancies.
3. Run `yarn prisma migrate deploy` to create the database.
4. Run `yarn start` to start the bot.

:::warning

The configuration files are stored by default in the `config` folder. Don't delete this if you want the bot to work properly.

:::

### Updating

When you want to update:

1. If the bot is running simply stop it using `Control` + `c`
2. Run `git pull` to get the latest changes.
3. Repeat steps 2-4 of the installation.

## With Docker

:::info Prerequisites

As part of the install you're going to need [Docker](https://docs.docker.com/engine/install/) or [Docker Compose](https://docs.docker.com/compose/install/) if you want to use a compose file.

:::

### CLI

```bash
docker run -d \
  --name=dynamica \
  -e CLIENT_ID=<client_id> \
  -e TOKEN=<token> \
  -e GUILD_ID=<guild_id> `#optional` \
  -v </path/to/config>:/app/config \
  --restart unless-stopped \
  ghcr.io/sebasptsch/dynamica
```

### Compose

```yml title="docker-compose.yaml"
---
version: "2.1"
services:
  discordbot:
    image: ghcr.io/sebasptsch/dynamica
    container_name: dynamica
    restart: unless-stopped
    volumes:
      - </path/to/config>:/app/config
    environment:
      - CLIENT_ID=<client_id>
      - TOKEN=<token>
      - GUILD_ID=<guild_id> # optional
```

## Pterodactyl Egg

Another option for self-hosting is a [Pterodactyl](https://pterodactyl.io/) Egg.

For that you can use this file:

```json title="egg-dynamica.json"
{
  "_comment": "DO NOT EDIT: FILE GENERATED AUTOMATICALLY BY PTERODACTYL PANEL - PTERODACTYL.IO",
  "meta": {
    "version": "PTDL_v1",
    "update_url": null
  },
  "exported_at": "2021-12-12T16:55:59-05:00",
  "name": "Dynamica",
  "author": "sebastian.pietschner@gmail.com",
  "description": "The dynamica discord bot",
  "features": null,
  "images": ["ghcr.io/sebasptsch/dynamica"],
  "file_denylist": [],
  "startup": "echo \"starting\"",
  "config": {
    "files": "{}",
    "startup": "{\r\n\"done\": \"Ready! Logged in as \"\r\n}",
    "logs": "{}",
    "stop": "^C"
  },
  "scripts": {
    "installation": {
      "script": null,
      "container": "alpine:3.4",
      "entrypoint": "ash"
    }
  },
  "variables": [
    {
      "name": "Database Path",
      "description": "The path in which to create the sqlite database.",
      "env_variable": "DATABASE_URL",
      "default_value": "file:/home/container/dynamica/db.sqlite",
      "user_viewable": true,
      "user_editable": false,
      "rules": "required|string"
    },
    {
      "name": "Token",
      "description": "The token for the discord bot.",
      "env_variable": "TOKEN",
      "default_value": "",
      "user_viewable": true,
      "user_editable": true,
      "rules": "required|string"
    },
    {
      "name": "Client ID",
      "description": "The client ID of your discord bot.",
      "env_variable": "CLIENT_ID",
      "default_value": "",
      "user_viewable": true,
      "user_editable": true,
      "rules": "required|string|size:18"
    }
  ]
}
```
