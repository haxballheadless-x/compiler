class Command {
    constructor(room, player) {
      this.room = room;
      this.player = player;
    }
    kick(reason) {
        this.room.kickPlayer(this.player.id, reason || null, false)
    }
    ban(reason) {
        this.room.kickPlayer(this.player.id, reason || null, true);
    }
  }
  
  module.exports = Command;