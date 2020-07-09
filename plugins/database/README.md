## Database structure

---

### Methods

- `createDataPlayer(player: Object, data: Object)` _returns Promise_

Example:

```js
db.createDataPlayer(player, {
  conn: player.conn,
  auth: player.auth,
}).then(console.log);
```

---

- `getAllPlayers()` _returns Promise_

Example:

```js
db.getAllPlayers().then(console.log);
```
---

- `getDataPlayer(player: Object)` _returns Promise_


Example:

```js
db.getDataPlayer(player).then(console.log);
```

---

- `updateDataPlayer(player: Object, property: String, value: Any)` _returns Promise_


Example:

```js
db.updateDataPlayer(player, "conn", player.conn).then(console.log);
```
---

## Code examples

onPlayerJoin.js

```js
const updateAdmins = require("../utils/updateAdmins");
const { Database } = require("@hhxjs/compiler/plugins");
const db = new Database();

module.exports = (player, room) => {
  updateAdmins(room);

  db.getDataPlayer(player)
    .then(() => {
      db.updateDataPlayer(player, "conn", player.conn);
      db.updateDataPlayer(player, "auth", player.auth);
    })
    .catch(() => {
      db.createDataPlayer(player, {
        player: player.name,
        conn: player.conn,
        auth: player.auth,
        stats: {
          goals: 0,
          assists: 0,
          wins: 0,
          loses: 0,
        },
      });
    });
};
```
