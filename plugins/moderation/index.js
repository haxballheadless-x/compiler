class Command {
    constructor(room, player) {
      this.room = room;
      this.player = player;
    }
    /**
     * 
     * @param {string} reason - Reason for ban
     */
    kick(reason) {
        this.room.kickPlayer(this.player.id, reason || null, false)
    }
    /**
     * 
     * @param {string} reason - Reason for kick
     */
    ban(reason) {
        this.room.kickPlayer(this.player.id, reason || null, true);
    }
  }
  
  module.exports = Command;