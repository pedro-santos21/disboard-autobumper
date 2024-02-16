# disboard-autobumper

Self-bot for discord that autobumps your server in Disboard. (Uses ```discord.js-selfbot-v13@v3.1```)

Recommended to run this on an alt in case your account gets flagged.



## How To Use

Clone the repository locally using
```js
git clone https://github.com/pedro-santos21/disboard-autobumper.git
```

Go over to the installed directory using CMD and run this command to install dependencies:
```js
npm install
```

Create a .env file and paste this:
```js
TOKEN=[YOUR DISCORD TOKEN]
CHANNEL_ID=[YOUR CHANNEL ID]
```

After replacing those values, you're ready to go! Run the program as so:
```js
node index.js
```

## How To Get Discord Token?

**Open Discord in your browser, log in, and run this code in Console (Discord Console - [Ctrl + Shift + I])**
```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    if (!req.c) return;
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

**Tags:** Autobumper, autobump, disboard, discord, discord autobumper, disboard autobumper, automatic bumper, autobumpr, discord bump, disboard bump
