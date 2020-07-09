## Moderation structure

---

### Methods

- `ban(reason: String)`

Example:

```js
let mod = new Moderation(room, player);

mod.ban("Byee");
```

- `kick(reason: String)`

Example:

```js
let mod = new Moderation(room, player);

mod.kick("Byee");
```

---

## Code examples

ban.js

```js
const { Command, Moderation } = require("@hhxjs/compiler/plugins");

class BanCommand extends Command {
  constructor(room) {
    super(room, { commandName: "ban", prefix: "!" });
  }

  run(player, message) {
    this.createCommand(message, (args) => {
      let player = this.room.getPlayer(parseInt(args[0]));
      let mod = new Moderation(this.room, player);

      mod.ban("Byee");

      this.room.sendAnnouncement(
        `${player.name} It has been successfully banned!`
      );
    });
  }
}

module.exports = BanCommand;
```

kick.js

```js
const { Command, Moderation } = require("@hhxjs/compiler/plugins");

class KickCommand extends Command {
  constructor(room) {
    super(room, { commandName: "kick", prefix: "!" });
  }

  run(player, message) {
    this.createCommand(message, (args) => {
      let player = this.room.getPlayer(parseInt(args[0]));
      let mod = new Moderation(this.room, player);

      mod.kick("Byee");

      this.room.sendAnnouncement(`${player.name} It was successfully kicked!`);
    });
  }
}

module.exports = KickCommand;
```
