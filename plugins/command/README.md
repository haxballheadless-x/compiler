## Command structure

---

### Methods

- `createCommand(message: Object, callback: callback)`

Example:

```js
new Command(room, { commandName: "hi", prefix: "!" }).createCommand(
  message,
  (args) => {
    room.sendAnnouncement("Hi!");
  }
);
```

---

## Code examples

alert.js

```js
const { Command } = require("@hhxjs/compiler/plugins");

class AlertCommand extends Command {
  constructor(room) {
    super(room, { commandName: "alert", prefix: "!" });
  }

  run(player, message) {
    this.createCommand(message, (args) => {
      this.room.sendAnnouncement(args.join(" "));
    });
  }
}

module.exports = AlertCommand;
```

onPlayerChat.js
```js
const Alert = require("../commands/alert");

module.exports = (player, message, room) => {
  new Alert(room).run(player, message);
};
```
